// Erzählte Heiligengeschichten (Januar bis März), frei nacherzählt im Stil einer täglichen Andacht.
// H(Datum 'MM-TT', Name, Traditionen [k=katholisch r=reformatorisch g=griechisch o=orientalisch], Titel, Text, Frage, Quellen, Datum für g/o falls anders)
// Die Texte sind eigene Nacherzählungen, keine Zitate. Fakten nach den genannten Quellen; Legenden sind als solche gekennzeichnet.
const GESCHICHTEN = [];
const H = (d, n, t, titel, text, frage, q, dO) => GESCHICHTEN.push({ d, dO: dO || d, n, t, titel, text, frage, q });

H('01-02', 'Basilius der Große', 'krgo', 'Der Bischof, der ein Armenviertel baute',
`Basilius wächst um 330 in einer reichen, frommen Familie in Kappadokien auf. Er studiert in Athen, wo er seinen Freund Gregor von Nazianz kennenlernt, und könnte eine glänzende Laufbahn als Redner haben. Stattdessen sucht er die Stille, reist zu den Mönchen in Ägypten und Syrien und lebt eine Zeit lang als Einsiedler am Fluss Iris.

Doch die Kirche braucht ihn. Er wird Priester und 370 Bischof von Caesarea. Als eine Hungersnot das Land trifft, öffnet er die Kornspeicher der Reichen mit Predigten, die niemanden schonen. Vor den Toren der Stadt baut er eine ganze Anlage mit Hospital, Herberge und Werkstätten für die Armen. Man nennt sie später die Basileias.

Seine Mönchsregeln prägen das östliche Mönchtum bis heute. Am 1. Januar 379 stirbt er, kaum fünfzig Jahre alt, erschöpft von Arbeit und Kämpfen.`,
'Wo könnte ich heute etwas teilen, das ich eigentlich für mich behalten wollte?',
'Ökumenisches Heiligenlexikon; Gregor von Nazianz, Gedächtnisrede auf Basilius', '01-01');

H('01-02', 'Seraphim von Sarow', 'g', 'Der Eremit, der jeden mit „Meine Freude“ begrüßte',
`Prochor Moschnin wird 1754 in Kursk als Kaufmannssohn geboren. Als Kind stürzt er schwer vom Gerüst einer Baustelle und überlebt unverletzt. Später erzählt er, die Gottesmutter habe ihn in einer schweren Krankheit geheilt. Mit Anfang zwanzig tritt er in das Kloster Sarow ein und erhält den Namen Seraphim, der „Brennende“.

Jahrelang lebt er allein in einer Hütte im Wald, betet, liest die Heilige Schrift und teilt sein Brot mit den Tieren. Räuber überfallen ihn und schlagen ihn so, dass er sein Leben lang gebeugt geht. Er verzeiht ihnen und bittet, sie nicht zu bestrafen.

Erst nach vielen Jahren der Stille öffnet er seine Tür. Wer zu ihm kommt, begrüßt er mit den Worten „Meine Freude, Christus ist auferstanden!“. Er stirbt am 2. Januar 1833 kniend vor einer Ikone.`,
'Wer in meinem Alltag bräuchte heute ein freundliches Wort von mir?',
'Ökumenisches Heiligenlexikon; Überlieferung der russisch-orthodoxen Kirche');

H('01-17', 'Antonius der Große', 'krgo', 'Der Mann, der in die Wüste ging',
`Antonius wächst um 251 in einem Dorf in Ägypten auf. Als seine Eltern früh sterben, bleibt er mit dem Erbe und der kleinen Schwester zurück. Eines Sonntags hört er in der Kirche das Evangelium, in dem Jesus dem reichen Mann sagt, er solle verkaufen, was er hat, und den Armen geben. Antonius spürt, dass das ihm gilt. Er verkauft den Besitz, gibt ihn weg und bringt die Schwester in einer Gemeinschaft von Jungfrauen unter.

Er zieht in die Wüste, zunächst in Gräber, dann in eine verlassene Festung. Dort kämpft er mit Angst, Langeweile und Versuchungen. Die Überlieferung malt das als Kampf mit Dämonen. Mit der Zeit sammeln sich Menschen um ihn, die so leben wollen wie er.

Er stirbt 356 mit rund hundert Jahren. Athanasius schreibt sein Leben auf, und das Buch macht ihn zum Vater des Mönchtums.`,
'Was würde ich loslassen, wenn ich keine Angst hätte, etwas zu verlieren?',
'Athanasius von Alexandria, Vita Antonii; Ökumenisches Heiligenlexikon');

