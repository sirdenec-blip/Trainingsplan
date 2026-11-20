# TTB – Trainingstagebuch

Aktuelle Version: **0.98** (Testversion; steht auch im ⓘ-Menü oben rechts)

Trainingstagebuch fürs Krafttraining. Läuft im Browser und lässt sich als App „TTB“ auf dem Handy installieren (Android und iPhone). Pläne und Einträge werden automatisch in **deinem Google Drive** gesichert – auf allen Geräten aktuell und auch ohne Empfang im Studio nutzbar.

Adresse: https://sirdenec-blip.github.io/Trainingsplan/

## Als App installieren
- **Android (Chrome):** Seite öffnen → Menü ⋮ → **App installieren** bzw. „Zum Startbildschirm hinzufügen“.
- **iPhone (Safari):** Seite öffnen → Teilen-Symbol → **Zum Home-Bildschirm**.

Danach erscheint „TTB“ mit dem Feuerfuchs-Symbol auf dem Startbildschirm, ohne Adressleiste, und funktioniert auch offline.

## Start und Speicherung
**Erster Start:**
1. **Mit Google Drive starten** (empfohlen): Anmeldung mit deinem Google-Konto. Gibt es in deinem Drive schon Pläne (z. B. vom anderen Handy), wählst du einen aus – bei genau einem öffnet er sich direkt. Sonst legst du einen Plan an: *WKM* oder *Individuell*.
2. **Ohne Cloud nutzen** (kleiner Link): erst nach einem Hinweis auf die Grenzen – Daten nur in diesem Browser, kein Abgleich, der Browser kann sie löschen (iPhone: nach 7 Tagen ohne Nutzung in Safari). Später jederzeit „Mit Google Drive verbinden“ möglich; gleichnamige Pläne werden dabei zusammengeführt.

**Wo liegen die Daten?** In deinem Google Drive im Ordner **„Trainingstagebuch“**, **eine Datei pro Plan** (z. B. `WKM.json`). Benennst du einen Plan um, wird die Datei umbenannt – es entsteht nie eine zweite Datei. Auf dem Gerät liegt immer eine Arbeitskopie. Die App hat nur Zugriff auf die Dateien, die sie selbst angelegt hat (Google-Berechtigung „drive.file“), nicht auf den Rest deines Drives.

**Im Alltag – alles automatisch:**
- Jede Änderung (Eintrag speichern, bearbeiten, löschen, Plan ändern) ist sofort auf dem Gerät gesichert und wird 1–2 Sekunden später nach Google Drive übertragen.
- **Kein Empfang im Studio:** Änderungen werden auf dem Gerät vorgemerkt und übertragen, sobald wieder Verbindung besteht.
- Beim Öffnen und beim Zurückkehren in die App holt sie Änderungen von anderen Geräten.
- Zwei Geräte gleichzeitig: Es wird pro Eintrag zusammengeführt (gleiche ID = gleicher Eintrag, neuere Änderung gewinnt, Löschungen werden mitgenommen). Vor jedem Hochladen liest die App den aktuellen Stand aus Drive – es wird nie blind überschrieben.
- **Google-Zugang:** Google erlaubt Web-Apps ohne eigenen Server nur einen Zugang für ca. eine Stunde. Bis zur Erneuerung ist alles auf dem Gerät gesichert.
  - **Installierte App (Android/iPhone):** Anmeldung per Weiterleitung im selben Fenster (die App wechselt kurz zur Google-Seite und kommt zurück). Ein abgelaufener Zugang wird beim Öffnen oder Zurückkehren zur App still erneuert, solange gerade nichts eingegeben wird (kurzes Neuladen). Klappt das nicht, zeigt die Statuszeile „Google-Verbindung erneuern“.
  - **Im Browser-Tab:** Beim nächsten „Speichern“ blitzt kurz ein Google-Fenster auf (bei mehreren Google-Konten: einmal antippen).

