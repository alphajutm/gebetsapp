// Offline-Grundtexte (Phase 1). Kurzformen aus gemeinfreien/traditionellen Texten.
// Psalmen: Lutherbibel 1912 (gemeinfrei). Übrige Texte: traditionelle Gebete in eigener, freier Wiedergabe.
// Aufbau: TEXTE[tradition][zeit] = Liste von Schritten [Titel, Text]; \n = Absatz.

const P = {
  vuK: "Vater unser im Himmel,\ngeheiligt werde dein Name.\nDein Reich komme.\nDein Wille geschehe, wie im Himmel so auf Erden.\nUnser tägliches Brot gib uns heute.\nUnd vergib uns unsere Schuld, wie auch wir vergeben unseren Schuldigern.\nUnd führe uns nicht in Versuchung,\nsondern erlöse uns von dem Bösen.",
  vuR: "Vater unser im Himmel,\ngeheiligt werde dein Name.\nDein Reich komme.\nDein Wille geschehe, wie im Himmel so auf Erden.\nUnser tägliches Brot gib uns heute.\nUnd vergib uns unsere Schuld, wie auch wir vergeben unseren Schuldigern.\nUnd führe uns nicht in Versuchung,\nsondern erlöse uns von dem Bösen.\nDenn dein ist das Reich und die Kraft und die Herrlichkeit in Ewigkeit. Amen.",
  vuO: "Vater unser im Himmel,\ngeheiligt werde dein Name.\nDein Reich komme.\nDein Wille geschehe, wie im Himmel so auch auf Erden.\nUnser tägliches Brot gib uns heute.\nUnd vergib uns unsere Schuld, wie auch wir vergeben unseren Schuldigern.\nUnd führe uns nicht in Versuchung,\nsondern erlöse uns von dem Bösen.\nDenn dein ist das Reich und die Kraft und die Herrlichkeit, des Vaters und des Sohnes und des Heiligen Geistes, jetzt und immerdar und in alle Ewigkeit. Amen.",
  ehre: "Ehre sei dem Vater und dem Sohn und dem Heiligen Geist,\nwie im Anfang, so auch jetzt und alle Zeit\nund in Ewigkeit. Amen.",
  hilfe: "O Gott, komm mir zu Hilfe.\nHerr, eile mir zu helfen.",
  kreuz: "Im Namen des Vaters und des Sohnes und des Heiligen Geistes. Amen.",
  himmlKoenig: "Himmlischer König, Tröster, Geist der Wahrheit,\nder du überall bist und alles erfüllst,\nSchatz aller Güter und Spender des Lebens:\nkomm und wohne in uns,\nreinige uns von jedem Makel\nund rette, Gütiger, unsere Seelen.",
  trisagion: "Heiliger Gott, heiliger Starker, heiliger Unsterblicher,\nerbarme dich unser. (3×)\n\nEhre sei dem Vater und dem Sohn und dem Heiligen Geist, jetzt und immerdar und in alle Ewigkeit. Amen.\n\nAllheilige Dreifaltigkeit, erbarme dich unser.\nHerr, reinige uns von unseren Sünden.\nMeister, vergib uns unsere Übertretungen.\nHeiliger, suche uns heim und heile unsere Gebrechen um deines Namens willen.\n\nHerr, erbarme dich. (3×)",
  jesus: "Herr Jesus Christus, Sohn Gottes,\nerbarme dich meiner, des Sünders.\n\n(Langsam wiederholen, im Rhythmus des Atems.)",
  ps51: "Schaffe in mir, Gott, ein reines Herz\nund gib mir einen neuen, gewissen Geist.\nVerwirf mich nicht von deinem Angesicht\nund nimm deinen Heiligen Geist nicht von mir.\nTröste mich wieder mit deiner Hilfe,\nund mit einem willigen Geist rüste mich aus.\n\n(Psalm 51,12–14)",
  ps5: "Höre meine Worte, HERR, merke auf meine Rede!\nVernimm mein Schreien, mein König und mein Gott;\ndenn ich will vor dir beten.\nHERR, frühe wollest du meine Stimme hören,\nfrühe will ich mich zu dir schicken und darauf merken.\n\n(Psalm 5,2–4)",
  ps63: "Gott, du bist mein Gott, frühe wache ich zu dir.\nEs dürstet meine Seele nach dir,\nmein Fleisch verlangt nach dir\nin einem trockenen, dürren Lande, wo kein Wasser ist.\n\n(Psalm 63,2)",
  ps119: "Dein Wort ist meines Fußes Leuchte\nund ein Licht auf meinem Wege.\n\n(Psalm 119,105)",
  ps55: "Abends, morgens und mittags will ich klagen und heulen,\nso wird er meine Stimme hören.\n\n(Psalm 55,18)",
  ps23: "Der HERR ist mein Hirte, mir wird nichts mangeln.\nEr weidet mich auf einer grünen Aue\nund führet mich zum frischen Wasser.\nEr erquicket meine Seele;\ner führet mich auf rechter Straße um seines Namens willen.\nUnd ob ich schon wanderte im finstern Tal, fürchte ich kein Unglück;\ndenn du bist bei mir, dein Stecken und Stab trösten mich.\n\n(Psalm 23,1–4)",
  ps141: "HERR, ich rufe zu dir; eile zu mir!\nVernimm meine Stimme, wenn ich dich anrufe.\nMein Gebet müsse vor dir taugen wie ein Räucheropfer,\nmeiner Hände Aufheben wie ein Abendopfer.\n\n(Psalm 141,1–2)",
  ps91: "Wer unter dem Schirm des Höchsten sitzt\nund unter dem Schatten des Allmächtigen bleibt,\nder spricht zu dem HERRN: Meine Zuversicht und meine Burg,\nmein Gott, auf den ich hoffe.\n\n(Psalm 91,1–2)",
  ps121: "Ich hebe meine Augen auf zu den Bergen,\nvon welchen mir Hilfe kommt.\nMeine Hilfe kommt vom HERRN,\nder Himmel und Erde gemacht hat.\nEr wird deinen Fuß nicht gleiten lassen,\nund der dich behütet, schläft nicht.\n\n(Psalm 121,1–3)",
  ps134: "Wohlan, lobet den HERRN, alle Knechte des HERRN,\ndie ihr stehet im Hause des HERRN in den Nächten!\nHebet eure Hände auf im Heiligtum und lobet den HERRN!\n\n(Psalm 134,1–2)",
  ps4: "Ich liege und schlafe ganz mit Frieden;\ndenn allein du, HERR, hilfst mir, dass ich sicher wohne.\n\n(Psalm 4,9)",
  nunc: "Herr, nun lässt du deinen Diener in Frieden fahren, wie du gesagt hast.\nDenn meine Augen haben deinen Heiland gesehen,\nden du bereitet hast vor allen Völkern,\nein Licht, zu erleuchten die Heiden\nund zum Preis deines Volkes Israel.\n\n(Lukas 2,29–32)",
  benedictus: "Gelobt sei der Herr, der Gott Israels,\ndenn er hat besucht und erlöst sein Volk.\nDurch die herzliche Barmherzigkeit unseres Gottes\nwird uns besuchen das aufgehende Licht aus der Höhe,\nauf dass es erscheine denen, die sitzen in Finsternis und Schatten des Todes,\nund richte unsere Füße auf den Weg des Friedens.\n\n(Lukas 1,68.78–79)",
  magnificat: "Meine Seele erhebt den Herrn,\nund mein Geist freut sich Gottes, meines Heilandes.\nDenn er hat die Niedrigkeit seiner Magd angesehen.\nSiehe, von nun an werden mich selig preisen alle Kindeskinder.\nDenn er hat große Dinge an mir getan, der da mächtig ist\nund dessen Name heilig ist.\n\n(Lukas 1,46–49)",
  apostolikum: "Ich glaube an Gott, den Vater, den Allmächtigen,\nden Schöpfer des Himmels und der Erde.\nUnd an Jesus Christus, seinen eingeborenen Sohn, unsern Herrn,\nempfangen durch den Heiligen Geist, geboren von der Jungfrau Maria,\nGelitten unter Pontius Pilatus, gekreuzigt, gestorben und begraben,\nhinabgestiegen in das Reich des Todes,\nam dritten Tage auferstanden von den Toten,\naufgefahren in den Himmel;\nsitzend zur Rechten Gottes, des allmächtigen Vaters;\nvon dort wird er kommen, zu richten die Lebenden und die Toten.\nIch glaube an den Heiligen Geist,\ndie heilige christliche Kirche, die Gemeinschaft der Heiligen,\nVergebung der Sünden, Auferstehung der Toten\nund das ewige Leben. Amen.",
  credo: "Ich glaube an den einen Gott, den Vater, den Allherrscher,\nSchöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren.\nUnd an den einen Herrn Jesus Christus, den eingeborenen Sohn Gottes,\nvor aller Zeit aus dem Vater geboren,\nLicht vom Licht, wahrer Gott vom wahren Gott,\ngezeugt, nicht geschaffen, eines Wesens mit dem Vater,\ndurch den alles geworden ist.\nFür uns Menschen und um unseres Heiles willen ist er vom Himmel gekommen,\nhat Fleisch angenommen durch den Heiligen Geist aus der Jungfrau Maria\nund ist Mensch geworden.\nEr wurde für uns gekreuzigt unter Pontius Pilatus, hat gelitten und ist begraben worden\nund ist am dritten Tage auferstanden nach der Schrift\nund aufgefahren in den Himmel und sitzt zur Rechten des Vaters.\nUnd er wird wiederkommen in Herrlichkeit, zu richten die Lebenden und die Toten;\nseines Reiches wird kein Ende sein.\nUnd an den Heiligen Geist, den Herrn und Lebensspender,\nder aus dem Vater hervorgeht, der mit dem Vater und dem Sohn angebetet und verherrlicht wird,\nder durch die Propheten gesprochen hat.\nUnd an die eine, heilige, katholische und apostolische Kirche.\nIch bekenne die eine Taufe zur Vergebung der Sünden.\nIch erwarte die Auferstehung der Toten und das Leben der kommenden Welt. Amen.",
  kyrie41: "Kyrie eleison. – Herr, erbarme dich.\n\n(Ruhig wiederholen, 41× in der koptischen Tradition; hier so oft, wie es dir gut tut.)",
  danksagung: "Wir danken dir, gütiger und menschenliebender Gott, Vater unseres Herrn, Gottes und Erlösers Jesus Christus,\ndass du uns an diesem Tag behütet hast und uns herangeführt hast zu dieser Stunde.\nVergib uns unsere Sünden und nimm unser Gebet an wie Weihrauch vor dir.\nDenn du bist gesegnet mit deinem eingeborenen Sohn und dem Heiligen Geist, jetzt und alle Zeit und in Ewigkeit. Amen.",
  luthCredo: "Ich glaube an Gott den Vater, den Allmächtigen, Schöpfer Himmels und der Erde.\n\nUnd an Jesum Christum, Gottes eingebornen Sohn, unsern Herrn, der empfangen ist vom Heiligen Geist, geboren von der Jungfrau Maria, gelitten unter Pontio Pilato, gekreuziget, gestorben und begraben, niedergefahren zur Hölle, am dritten Tage auferstanden von den Toten, aufgefahren gen Himmel, sitzend zur Rechten Gottes, des allmächtigen Vaters, von dannen er kommen wird, zu richten die Lebendigen und die Toten.\n\nIch glaube an den Heiligen Geist, eine heilige christliche Kirche, die Gemeinde der Heiligen, Vergebung der Sünden, Auferstehung des Fleisches und ein ewiges Leben. Amen.",
  luthVu: "Vater unser, der du bist im Himmel.\nGeheiliget werde dein Name.\nDein Reich komme.\nDein Wille geschehe, wie im Himmel, also auch auf Erden.\nUnser täglich Brot gib uns heute.\nUnd vergib uns unsere Schuld, wie wir vergeben unsern Schuldigern.\nUnd führe uns nicht in Versuchung.\nSondern erlöse uns von dem Übel.\nDenn dein ist das Reich und die Kraft und die Herrlichkeit in Ewigkeit. Amen.",
  segen: "Der Herr segne uns und behüte uns.\nDer Herr lasse sein Angesicht leuchten über uns und sei uns gnädig.\nDer Herr erhebe sein Angesicht auf uns und gebe uns Frieden. Amen.\n\n(4. Mose 6,24–26)",
  stille: "Halte einen Moment der Stille.\nBringe vor Gott, was dich heute bewegt: Menschen, Sorgen, Dank.",
};