H('01-24', 'Franz von Sales', 'k', 'Der Bischof, der Flugblätter unter Türen schob',
`Franz wird 1567 in Savoyen geboren, studiert Recht und könnte Karriere am Hof machen. Er wird stattdessen Priester und geht ins Chablais am Genfer See, wo die Menschen reformiert sind und ihn kaum anhören. Er predigt vor leeren Bänken. Also schreibt er kurze Blätter, in denen er seinen Glauben erklärt, und schiebt sie unter die Türen.

Später wird er Bischof von Genf, der aber in Annecy wohnt. Er schreibt die „Philothea“, ein Buch für Menschen mitten im Leben: Man müsse nicht ins Kloster gehen, um heilig zu werden. Gebet gehöre auch in die Küche und in die Werkstatt. Mit Johanna Franziska von Chantal gründet er einen Orden für Frauen, die nicht streng abgeschlossen leben wollen.

Er stirbt am 28. Dezember 1622. Sein Gedenktag ist der 24. Januar, und er gilt als Patron der Schriftsteller und Journalisten.`,
'Wo möchte ich heute freundlicher statt überzeugender sein?',
'Ökumenisches Heiligenlexikon; Franz von Sales, Philothea');

H('01-25', 'Gregor von Nazianz', 'g', 'Der Theologe, der lieber in der Stille gewesen wäre',
`Gregor wächst um 330 als Sohn eines Bischofs in Kappadokien auf. Er studiert in Athen, wo er Basilius kennenlernt, und träumt von einem Leben als Mönch. Sein Vater drängt ihn zum Priesteramt, und Gregor flieht zunächst, kehrt dann aber zurück.

380 holt man ihn nach Konstantinopel, in eine Stadt, in der die meisten Christen Arianer sind. Er predigt in einer kleinen Hauskirche. Die Predigten über die Dreifaltigkeit sind so klar, dass man ihn „den Theologen“ nennt. Als das Konzil von Konstantinopel 381 ihn zum Bischof der Stadt macht, ist er erschöpft von den Streitigkeiten und tritt zurück.

Er zieht sich in sein Heimatdorf zurück, schreibt Gedichte und Briefe und stirbt um 390. Die Orthodoxe Kirche zählt ihn zu den drei großen Hierarchen.`,
'Wann habe ich zuletzt Verantwortung abgegeben, weil ich ehrlich meine Grenzen kannte?',
'Ökumenisches Heiligenlexikon; Gregor von Nazianz, Reden und Gedichte', '01-25');

H('01-28', 'Thomas von Aquin', 'k', 'Der Gelehrte, dem alles wie Stroh vorkam',
`Thomas wird um 1225 auf Schloss Roccasecca geboren. Seine Familie sieht ihn als künftigen Abt von Monte Cassino. Er aber tritt bei den Dominikanern ein, einem armen Bettelorden. Seine Brüder entführen ihn und halten ihn fast ein Jahr fest, damit er aufgibt. Er bleibt bei seinem Entschluss.

Er studiert bei Albertus Magnus in Köln und lehrt in Paris. Seine Mitstudenten nennen ihn wegen seiner Schweigsamkeit den „stummen Ochsen“. Sein Lehrer soll gesagt haben, dieser Ochse werde einmal so brüllen, dass es die ganze Welt hört. Er schreibt die „Summa theologiae“, ein Werk, das bis heute gelesen wird.

Am 6. Dezember 1273 erlebt er etwas im Gebet, das ihn tief trifft. Danach schreibt er nichts mehr. Alles, was er verfasst habe, komme ihm wie Stroh vor im Vergleich zu dem, was er gesehen habe. Er stirbt 1274 auf dem Weg zum Konzil von Lyon.`,
'Was in meinem Leben ist wichtig, aber „nur Stroh“ gegenüber dem, was wirklich zählt?',
'Ökumenisches Heiligenlexikon; Wilhelm von Tocco, Vita des Thomas von Aquin');

