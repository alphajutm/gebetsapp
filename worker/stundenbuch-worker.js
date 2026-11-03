// Cloudflare Worker: liefert als JSON mit CORS (1) das Stundenbuch von katholisch.de (?hora=…),
// (2) den Heiligenkalender des Ökumenischen Heiligenlexikons (?tag=MM-DD) und (3) einzelne Heiligenartikel (?heilige=/BiographienM/….html).
// Einfügen im Cloudflare-Dashboard (Workers & Pages → Create → Hello World → Edit code).
// Wandelt eine Stundenbuch-Seite (katholisch.de) in Schritte [[Titel, Text], ...] um.
// Wird vom Cloudflare Worker (worker.js) benutzt. Keine Abhängigkeiten.
function decode(s) {
  return s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
}
function clean(s) {
  return decode(s).replace(/ /g, ' ').replace(/\s*[∗†]\s*$/g, '').replace(/[ \t]+/g, ' ').trim();
}
function parseStundenbuch(html) {
  const start = html.indexOf('c-divine-office-hora-content"');
  if (start < 0) throw new Error('Inhalt nicht gefunden');
  const body = html.slice(start);
  const re = /<(\/?)(div|p|e-ssr-tabs)\b([^>]*)>|<span[^>]*__text"[^>]*>([\s\S]*?)<\/span>|([^<]+)/g;
  const steps = []; let cur = null;
  const stack = []; let hidden = 0; let para = null; let expectTitle = 0;
  const tabsInfo = []; // pro offenem e-ssr-tabs: hat Auswahl-Buttons?
  const push = (t) => { cur = [t, []]; steps.push(cur); };
  let sec = '';
  let m;
  while ((m = re.exec(body))) {
    if (m[2]) {
      const close = m[1] === '/'; const tag = m[2]; const attrs = m[3] || '';
      if (!close) {
        let kind = 'other';
        if (tag === 'e-ssr-tabs') {
          const end = body.indexOf('</e-ssr-tabs>', m.index);
          tabsInfo.push(body.slice(m.index, end).includes('tab-buttons'));
          kind = 'tabs';
        } else if (tag === 'div' && /__variant\b/.test(attrs)) {
          const shown = /__variant show/.test(attrs);
          const choice = tabsInfo[tabsInfo.length - 1];
          if (choice && !shown) { hidden++; kind = 'hiddenvariant'; }
          else {
            kind = 'variant';
            if (!choice && cur && /Psalm/i.test(cur.sec || '')) { const lab = /data-tab-label="([^"]*)"/.exec(attrs); if (lab) { const s = cur.sec; push(clean(lab[1])); cur.sec = s; } }
          }
        } else if (tag === 'div' && /__title-level-2/.test(attrs)) { expectTitle = 2; }
        else if (tag === 'div' && /__title-level-3/.test(attrs)) { expectTitle = 3; }
        else if (tag === 'p') { para = { type: (/data-type="([a-z-]+)"/.exec(attrs) || [])[1] || 'paragraph', text: [] }; kind = 'p'; }
        stack.push({ tag, kind });
      } else {
        const top = stack.pop();
        if (!top) continue;
        if (top.kind === 'hiddenvariant') hidden--;
        if (top.kind === 'tabs') tabsInfo.pop();
        if (top.kind === 'p' && para) {
          const t = clean(para.text.join(' '));
          if (t && !hidden && cur && para.type !== 'source') cur[1].push(t);
          para = null;
        }
      }
    } else if (m[4] !== undefined) {
      if (para) para.text.push(m[4].replace(/<[^>]+>/g, ''));
    } else if (m[5] && expectTitle) {
      const t = clean(m[5]);
      if (t) {
        if (expectTitle === 2) { push(t); cur.sec = t; } else if (!hidden && cur) cur[1].push(t);
        expectTitle = 0;
      }
    }
  }
  return steps.map(([t, l]) => [t, l.join('\n')]).filter((s) => s[1].trim());
}