const stille = ["Stille und eigene Anliegen", P.stille];

const TEXTE = {
  // ---------- KATHOLISCH (Stundengebet, Kurzform) ----------
  katholisch: {
    morgen: [
      ["Eröffnung", P.hilfe + "\n\n" + P.ehre],
      ["Psalm (Laudes)", P.ps63],
      ["Benedictus", P.benedictus],
      ["Fürbitten", "Herr, segne diesen Tag.\nSegne die, die ich liebe, und die, die mir schwerfallen.\n\n(Eigene Bitten in Stille.)"],
      ["Vaterunser", P.vuK],
      ["Segen", "Der Herr segne uns, er bewahre uns vor Unheil und führe uns zum ewigen Leben. Amen."],
    ],
    mittag: [
      ["Eröffnung", P.hilfe + "\n\n" + P.ehre],
      ["Psalm (Sext)", P.ps119],
      ["Angelus", "Der Engel des Herrn brachte Maria die Botschaft, und sie empfing vom Heiligen Geist.\n\nGegrüßet seist du, Maria, voll der Gnade, der Herr ist mit dir. Du bist gebenedeit unter den Frauen, und gebenedeit ist die Frucht deines Leibes, Jesus.\nHeilige Maria, Mutter Gottes, bitte für uns Sünder jetzt und in der Stunde unseres Todes. Amen.", 1],
      ["Vaterunser", P.vuK],
      ["Schlussgebet", "Herr, Jesus Christus, in der Mitte des Tages bitten wir dich: Gib uns Kraft für das, was noch vor uns liegt, und lass uns dein Licht nicht aus den Augen verlieren. Amen."],
    ],
    abend: [
      ["Eröffnung", P.hilfe + "\n\n" + P.ehre],
      ["Psalm (Vesper)", P.ps141],
      ["Magnificat", P.magnificat],
      ["Fürbitten", "Herr, wir danken dir für diesen Tag.\nWir bitten dich für alle, die heute Abend allein, krank oder in Not sind.\n\n(Eigene Bitten in Stille.)"],
      ["Vaterunser", P.vuK],
      ["Segen", "Der allmächtige Herr gebe uns eine ruhige Nacht und ein gutes Ende. Amen."],
    ],
    nacht: [
      ["Eröffnung", P.hilfe + "\n\n" + P.ehre],
      ["Gewissenserforschung", "Was war heute gut, wofür danke ich?\nWo habe ich versagt, wen habe ich verletzt?\n\nHerr, vergib mir und heile, was zerbrochen ist."],
      ["Psalm (Komplet)", P.ps91],
      ["Nunc dimittis", P.nunc],
      ["Segen", "Eine ruhige Nacht und ein gutes Ende gewähre uns der allmächtige Herr. Amen."],
    ],
  },

  // ---------- REFORMATORISCH (Martin Luther, Kleiner Katechismus: Haussegen, Benedicite, Gratias; gemeinfrei) ----------
  reformatorisch: {
    morgen: [
      ["Kreuzzeichen", "Des Morgens, so du aus dem Bett fährst, sollst du dich segnen mit dem heiligen Kreuz und sagen:\n\nDas walte Gott Vater, Sohn und Heiliger Geist. Amen."],
      ["Glaube", P.luthCredo],
      ["Vaterunser", P.luthVu],
      ["Morgensegen", "Ich danke dir, mein himmlischer Vater, durch Jesum Christum, deinen lieben Sohn, dass du mich diese Nacht vor allem Schaden und Gefahr behütet hast, und bitte dich, du wollest mich diesen Tag auch behüten vor Sünden und allem Übel, dass dir all mein Tun und Leben gefalle. Denn ich befehle mich, meinen Leib und Seele und alles in deine Hände; dein heiliger Engel sei mit mir, dass der böse Feind keine Macht an mir finde. Amen.\n\nUnd alsdann mit Freuden an dein Werk gegangen und etwa ein Lied gesungen oder die zehn Gebote oder was deine Andacht gibt."],
    ],
    mittag: [
      ["Das Benedicite (Tischgebet)", "Mit gefalteten Händen und zuchtvoll vor den Tisch treten und sprechen:\n\nAller Augen warten auf dich, Herr, und du gibst ihnen ihre Speise zu seiner Zeit. Du tust deine milde Hand auf und sättigst alles, was lebt, mit Wohlgefallen."],
      ["Vaterunser", P.luthVu],
      ["Gebet um den Segen", "Herr Gott, himmlischer Vater, segne uns und diese deine Gaben, die wir von deiner milden Güte zu uns nehmen, durch Jesum Christum, unsern Herrn. Amen."],
    ],
    abend: [
      ["Das Gratias (Dank nach dem Essen)", "Danket dem Herrn, denn er ist freundlich, und seine Güte währet ewiglich. Der allem Fleische Speise gibt, der dem Vieh sein Futter gibt, den jungen Raben, die ihn anrufen. Er hat nicht Lust an der Stärke des Rosses noch Gefallen an jemandes Beinen. Der Herr hat Gefallen an denen, die ihn fürchten und die auf seine Güte warten."],
      ["Vaterunser", P.luthVu],
      ["Dankgebet", "Wir danken dir, Herr Gott, himmlischer Vater, durch Jesum Christum, unsern Herrn, für alle deine Wohltat, der du lebest und regierest in Ewigkeit. Amen."],
    ],
    nacht: [
      ["Kreuzzeichen", "Des Abends, wenn du zu Bette gehst, sollst du dich segnen mit dem heiligen Kreuz und sagen:\n\nDas walte Gott Vater, Sohn und Heiliger Geist. Amen."],
      ["Glaube", P.luthCredo],
      ["Vaterunser", P.luthVu],
      ["Abendsegen", "Ich danke dir, mein himmlischer Vater, durch Jesum Christum, deinen lieben Sohn, dass du mich diesen Tag gnädiglich behütet hast, und bitte dich, du wollest mir vergeben alle meine Sünden, wo ich Unrecht getan habe, und mich diese Nacht auch gnädiglich behüten. Denn ich befehle mich, meinen Leib und Seele und alles in deine Hände. Dein heiliger Engel sei mit mir, dass der böse Feind keine Macht an mir finde. Amen.\n\nUnd alsdann flugs und fröhlich geschlafen."],
    ],
  },

  // ---------- GRIECHISCH-ORTHODOX (byzantinisch, Orthros/Hesperinos/Apodeipnon) ----------
  griechisch: {
    morgen: [
      ["Beginn", P.kreuz],
      ["Doxologie", "Ehre sei dir, der du uns das Licht gezeigt hast.\nEhre sei Gott in der Höhe und Friede auf Erden und den Menschen ein Wohlgefallen."],
      ["Trisagion", P.trisagion],
      ["Psalm (Orthros)", P.ps5],
      ["Vaterunser", P.vuO],
      ["Glaubensbekenntnis", P.credo],
      ["Jesusgebet", P.jesus],
      ["Gebet des Morgens", "Herr, du hast mich aus dem Schlaf erweckt und zu diesem Morgen geführt. Erleuchte mein Herz und meine Gedanken, damit ich dir diesen Tag lobe und in deinem Willen wandle. Amen."],
    ],
    mittag: [
      ["Beginn", P.kreuz],
      ["Anrufung des Heiligen Geistes", P.himmlKoenig],
      ["Trisagion", P.trisagion],
      ["Kyrie eleison", "Kyrie eleison. (12×)\n\nEhre sei dem Vater und dem Sohn und dem Heiligen Geist, jetzt und immerdar und in alle Ewigkeit. Amen."],
      ["Psalm", P.ps119],
      ["Vaterunser", P.vuO],
    ],
    abend: [
      ["Beginn", P.kreuz],
      ["Psalm 141 (Hesperinos)", P.ps141],
      ["Phos hilaron", "Heiteres Licht der heiligen Herrlichkeit des unsterblichen Vaters, des himmlischen, heiligen, seligen Jesus Christus: Da wir zum Untergang der Sonne gelangt sind und das Abendlicht schauen, preisen wir Vater, Sohn und Heiligen Geist, Gott."],
      ["Nunc dimittis", P.nunc],
      ["Trisagion und Vaterunser", P.trisagion + "\n\n" + P.vuO],
    ],
    nacht: [
      ["Beginn (Apodeipnon)", P.kreuz],
      ["Psalm", P.ps4 + "\n\n" + P.ps91],
      ["Herr der Mächte", "Herr der Mächte, sei mit uns, denn wir haben in der Not keinen anderen Helfer als dich.\nHerr der Mächte, erbarme dich unser."],
      ["Gebet", "Gib uns, Herr, eine friedliche Nacht, frei von Sorge und Furcht. Bewahre uns vor allem Bösen, durch die Fürbitte der Gottesgebärerin und aller deiner Heiligen. Amen."],
      ["Vaterunser", P.vuO],
    ],
  },

  // ---------- ORIENTALISCH (koptisch Agpeya / syrisch, Kurzform) ----------
  orientalisch: {
    morgen: [
      ["Beginn (Prim)", P.kreuz],
      ["Danksagung", P.danksagung],
      ["Psalm 51", P.ps51],
      ["Dreimalheilig", "Heiliger Gott, heiliger Starker, heiliger Unsterblicher, der du für uns gekreuzigt wurdest, erbarme dich unser."],
      ["Kyrie eleison", P.kyrie41],
      ["Vaterunser", P.vuO],
      ["Schluss", "Ehre sei dem Vater und dem Sohn und dem Heiligen Geist, jetzt und immerdar und in Ewigkeit. Amen."],
    ],
    mittag: [
      ["Beginn (Sext)", P.kreuz],
      ["Danksagung", P.danksagung],
      ["Psalm", P.ps91],
      ["Dreimalheilig", "Heiliger Gott, heiliger Starker, heiliger Unsterblicher, der du für uns gekreuzigt wurdest, erbarme dich unser."],
      ["Kyrie eleison", P.kyrie41],
      ["Vaterunser", P.vuO],
    ],
    abend: [
      ["Beginn (Vesper / Ramscho)", P.kreuz],
      ["Danksagung", P.danksagung],
      ["Psalm 141", P.ps141],
      ["Dreimalheilig", "Heiliger Gott, heiliger Starker, heiliger Unsterblicher, der du für uns gekreuzigt wurdest, erbarme dich unser."],
      ["Kyrie eleison", P.kyrie41],
      ["Vaterunser", P.vuO],
      ["Segen", P.segen],
    ],
    nacht: [
      ["Beginn (Komplet / Sutoro)", P.kreuz],
      ["Danksagung", P.danksagung],
      ["Psalm", P.ps4 + "\n\n" + P.ps134],
      ["Dreimalheilig", "Heiliger Gott, heiliger Starker, heiliger Unsterblicher, der du für uns gekreuzigt wurdest, erbarme dich unser."],
      ["Kyrie eleison", P.kyrie41],
      ["Vaterunser", P.vuO],
      ["Schluss", "Herr, lass uns in Frieden schlafen und in Frieden erwachen. Amen."],
    ],
  },
};