H('01-31', 'Johannes Bosco', 'k', 'Der Priester, der Straßenkindern Jongleurtricks zeigte',
`Johannes wächst um 1815 als Bauernsohn bei Turin auf. Der Vater stirbt früh, die Familie ist arm. Als Kind soll er einen Traum gehabt haben, in dem er wilde Jungen nicht mit Schlägen, sondern mit Sanftmut gewinnen sollte. Er lernt Zaubertricks und Seiltanzen und lockt damit auf dem Dorfplatz Kinder an, bevor er mit ihnen betet.

Als Priester in Turin trifft er verwahrloste Jungen, die in Fabriken arbeiten oder im Gefängnis landen. Er gründet ein Oratorium, einen offenen Treffpunkt mit Spielen, Unterricht und Gottesdienst. Später baut er Werkstätten und Schulen und stiftet die Salesianer, benannt nach Franz von Sales.

Sein Erziehungsgrundsatz heißt: Vernunft, Religion und liebevolle Güte, statt Strafe. Er stirbt am 31. Januar 1888 und gilt als Patron der Jugend.`,
'Wem in meinem Umfeld hilft Zuwendung mehr als Korrektur?',
'Ökumenisches Heiligenlexikon; Johannes Bosco, Erinnerungen des Oratoriums');

H('02-03', 'Ansgar', 'kr', 'Der Missionar, der zweimal von vorn anfing',
`Ansgar wird um 801 im Frankenreich geboren und tritt als Kind ins Kloster Corbie ein. Er hat einen Traum, der ihn zur Mission treibt. 826 zieht er mit dem dänischen König Harald nach Norden, und später reist er nach Schweden, bis nach Birka.

Er gründet kleine Kirchen und Schulen und kauft Sklaven frei, um sie zu unterrichten. 831 wird er Erzbischof von Hamburg mit dem Auftrag, den ganzen Norden zu missionieren. 845 überfallen Wikinger Hamburg und brennen alles nieder, auch seine Bibliothek. Er bleibt, baut in Bremen neu auf und beginnt die Arbeit von vorn.

Er stirbt am 3. Februar 865. Man nennt ihn den Apostel des Nordens.`,
'Was hat mich zuletzt zurückgeworfen, und wie könnte ich daraus von vorn beginnen?',
'Ökumenisches Heiligenlexikon; Rimbert, Vita Anskarii');

H('02-10', 'Scholastika', 'k', 'Das Gewitter, das einen Abschied verhinderte',
`Scholastika ist die Schwester Benedikts von Nursia und lebt als gottgeweihte Frau in der Nähe von Monte Cassino. Einmal im Jahr treffen sich die Geschwister in einem Haus am Fuß des Berges, sprechen über Gott und beten.

Papst Gregor der Große erzählt von der letzten Begegnung. Es wird Abend, und Benedikt will zurück ins Kloster, wie seine Regel es verlangt. Scholastika bittet ihn zu bleiben, noch eine Nacht im Gespräch. Er lehnt ab. Da senkt sie den Kopf und betet, und ein Gewitter bricht los, so heftig, dass niemand das Haus verlassen kann. Die Geschwister verbringen die Nacht im Gespräch.

Drei Tage später stirbt Scholastika. Benedikt sieht ihre Seele als Taube zum Himmel steigen und lässt sie in seinem Grab bestatten. Gregor deutet es so: Sie konnte mehr, weil sie mehr liebte.`,
'Wo ist mir ein Gespräch wichtiger als ein Zeitplan?',
'Gregor der Große, Dialoge II, 33–34; Ökumenisches Heiligenlexikon');

H('02-14', 'Kyrill und Method', 'kg', 'Zwei Brüder, die eine Schrift für ein ganzes Volk erfanden',
`Kyrill und Method stammen aus Thessaloniki. Kyrill, der jüngere, ist Gelehrter und spricht die slawische Sprache, die in der Umgebung gesprochen wird. 863 bittet der Fürst von Mähren den Kaiser in Konstantinopel um Lehrer, die dem Volk den Glauben in seiner eigenen Sprache erklären.

Die Brüder machen sich auf den Weg. Kyrill erfindet für die slawische Sprache eine Schrift, die Glagoliza, und beide übersetzen Teile der Bibel und der Liturgie. Das trifft auf Widerstand, denn manche Bischöfe meinen, man dürfe nur in Hebräisch, Griechisch und Latein beten. Die Brüder reisen nach Rom und werden vom Papst unterstützt.

Kyrill stirbt 869 in Rom als Mönch. Method wird Erzbischof, sitzt zeitweise im Gefängnis und arbeitet bis zu seinem Tod 885 an der Übersetzung. Ihr Werk lebt in den slawischen Sprachen weiter.`,
'Welche Sprache braucht mein Glaube, damit ich ihn auch verstehe?',
'Ökumenisches Heiligenlexikon; Vita Constantini und Vita Methodii', '05-11');