**Statuszeile** unter dem Titel (neben dem Plannamen), z. B.:
- „☁ In Google Drive gespeichert · vor 2 Min.“
- „☁ Offline · Änderungen auf dem Gerät gesichert, werden später übertragen“
- „⚠ Auf dem Gerät gesichert · Google-Verbindung erneuern“ (antippen)
- „⚠ Nur auf diesem Gerät · mit Google Drive verbinden“ (Modus ohne Cloud)

## Trainingspläne verwalten
Der aktive Plan steht unter dem Titel (antippen) und unten gibt es **⇄ Plan wechseln**:
- Oben direkt die **Liste aller Pläne** mit Anzahl Einträge und letztem Training – antippen wechselt sofort.
- **＋ Neuen Plan erstellen:** *WKM*, *Individuell* (Plan-Assistent) oder *Aus bestehendem Plan übernehmen* – kopiert Übungen, Sätze und Pausen, nicht die Trainingseinträge; danach öffnet sich der Assistent zum Anpassen (mindestens der Name).
- **Plan löschen:** mit Bestätigung. Im Cloud-Modus wandert die Datei in den **Papierkorb von Google Drive** (30 Tage wiederherstellbar) und der Plan verschwindet auf allen Geräten.

Außerdem im selben Menü: **Lokale Daten löschen & Google trennen** – löscht nur die Kopien auf dem Gerät und trennt die Google-Verbindung (vorher wird synchronisiert; ohne Verbindung wird das verweigert, damit nichts verloren geht). In Google Drive bleibt alles erhalten. Im Modus ohne Cloud heißt der Knopf „Lokale Daten löschen“; zusätzlich gibt es **Sicherungskopie teilen** und **Sicherung einspielen**.

Plannamen sind eindeutig.

### Schutz vor Datenverlust
| Situation | Was passiert |
|---|---|
| Kein Netz | Alles bleibt auf dem Gerät gesichert und wird später automatisch übertragen. |
| Zwei Geräte ändern denselben Plan | Zusammenführen pro Eintrag, nichts wird überschrieben. |
| Versehentlich falsch geändert | Google Drive bewahrt frühere Versionen jeder Datei auf (Datei → Versionen verwalten). |
| Plan gelöscht | Datei im Drive-Papierkorb (30 Tage); andere Geräte entfernen den Plan beim nächsten Abgleich. |
| Plan gelöscht, auf einem anderen Gerät aber noch offline geändert | Dieses Gerät fragt: Plan behalten (wird neu angelegt) oder auch hier entfernen. |
| Debug-Plan | Liegt nur auf dem Gerät, wird nie nach Drive übertragen. |

## Eingabe
Pro Übung: **Gewicht** (vorausgefüllt vom letzten Mal, ▲▼ in 0,25-kg-Schritten) und pro Satz **Wiederholungen eintippen → ＋ bzw. Enter**. Gespeichert wird z. B. `85x8-9-10`.

- Übungen mit fester Satzzahl (z. B. 3): nach dem letzten Satz springt der Cursor zur nächsten Übung.
- Körpergewichtsübungen (z. B. Klimmzüge): beliebig viele Sätze, fertig mit Enter auf leerem Feld; die Gesamtzahl wird angezeigt (Ziel 24 = 3×8). Gewicht 0 = Körpergewicht, sonst Zusatzgewicht.
- Falsche Zahl? Antippen entfernt sie, Backspace im leeren Feld löscht die letzte.
- Datum = heute, Einheit wechselt automatisch (1 → 2 → … → 1). Pro Kalendertag ist ein Eintrag möglich.

