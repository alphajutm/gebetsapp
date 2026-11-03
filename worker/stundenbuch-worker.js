// Cloudflare Worker: holt das Stundenbuch von katholisch.de und liefert es als JSON mit CORS.
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