H('02-18', 'Martin Luther', 'r', 'Der Mönch, der Gnade suchte',
`Martin Luther wird 1483 in Eisleben geboren. Auf dem Heimweg von der Universität gerät er 1505 in ein Gewitter. Ein Blitz schlägt in seiner Nähe ein, und er ruft in Todesangst, er wolle Mönch werden, wenn er überlebt. Er tritt in das Augustinerkloster in Erfurt ein.

Im Kloster quält ihn eine Frage: Wie bekomme ich einen gnädigen Gott? Beim Studium der Bibel, besonders des Römerbriefs, erkennt er, dass Gott die Menschen nicht nach ihren Leistungen annimmt, sondern aus Gnade, allein im Glauben. 1517 veröffentlicht er Thesen gegen den Ablasshandel. Daraus entsteht die Reformation.

Auf der Wartburg übersetzt er das Neue Testament ins Deutsche. Er heiratet Katharina von Bora und gründet eine Familie. Er stirbt am 18. Februar 1546 in Eisleben, und dieser Tag ist sein Gedenktag. Zu seinem Erbe gehören auch scharfe Schriften gegen Juden, die er nicht widerrufen hat. Darüber muss man ehrlich reden.`,
'Wo versuche ich, mir Gottes Zuwendung zu verdienen, statt sie anzunehmen?',
'Ökumenisches Heiligenlexikon; Evangelischer Namenkalender; Martin Luther, Vorrede zum lateinischen Gesamtwerk 1545');

H('02-23', 'Polykarp von Smyrna', 'krgo', 'Der alte Bischof, der seinen König nicht verriet',
`Polykarp ist Bischof von Smyrna, der Stadt im heutigen Izmir. Als junger Mann soll er den Apostel Johannes gekannt haben. Er wird ein Brückenbauer zwischen den ersten Zeugen und der nächsten Generation.

Um 155 gerät die Christenverfolgung auch in seine Stadt. Als man ihn verhaftet, bittet er, den Soldaten etwas zu essen zu geben, und betet noch zwei Stunden. Der Statthalter möchte ihn schonen. Er soll nur dem Kaiser opfern und Christus schmähen. Polykarp antwortet, er diene Christus seit sechsundachtzig Jahren, und der habe ihm nie ein Unrecht getan. Wie könne er seinen König lästern?

Er wird auf dem Scheiterhaufen getötet. Seine Gemeinde schreibt einen Bericht darüber, der zu den ältesten Märtyrerberichten gehört.`,
'Welchen Mut würde es mich kosten, heute treu zu bleiben?',
'Martyrium des Polykarp; Ökumenisches Heiligenlexikon');

H('03-07', 'Perpetua und Felicitas', 'krgo', 'Zwei Frauen im Gefängnis von Karthago',
`Im Jahr 203 wird in Karthago eine Gruppe junger Christen verhaftet. Zu ihnen gehören Vibia Perpetua, eine Frau aus gutem Haus, die ihr Kind noch stillt, und Felicitas, eine Sklavin, die hochschwanger ist. Perpetua führt im Gefängnis ein Tagebuch, das erhalten geblieben ist.

Ihr Vater fleht sie an, den Glauben aufzugeben. Sie deutet auf einen Krug und fragt, ob man ihn anders nennen könne als Krug. Er verneint. So sei auch sie nichts anderes als Christin, sagt sie. Felicitas fürchtet, man werde sie wegen der Schwangerschaft nicht mit den anderen hinrichten. Sie gebärt im Gefängnis eine Tochter, die eine christliche Frau aufnimmt.

Am 7. März 203 stehen beide in der Arena. Man erzählt, die Sklavin und die Herrin haben sich vor dem Tod den Friedenskuss gegeben, als Schwestern.`,
'Wo trennen mich Herkunft und Stand von Menschen, mit denen mich der Glaube verbindet?',
'Passio Perpetuae et Felicitatis; Ökumenisches Heiligenlexikon');