### Helfer beim Training
- **⏱ Pausentimer:** startet nach jedem Satz automatisch (Standard 2:00, pro Übung im Plan-Assistenten einstellbar, nicht bei „Nur Gewicht“). Die Leiste steht **oben** (unten würde die Handy-Tastatur sie verdecken), „+30 s“ verlängert, ✕ beendet. Am Ende wird sie grün („Pause vorbei“) und das Handy vibriert (nur Android – Safari auf dem iPhone kann nicht vibrieren; einen Ton gibt es bewusst nicht). Nach dem letzten Satz und beim Speichern stoppt der Timer.
- **Uhr-Knopf** (neben der Notiz): kurz = Pausentimer aus/an (Standard an, wird gemerkt). **Lange drücken** = freier Timer: 2:00, mit −0:30/−0:15/+0:15/+0:30 einstellbar, Start → Pause → Weiter, am Ende „Zeit abgelaufen“ (bleibt bis ✕, „Neu“ startet erneut). Solange er aktiv ist, startet kein Satztimer.
- **Aufwärmsätze** (Flammensymbol): 40/60/80 % des Gewichts, auf 2,5 kg gerundet, mindestens 20 kg.
- **Scheibenrechner** (Hantelsymbol): Scheiben pro Seite bei 20-kg-Stange (25/20/15/10/5/2,5/1,25).
- **Notiz** (Sprechblase): klappt ein Textfeld aus, z. B. „Schulter zwickt“.
- **Bildschirm bleibt an** während der Eingabe (bis zum Speichern bzw. 15 Minuten ohne Eingabe), sofern das Gerät es unterstützt.

## Eigener Trainingsplan (Plan-Assistent)
Über *Individuell*, *Aus bestehendem Plan übernehmen* oder **✎ Plan bearbeiten**:
- **Name des Plans** (eindeutig).
- **Einheiten als Bubbles** (1–6): antippen = diese Einheit bearbeiten (die aktive ist grün hervorgehoben), **gedrückt halten und ziehen** = Reihenfolge ändern, **×** = Einheit entfernen, **＋** = neue Einheit.
- **Einheiten benennen** (optional): Ein eigener Name wird überall in der App mit vorangestellter Nummer angezeigt, z. B. „3 - Hypertrophie“ (Einheitenauswahl, Filter im Verlauf, Verlauf, Kalender). Ohne Namen heißt sie „Einheit 3“. Beim Verschieben passt sich die Nummer automatisch an.
- **Übungen als Karten**, jede mit:
  - **Ziehgriff ⇅** am linken Rand: gedrückt halten und ziehen = Reihenfolge ändern (die Karte klappt dabei zu einer schmalen Zeile zusammen und rückt live an die Zielstelle); auf die Bubble einer anderen Einheit ziehen = in diese Einheit verschieben.
  - Name mit **Vorschlägen** aus allen deinen Plänen (verhindert Tippfehler-Doppel wie „Bankdrücken“/„Bankdrucken“).
  - Art der Erfassung als Knöpfe: **Gewicht + Wdh.**, **Nur Gewicht** (z. B. `85`), **Nur Wdh.** (z. B. `x60-45`), **Pyramide** (feste Wiederholungen, Gewicht je Satz, z. B. `8@60-70-80`).
  - Darunter, durch eine Linie abgesetzt, die Einstellungen: bei Gewicht + Wdh. das Häkchen **Körpergewichtsübung** (Gewicht = Zusatzgewicht) und die **Sätze**: **beliebig** (fortlaufend erfassen, Enter auf leerem Feld = fertig, Summe wird angezeigt) oder 1–10 (Standard 3).
  - **Pause** für den Pausentimer (0:30 bis 5:00 oder aus; Standard 2:00), außer bei „Nur Gewicht“.
  - Bei Körpergewicht, „beliebig“ und „Nur Wdh.“ optional **Max./Satz** (z. B. 12) und **Ziel Σ** (z. B. 24, Ziellinie in der Auswertung).
- **Speichern/Abbrechen** stehen immer sichtbar unten.
- **Bestehende Einträge bleiben erhalten:** Verschiebst oder löschst du Einheiten, werden die bisherigen Einträge automatisch mit umnummeriert (Einträge einer gelöschten Einheit bleiben unter eigener Nummer erhalten). Benennst du eine Übung um, fragt die App, ob auch die bisherigen Einträge umbenannt werden sollen – empfohlen, damit Verlauf, Bestwerte und Diagramme zusammenbleiben.
- Auswertungen fassen eine Übung über **alle Einheiten** zusammen (nach Namen). Nur „zuletzt … kg“ in der Eingabe und die +/−-Differenz im Verlauf vergleichen mit derselben Einheit.