// ---------- Ökumenisches Heiligenlexikon (heiligenlexikon.de, Joachim Schäfer) ----------
const HL = 'https://www.heiligenlexikon.de';
const HL_MONAT = ['Januar', 'Februar', 'Maerz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
const HL_SEKTIONEN = {
  katholisch: /^Katholisch/, evangelisch: /^Evangelisch/, anglikanisch: /^Anglikanisch/, orthodox: /^Orthodox/,
  armenisch: /^Armenisch/, koptisch: /^Koptisch/, aethiopisch: /^Äthiopisch/, syrisch: /^Syrisch/,
};
function textOf(html) {
  return decode(html.replace(/\s+/g, ' ').replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, ' '))
    .split('\n').map((l) => l.replace(/\s+/g, ' ').trim()).filter(Boolean).join('\n');
}
// Tagesseite: { katholisch: [{ text, links: [{ name, url }] }], … }
function parseTag(html, base) {
  const out = {};
  const parts = html.slice(Math.max(0, html.indexOf('<h1'))).split(/<h2[^>]*>/).slice(1);
  for (const p of parts) {
    const head = textOf(p.slice(0, p.indexOf('</h2>'))).replace(/\n/g, ' ');
    const key = Object.keys(HL_SEKTIONEN).find((k) => HL_SEKTIONEN[k].test(head));
    if (!key) continue;
    const items = [];
    for (const ul of p.matchAll(/<ul class="kalender">([\s\S]*?)<\/ul>/g)) {
      for (const li of ul[1].matchAll(/<li>([\s\S]*?)<\/li>/g)) {
        const links = [...li[1].matchAll(/<a href="([^"#]+)"[^>]*>([\s\S]*?)<\/a>/g)]
          .filter((a) => /Biographien/.test(a[1]))
          .map((a) => ({ name: textOf(a[2]).replace(/\n/g, ' '), url: new URL(a[1], base).pathname }));
        items.push({ text: textOf(li[1]).replace(/\n/g, ' '), links });
      }
    }
    out[key] = (out[key] || []).concat(items);
  }
  return out;
}
// Heiligenartikel: Titel, Eckdaten, Text, Autor, Quellen
function parseHeilige(html) {
  const title = textOf((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1]).replace(/\n/g, ' ');
  const einl = html.match(/<div class="einleitung">([\s\S]*?)<\/div>/);
  const meta = einl ? [...einl[1].matchAll(/<p class="(?:tag|name|teaser)"[^>]*>([\s\S]*?)<\/p>/g)].map((m) => textOf(m[1])) : [];
  const a = html.indexOf('<p class="textbeginn">');
  const b = html.indexOf('<div class="nichtdrucken', a);
  if (a < 0 || b < a) throw new Error('Artikel nicht gefunden');
  const body = html.slice(a, b)
    .replace(/<figure[\s\S]*?<\/figure>/g, '').replace(/<div class="nurhandy[\s\S]*?<\/div>/g, '')
    .replace(/<script[\s\S]*?<\/script>/g, '').replace(/<p class="verweis[^>]*>[\s\S]*?<\/p>/g, '');
  let paragraphs = [...body.matchAll(/<(p|h3|h4)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/g)]
    .map((m) => ({ h: m[1] !== 'p', t: textOf(m[2]) })).filter((x) => x.t);
  const ende = paragraphs.findIndex((x) => x.h && /Leserkommentare|Web 3\.0/.test(x.t));
  if (ende >= 0) paragraphs = paragraphs.slice(0, ende);
  const imp = (html.match(/<p class="impressum">([\s\S]*?)<\/p>/) || [, ''])[1];
  const autor = textOf((imp.match(/<b>Autor:<\/b>([\s\S]*?)(?:-\s*<i>|<br|$)/) || [, ''])[1]).replace(/\n/g, ' ');
  const stand = (imp.match(/zuletzt aktualisiert am\s*(?:<!--[^>]*-->)?\s*([\d.]+)/) || [, ''])[1];
  const quellen = textOf((imp.split(/<b>Quellen:<\/b>/)[1] || '')).split('\n').map((l) => l.replace(/^•\s*/, '')).filter(Boolean);
  return { title, meta, paragraphs, autor, stand, quellen };
}

const HORAS = { laudes: 'laudes', sexta: 'sexta', vespers: 'vespers', completorium: 'completorium' };
const ERLAUBT = ['https://alphajutm.github.io'];

export default {
  async fetch(request) {
    const origin = request.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': ERLAUBT.includes(origin) ? origin : ERLAUBT[0],
      'Vary': 'Origin',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: { ...cors, 'Access-Control-Allow-Methods': 'GET' } });
    const q = new URL(request.url).searchParams;
    const jsonHead = { ...cors, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=21600' };
    const fehler = (msg, st = 502) => new Response(JSON.stringify({ error: msg }), { status: st, headers: { ...cors, 'Content-Type': 'application/json' } });
    const holen = async (url, ttl = 21600) => {
      const r = await fetch(url, { headers: { 'User-Agent': 'Gebetsapp (privat, pro Nutzer wenige Abrufe pro Tag)' }, cf: { cacheTtl: ttl, cacheEverything: true } });
      if (!r.ok) throw new Error('Quelle antwortet ' + r.status);
      return r.text();
    };
    try {
      if (q.has('tag')) {
        const m = /^(\d{2})-(\d{2})$/.exec(q.get('tag'));
        if (!m || +m[1] < 1 || +m[1] > 12 || +m[2] < 1 || +m[2] > 31) return fehler('tag: MM-TT erwartet', 400);
        const url = `${HL}/Kalender${HL_MONAT[+m[1] - 1]}/${+m[2]}.htm`;
        const sek = parseTag(await holen(url), url);
        if (!Object.keys(sek).length) throw new Error('Keine Inhalte gefunden');
        return new Response(JSON.stringify({ tag: q.get('tag'), sektionen: sek, quelle: 'Ökumenisches Heiligenlexikon', url }), { headers: jsonHead });
      }
      if (q.has('tagesheilige')) {
        // Artikel des „einen Tagesheiligen“ des Heiligenlexikons (wechselt täglich, daher kurz zwischengespeichert)
        const html = await holen(HL + '/Grundlagen/Tagesheilige.php', 1800);
        const url = (html.match(/<link rel="canonical" href="([^"]+)"/) || [, HL + '/Grundlagen/Tagesheilige.php'])[1];
        return new Response(JSON.stringify({ ...parseHeilige(html), quelle: 'Ökumenisches Heiligenlexikon', url }), { headers: { ...jsonHead, 'Cache-Control': 'public, max-age=1800' } });
      }
      if (q.has('heilige')) {
        const pfad = q.get('heilige');
        if (!/^\/Biographien[A-Z]\/[A-Za-z0-9_%.\-]+\.html?$/.test(pfad)) return fehler('heilige: ungültiger Pfad', 400);
        const art = parseHeilige(await holen(HL + pfad));
        return new Response(JSON.stringify({ ...art, quelle: 'Ökumenisches Heiligenlexikon', url: HL + pfad }), { headers: jsonHead });
      }
    } catch (e) {
      return fehler(String(e.message || e));
    }
    const hora = HORAS[new URL(request.url).searchParams.get('hora')];
    if (!hora) return new Response(JSON.stringify({ error: 'hora fehlt' }), { status: 400, headers: { ...cors, 'Content-Type': 'application/json' } });
    try {
      const r = await fetch('https://www.katholisch.de/glaube-und-spiritualitaet/stundenbuch/-/hora/' + hora, {
        headers: { 'User-Agent': 'Gebetsapp (privat, pro Nutzer ein Abruf pro Tag)' },
        cf: { cacheTtl: 3600, cacheEverything: true },
      });
      if (!r.ok) throw new Error('Quelle antwortet ' + r.status);
      const steps = parseStundenbuch(await r.text());
      if (!steps.length) throw new Error('Keine Inhalte gefunden');
      return new Response(JSON.stringify({ hora, steps, quelle: 'katholisch.de Stundenbuch' }), {
        headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e.message || e) }), { status: 502, headers: { ...cors, 'Content-Type': 'application/json' } });
    }
  },
};