H('03-17', 'Patrick', 'krg', 'Der Sklave, der zu seinen Peinigern zurückkehrte',
`Patrick wird im 5. Jahrhundert in Britannien geboren, als Sohn eines Diakons. Mit sechzehn überfallen Seeräuber seine Heimat und verkaufen ihn als Sklaven nach Irland. Er hütet sechs Jahre lang Schafe, hungert, friert und lernt zu beten, wie er später schreibt, hundertmal am Tag und ebenso oft in der Nacht.

Eines Nachts hört er in einem Traum, er solle fliehen, das Schiff warte. Er geht Hunderte Kilometer, findet es und kehrt nach Hause zurück. Doch ein Traum, in dem die Iren ihn zu rufen scheinen, lässt ihn nicht los. Er wird Bischof und geht zurück zu den Menschen, die ihn versklavt hatten.

Er tauft viele, gründet Gemeinden und Klöster. In seiner „Confessio“ nennt er sich einen Sünder und einen Ungelehrten. Der Kleeblatt-Vergleich für die Dreifaltigkeit ist eine spätere Legende. Sein Gedenktag ist der 17. März.`,
'Zu wem könnte Gott mich senden, der mir einmal wehgetan hat?',
'Patrick, Confessio und Brief an Coroticus; Ökumenisches Heiligenlexikon');

H('03-19', 'Josef von Nazaret', 'kr', 'Der Mann, der nie ein Wort sagt',
`Im Neuen Testament spricht Josef kein einziges Wort. Er handelt. Als er erfährt, dass Maria schwanger ist, will er sich leise von ihr trennen, um sie nicht bloßzustellen. Im Traum sagt ihm ein Engel, er solle sie zu sich nehmen. Er tut es.

Er reist mit der hochschwangeren Maria nach Betlehem, weil der Kaiser eine Volkszählung anordnet. Später warnt ihn ein Traum vor Herodes, und er flieht mit der Familie nach Ägypten, ohne Vorbereitung, mitten in der Nacht. Erst nach Herodes’ Tod kehrt er zurück und lässt sich in Nazaret nieder.

Er ist ein Handwerker, im griechischen Text steht „tekton“, ein Bauhandwerker. Er bringt Jesus das Arbeiten bei. Danach verschwindet er aus der Erzählung. Die Tradition sieht in ihm den stillen Beschützer.`,
'Wo ist mein Dienst leise, und wo brauche ich keinen Applaus?',
'Matthäus 1–2; Lukas 2; Ökumenisches Heiligenlexikon');

H('03-21', 'Nikolaus von Flüe', 'kr', 'Der Bauer, der Friedensstifter der Schweiz wurde',
`Niklaus lebt um 1417 als Bauer im Flüeli bei Sachseln. Er ist Ratsherr, Richter, Soldat und Vater von zehn Kindern. Mit Ende vierzig zieht es ihn zur Stille. Mit dem Einverständnis seiner Frau Dorothea verlässt er 1467 den Hof und zieht ins nahe Ranft, in eine Zelle über der Schlucht.

Dort lebt er als Einsiedler. Die Menschen kommen, um sich Rat zu holen. Man erzählt, er habe fast zwanzig Jahre lang ohne feste Nahrung nur von der Kommunion gelebt, was Zeitgenossen prüften. 1481 droht die Eidgenossenschaft zu zerbrechen, weil Städte und Landorte über die Beute der Burgunderkriege streiten. Der Pfarrer von Stans reitet nachts zu Bruder Klaus und kommt mit seinem Rat zurück. Daraufhin einigen sich die Orte am Stanser Verkommnis.

Bruder Klaus stirbt am 21. März 1487. Katholiken und Reformierte ehren ihn gleichermaßen.`,
'Wo könnte ich einem Streit mit Ruhe statt mit Argumenten dienen?',
'Ökumenisches Heiligenlexikon; Historisches Lexikon der Schweiz; Quellen zu Bruder Klaus');

H('03-24', 'Óscar Romero', 'kr', 'Der Erzbischof, der die Namen der Ermordeten nannte',
`Óscar Romero wird 1917 in El Salvador geboren und gilt als stiller, eher konservativer Priester. 1977 wird er Erzbischof von San Salvador, in einem Land, in dem Militär und reiche Familien die Armen unterdrücken. Wenige Wochen nach seiner Ernennung wird sein Freund, der Jesuit Rutilio Grande, auf offener Straße erschossen.

Das verändert ihn. In der Kathedrale verliest er in seinen Predigten die Namen der Verschwundenen und Ermordeten. Seine Messe wird im Radio übertragen, und das halbe Land hört zu. Am 23. März 1980 fordert er die Soldaten auf, den Befehl zum Töten nicht auszuführen, und beruft sich auf das Gebot Gottes.

Am Tag darauf wird er am Altar der Kapelle eines Krankenhauses erschossen, während er die Messe feiert. Er wird 2018 heiliggesprochen. Die Armen nennen ihn „San Romero de América“.`,
'Wessen Stimme könnte ich heute sein?',
'Ökumenisches Heiligenlexikon; Predigten von Óscar Romero');