## Verlauf
Sichtbar sind so viele Einträge, wie der Plan Einheiten hat (je Einheit der neueste); alle weiteren unter „Ältere Einträge“ (angeheftete Leiste zum Einklappen). Die letzte gleiche Einheit ist grün gestrichelt umrandet.
- **Alle · E1 · E2 …** filtert nach Einheit (dann nur der neueste Eintrag sichtbar).
- **Kompakt** (Standard): eine Zeile pro Übung, Gewicht und Sätze in kleinen Bubbles, Notizen als 💬 zum Antippen. **Ausführlich:** mit Satz-Kästchen, Notiz sichtbar.
- Hinter jedem Gewicht die Differenz zur letzten gleichen Einheit (+2,5 / −4, dezent grün bzw. rot getönt), 🏆 bei neuem Bestwert.
- ✎ bearbeitet einen Eintrag (Formular wird gelb), ✕ löscht ihn. Bearbeitete Einträge zeigen ein ⓘ. Beim Bearbeiten sind Übungen ohne Sätze optional (sie entfallen).
- Gehört ein Eintrag zu einer Einheit, die es im Plan nicht mehr gibt, lässt sich beim Bearbeiten oben eine bestehende Einheit zuweisen – die erfassten Werte bleiben erhalten.

## Auswertungen (aufklappbar)
**Überblick:** 📅 Kalender (Tag antippen = Kurzübersicht; Tage mit Notiz tragen oben rechts ein kleines Sprechblasen-Symbol) · 📋 Fortschritt · 🏆 Bestleistungen · 🔁 Regelmäßigkeit.
**Verläufe pro Übung:** 📈 Gewicht · 🧮 1RM geschätzt (Epley: Gewicht × (1 + Wdh./30)) · 📊 Volumen pro Woche · 🔢 Wiederholungen. Antippen eines Punkts oder Balkens zeigt Datum und Wert.

## Debug-Modus
Im ⓘ-Menü steht hinter der Versionsnummer ein kleiner Käfer. **Lange drücken** (1 Sekunde) legt den Plan **„Debug-WKM“** (mit Käfer-Symbol) mit ca. 46 Beispiel-Einträgen an (Steigerung, Deload, Plateau, Lücke, Klimmzüge bis +2,5 kg, krumme Gewichte, Notizen, bearbeitete und gelöschte Einträge) und wechselt dorthin. Er liegt **nur auf diesem Gerät**, wird nie nach Google Drive übertragen und lässt deine Pläne unberührt. Erneuter langer Druck setzt ihn zurück; entfernen über „Plan löschen“.

## Technik
- `index.html` (App), `manifest.webmanifest` und `icons/` (Installation als „TTB“), `sw.js` (Service Worker für den Offline-Betrieb), `datenschutz.html` (Datenschutzerklärung, verlinkt auf dem Startbildschirm und im ⓘ-Menü; von Google für die Veröffentlichung verlangt).
- Gehostet über GitHub Pages (*Settings → Pages → Branch `main`*).
- Google-Anbindung: OAuth-Client-ID (Typ „Webanwendung“) in `index.html` (`CLIENT_ID`), Berechtigung `drive.file`. Ohne Client-ID ist nur „Ohne Cloud nutzen“ möglich.