// Stille-Schritt jedem Gebet vor dem letzten Schritt anhängen
for (const t of Object.values(TEXTE)) for (const z of Object.keys(t)) {
  const l = t[z]; l.splice(Math.max(l.length - 1, 1), 0, stille);
}

const TRADITIONEN = {
  griechisch: "Orthodox (byzantinisch)",
  orientalisch: "Altorientalisch-orthodox",
  katholisch: "Katholisch",
  reformatorisch: "Reformatorisch",
};
const ZEITEN = {
  morgen: { name: "Morgen", def: "06:00" },
  mittag: { name: "Mittag", def: "12:30" },
  abend: { name: "Abend", def: "19:00" },
  nacht: { name: "Nacht", def: "22:30" },
};

// Vers des Tages (Lutherbibel 1912, gemeinfrei): Rotation nach Tag des Monats.
// Hinweis: Das ist keine kirchliche Tageslesung (Lektionar).
const VERSE = [
  ["Dies ist der Tag, den der HERR macht; lasset uns freuen und fröhlich darauf sein.", "Psalm 118,24"],
  ["Gott ist unsre Zuversicht und Stärke, eine Hilfe in den großen Nöten, die uns getroffen haben.", "Psalm 46,2"],
  ["Ich bin das Licht der Welt; wer mir nachfolgt, der wird nicht wandeln in der Finsternis, sondern wird das Licht des Lebens haben.", "Johannes 8,12"],
  ["Der HERR ist mein Licht und mein Heil; vor wem sollte ich mich fürchten?", "Psalm 27,1"],
  ["Kommet her zu mir alle, die ihr mühselig und beladen seid; ich will euch erquicken.", "Matthäus 11,28"],
  ["Den Frieden lasse ich euch, meinen Frieden gebe ich euch. Euer Herz erschrecke nicht und fürchte sich nicht.", "Johannes 14,27"],
  ["Ich vermag alles durch den, der mich mächtig macht, Christus.", "Philipper 4,13"],
  ["Fürchte dich nicht, ich bin mit dir; weiche nicht, denn ich bin dein Gott. Ich stärke dich, ich helfe dir auch.", "Jesaja 41,10"],
  ["Wir wissen aber, dass denen, die Gott lieben, alle Dinge zum Besten dienen.", "Römer 8,28"],
  ["Lobe den HERRN, meine Seele, und vergiss nicht, was er dir Gutes getan hat.", "Psalm 103,2"],
  ["Verlass dich auf den HERRN von ganzem Herzen und verlass dich nicht auf deinen Verstand, sondern gedenke an ihn in allen deinen Wegen, so wird er dich recht führen.", "Sprüche 3,5–6"],
  ["Gott ist die Liebe; und wer in der Liebe bleibt, der bleibt in Gott und Gott in ihm.", "1. Johannes 4,16"],
  ["Also hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab, auf dass alle, die an ihn glauben, nicht verloren werden, sondern das ewige Leben haben.", "Johannes 3,16"],
  ["Schmecket und sehet, wie freundlich der HERR ist! Wohl dem, der auf ihn trauet!", "Psalm 34,9"],
  ["Trachtet am ersten nach dem Reich Gottes und nach seiner Gerechtigkeit, so wird euch das alles zufallen.", "Matthäus 6,33"],
  ["Meine Seele ist stille zu Gott, der mir hilft.", "Psalm 62,2"],
  ["So aber jemand unter euch Weisheit mangelt, der bitte von Gott, der da gibt einfältiglich jedermann; so wird sie ihm gegeben werden.", "Jakobus 1,5"],
  ["Alle eure Sorge werft auf ihn; denn er sorgt für euch.", "1. Petrus 5,7"],
  ["Denn er hat seinen Engeln befohlen über dir, dass sie dich behüten auf allen deinen Wegen.", "Psalm 91,11"],
  ["Und siehe, ich bin bei euch alle Tage bis an der Welt Ende.", "Matthäus 28,20"],
  ["Befiehl dem HERRN deine Wege und hoffe auf ihn; er wird's wohl machen.", "Psalm 37,5"],
  ["Seid fröhlich in Hoffnung, geduldig in Trübsal, haltet an am Gebet.", "Römer 12,12"],
  ["Seid allezeit fröhlich, betet ohne Unterlass, seid dankbar in allen Dingen; denn das ist der Wille Gottes in Christo Jesu an euch.", "1. Thessalonicher 5,16–18"],
  ["Dein Wort ist meines Fußes Leuchte und ein Licht auf meinem Wege.", "Psalm 119,105"],
  ["Ich bin der Weinstock, ihr seid die Reben. Wer in mir bleibt und ich in ihm, der bringt viel Frucht; denn ohne mich könnt ihr nichts tun.", "Johannes 15,5"],
  ["Es ist dir gesagt, Mensch, was gut ist und was der HERR von dir fordert: nichts als Gottes Wort halten und Liebe üben und demütig sein vor deinem Gott.", "Micha 6,8"],
  ["Jesus Christus gestern und heute und derselbe auch in Ewigkeit.", "Hebräer 13,8"],
  ["Der HERR ist mein Hirte, mir wird nichts mangeln.", "Psalm 23,1"],
  ["Jesus spricht zu ihr: Ich bin die Auferstehung und das Leben; wer an mich glaubt, der wird leben, ob er gleich stürbe.", "Johannes 11,25"],
  ["Die Güte des HERRN ist's, dass wir nicht gar aus sind; seine Barmherzigkeit hat noch kein Ende, sondern sie ist alle Morgen neu, und deine Treue ist groß.", "Klagelieder 3,22–23"],
  ["Du tust mir kund den Weg zum Leben: vor dir ist Freude die Fülle und Wonne zu deiner Rechten ewiglich.", "Psalm 16,11"],
];

// Altorientalisch-orthodoxe Riten: wechseln nach Wochentag (0 = Sonntag)
const RITEN = {
  koptisch: ["Koptisch-orthodox", "Grundlage ist die Agpeya, das Stundenbuch mit sieben Gebetszeiten."],
  syrisch: ["Syrisch-orthodox", "Grundlage ist das Shimo (Stundengebet): Sapro am Morgen, Ramscho am Abend, Sutoro zur Nacht."],
  armenisch: ["Armenisch-apostolisch", "Grundlage ist das armenische Stundenbuch (Zhamagirk')."],
  aethiopisch: ["Äthiopisch-orthodox", "Grundlage ist das äthiopische Stundenbuch (Sä'atat)."],
};
const RITUS_TAG = ["armenisch", "koptisch", "syrisch", "armenisch", "aethiopisch", "koptisch", "syrisch"];