## Versionen
- **0.98:** Ziehen von Übungen: Karte klappt zusammen und rückt live an die Zielstelle (auch ganz oben/unten sicher). Körpergewicht als Häkchen in eigener Zeile, Erfassungsart und Einstellungen optisch getrennt, Sätze „beliebig“ bei Gewicht + Wdh. Einträge einer nicht mehr vorhandenen Einheit lassen sich beim Bearbeiten einer bestehenden Einheit zuweisen.
- **0.97:** Neuer Plan-Assistent: Einheiten als Bubbles (antippen, gedrückt halten zum Verschieben, × entfernen), Einheiten benennbar („3 - Hypertrophie“, überall in der App), Übungen als Karten mit Ziehgriff (auch in andere Einheit), Erfassungsart als Knöpfe, Max./Satz und Ziel einstellbar, Namensvorschläge, Speichern immer sichtbar, Einträge werden beim Verschieben/Löschen von Einheiten und Umbenennen von Übungen automatisch angepasst.
- **0.96:** Datenschutzerklärung (`datenschutz.html`), verlinkt auf dem Startbildschirm und im ⓘ-Menü – Voraussetzung, um die Google-Anmeldung aus dem Teststatus zu holen.
- **0.95:** Kalender markiert Trainingstage mit Notiz durch ein kleines Sprechblasen-Symbol in der Ecke.
- **0.94:** Gewichtsdifferenzen im Verlauf wieder leicht eingefärbt (gedecktes Grün/Rot, unaufdringlich).
- **0.93:** Planmenü zeigt die Pläne direkt als Liste zum schnellen Wechseln, Knopf „Lokale Daten löschen & Google trennen“, einfarbige Symbole auch für Debug-Plan, Auswertungen, Statuszeile und Timer.
- **0.92:** Bugfix: In der installierten App blieb die Google-Anmeldung auf einer weißen Seite hängen. Jetzt Anmeldung per Weiterleitung, abgelaufener Zugang wird beim Öffnen/Zurückkehren still erneuert.
- **0.91:** Google-Anbindung aktiviert (OAuth-Client-ID eingetragen). Anmeldung zunächst nur für eingetragene Testnutzer.
- **0.90:** Testversion mit neuer Speicherung: Google Drive als Hauptspeicher (Ordner „Trainingstagebuch“, eine Datei pro Plan, automatischer Abgleich, offline nutzbar), mehrere Trainingspläne (laden, neu erstellen, aus bestehendem Plan übernehmen, löschen), Modus „Ohne Cloud“ als Nebenweg, installierbar als App „TTB“ (Android und iPhone), Debug-Plan nur auf dem Gerät. Datei-Export/-Import und Export-Erinnerung entfallen.
- **0.52:** Pause-Standard 2:00 für alle Übungen, Timerleiste oben, freier Timer mit Pause/Weiter, Kompaktansicht mit Bubbles, Debug-Modus.
- **0.51:** Einfarbige Symbole, Uhr-Knopf (Pausentimer an/aus, freier Timer), Filter nach Einheit zeigt nur den neuesten Eintrag, Export-Erinnerung ab 3 Änderungen oder nach einer Woche.
- **0.50:** Logo „Feuerfuchs“, Verlauf-Filter und Kompaktansicht, Notizen, Pausentimer, Aufwärmsätze, Scheibenrechner, antippbare Diagramme, Export-Erinnerung, Bildschirm bleibt an.
- **0.45:** Platzhalter „Wdh.“, Dezimalkomma in der Eingabe, „zuletzt Körpergewicht“.
- **0.44:** Eingabezeile auch auf 360-px-Handys.
- **0.43:** Bugfix Eingabezeile auf dem Handy.
- **0.42:** Größere Gewichtspfeile.
- **0.41:** ▲▼ für Gewichte, angeheftete Leiste „Ältere Einträge“, „1RM geschätzt“, Info-Menü ⓘ.
- **0.40:** Auswertungen und 🏆.
- **0.31:** Pyramidensatz, Startmenü, Export als einziger Dateizugriff.
- **0.30:** Eigene Trainingspläne (1–6 Einheiten).
- **0.21 – 0.13:** Verlauf kompakt, Gewichtsvergleich, Kalender, Bearbeiten, eindeutige IDs mit Abgleich, Datei-Export.
- davor (unnummeriert): Eingabe per Enter, variable Klimmzug-Sätze, Export als Trainingstagebuch.
