# Trainingsplan

Aktuelle Version: **0.50** (steht auch im ⓘ-Menü oben rechts)

Einfaches Trainingslog fürs Fitnessstudio (läuft komplett im Browser, keine Installation).

## Pläne
- **Einheit 1:** Kniebeugen, Bankdrücken, Vorgebeugtes Rudern
- **Einheit 2:** Kreuzheben, Overhead-Press, Klimmzüge

## Eingabe
Pro Übung: **Gewicht eintippen → Enter → Wiederholungen eintippen → Enter** (wiederholen pro Satz).
Die Striche werden automatisch gesetzt, gespeichert wird z. B. `85x8-9-10`.

- Kniebeugen, Bankdrücken, Rudern, Kreuzheben, Overhead-Press: genau 3 Sätze. Nach dem 3. Satz springt der Cursor zur nächsten Übung.
- Klimmzüge: beliebig viele Sätze (1–12 Wdh. je Satz), z. B. `0x8-6-3-2-1-1-1-1-1-1`. Fertig mit Enter auf leerem Feld. Die Gesamtzahl wird angezeigt (Ziel 24 = 3x8).
- Gewicht 0 = Körpergewicht, bei Klimmzügen Zusatzgewicht eintragen.
- Falsche Zahl? Auf die Zahl antippen entfernt sie, Backspace im leeren Feld löscht die letzte.
- Am Handy ohne Enter-Taste: Button ＋ neben dem Feld.

Das Gewicht vom letzten Mal ist vorausgefüllt, Datum = heute, Einheit wechselt automatisch.

### Helfer beim Training
- **⏱ Pausentimer:** startet nach jedem eingetragenen Satz automatisch (Standard 2:00, pro Übung im Plan-Assistenten einstellbar oder „aus“). Die Leiste unten zeigt die Restzeit, „+30 s“ verlängert, ✕ beendet. Am Ende vibriert das Handy und die Leiste wird grün („Pause vorbei“). Nach dem letzten Satz der Einheit und beim Speichern stoppt der Timer.
- **🔥 Aufwärmsätze:** Flammensymbol neben der Übung antippen: 40 %, 60 % und 80 % des eingetragenen Gewichts (auf 2,5 kg gerundet, mindestens 20 kg). Nur Anzeige.
- **Scheibenrechner:** Hantelsymbol neben der Übung antippen: welche Scheiben pro Seite bei einer 20-kg-Stange (Scheiben 25 / 20 / 15 / 10 / 5 / 2,5 / 1,25). Passt sich beim Ändern des Gewichts sofort an.
- **💬 Notiz:** Sprechblase unter den Übungen antippen klappt ein Textfeld aus (z. B. „Schulter zwickt“). Die Notiz wird mit dem Eintrag gespeichert und abgeglichen.
- **Bildschirm bleibt an:** Während der Eingabe hält die App den Bildschirm wach (bis zum Speichern bzw. 15 Minuten ohne Eingabe), sofern der Browser das unterstützt.

## Speicherung
Alle Einträge werden automatisch im Browser des Geräts gespeichert (localStorage), du kannst also einfach am Handy trainieren.

## Start, Speicherung und Dateien
**Erster Start:** Menü mit zwei Optionen:
1. **Neuen Trainingsplan anlegen:** *WKM* (2 Einheiten mit je 3 Übungen: Kniebeugen, Bankdrücken, Rudern / Kreuzheben, Overhead-Press, Klimmzüge) oder *Individuell* (Plan-Assistent, siehe unten).
2. **Trainingsplan importieren:** Datei öffnen. Plan und Einträge der Datei werden in den Browser geladen. Dateien ohne Plan (ältere Versionen) bekommen den WKM-Plan.

Danach läuft alles im Browser (localStorage). **An der geöffneten Datei wird nichts verändert, bis du „Trainingsplan exportieren“ drückst.**

**📔 Trainingsplan exportieren:** schreibt Plan und Einträge in eine Datei. Optionen: in die geöffnete Datei speichern (wenn der Browser das erlaubt), neue Datei erstellen (Name = Planname) oder bestehende Datei auswählen. Bei bestehenden Dateien wird in beide Richtungen abgeglichen (neuere Änderung gewinnt, Löschungen werden mit abgeglichen). Auf dem Handy (iPhone/Safari, Chrome Android) kann der Browser Dateien nicht überschreiben: die Datei wird neu heruntergeladen und ersetzt die alte.

**Export-Erinnerung:** Gibt es Änderungen, die noch nicht in einer Datei gesichert sind, und liegt der letzte Export mindestens 7 Tage zurück (oder gab es noch keinen), steht unter dem Titel dezent „💾 Letzter Export vor N Tagen · jetzt exportieren“ (antippen öffnet den Export).

**🗑 Alle Daten zurücksetzen:** entfernt Plan und alle Einträge im Browser (auch nicht exportierte) nach Warnung; danach erscheint wieder das Startmenü. Die Datei auf dem Gerät bleibt unverändert.

### Eigener Trainingsplan
Der Plan-Assistent (Startmenü → *Individuell*, später **✎ Trainingsplan bearbeiten** – auch beim WKM-Plan):
- Name des Plans und Anzahl der Einheiten (1–6).
- Pro Einheit beliebig viele Übungen. Pro Übung wird gewählt, wie dokumentiert wird:
  - **Gewicht + Wiederholungen** (Standard: 3 Sätze, 1–10 wählbar). Mit Haken **Körpergewichtsübung** (wie Klimmzüge): Zusatzgewicht, beliebig viele Sätze.
  - **Nur Gewicht** (ein Wert, z. B. `85`).
  - **Nur Wiederholungen** (beliebig viele Sätze, z. B. `x60-45`).
  - **Pyramidensatz:** einmal feste Wiederholungen, pro Satz das Gewicht (z. B. `8@60-70-80`), Sätze wählbar.
  - **Pause** für den Pausentimer (0:30 bis 5:00 oder aus, Standard 2:00), außer bei „Nur Gewicht“.
- Der Plan wird im Browser **und im Trainingstagebuch (Datei)** gespeichert (Dateiformat Version 3). Beim Abgleich/Import gewinnt der neuere Plan; die Meldung nennt es, wenn ein Plan aus der Datei übernommen wurde.
- Der aktive Plan und die zuletzt verwendete Datei stehen im ⓘ-Menü oben rechts.
- Bestehende Einträge bleiben bei Planänderungen erhalten und werden weiter angezeigt.
- Die Einheit wechselt der Reihe nach (1 → 2 → … → 1). Der Kalender nutzt bis zu sechs Grüntöne für die Einheiten.

### Verlauf kompakt
Angezeigt werden so viele Einträge, wie der Plan Einheiten hat – je Einheit der neueste (Referenz), mit den neuesten übrigen aufgefüllt. Alle weiteren stehen unter „Ältere Einträge“.

Über dem Verlauf (Auswahl wird gemerkt):
- **Alle · E1 · E2 …** filtert nach Einheit (dann die neuesten Einträge dieser Einheit sichtbar, Rest unter „Ältere Einträge“).
- **Kompakt** (Standard): eine Zeile pro Übung, z. B. „Kniebeugen 90 kg +2,5 · 8 8 7“. Notizen als 💬 im Kopf, antippen zeigt sie.
- **Ausführlich:** die bisherige Darstellung mit Satz-Kästchen, Notiz sichtbar darunter.

### Ein Eintrag pro Tag
Pro Kalendertag ist nur ein Eintrag möglich. Beim Speichern (neu oder bearbeitet) erscheint sonst ein Hinweis, auch schon bei der Datumswahl. Bereits vorhandene Doppel (z. B. aus einem Abgleich) bleiben bestehen und lassen sich über Löschen/Bearbeiten bereinigen.

### Gewichtsvergleich
- **Verlauf:** Hinter jedem Gewicht steht klein die Differenz zur vorangegangenen Einheit mit derselben Nummer (z. B. +0,5 grün oder −4 rot). Bei gleichem Gewicht oder ohne Vorgänger steht nichts.
- **Eingabe:** Über jeder Übung steht rechts „zuletzt 85 kg“ (letzte gleiche Einheit; bei Körpergewichtsübungen „zuletzt Körpergewicht“ bzw. „zuletzt +2,5 kg“) und, sobald du ein anderes Gewicht eingibst, die Differenz (z. B. +1). Beim Bearbeiten gilt die Einheit vor dem bearbeiteten Eintrag.

### Datum und Einheit
Beim Öffnen, nach dem Speichern, Löschen, Import/Abgleich und beim Zurückkehren zur Seite (sofern noch nichts eingegeben ist) wird das Datum auf heute gesetzt und die Einheit auf diejenige, die **nicht** im datumsmäßig letzten Eintrag vorkommt. Manuell kannst du jederzeit abweichen.

### Auswertungen (aufklappbar, mit Knöpfen)
**Überblick:** 📅 Kalender · 📋 Fortschritt (Start, Aktuell, Δ, Δ %, Trend je Übung) · 🏆 Bestleistungen · 🔁 Regelmäßigkeit (Einheiten pro Woche, Serien).
**Verläufe pro Übung** (Auswahl per Dropdown): 📈 Gewicht · 🧮 1RM geschätzt (One-Rep-Max, berechnet aus dem besten Satz nach Epley: Gewicht × (1 + Wdh./30); wird nicht gemessen) · 📊 Volumen (Gewicht × Wdh. × Sätze pro Woche, auch alle Übungen zusammen) · 🔢 Wiederholungen (Summe und bester Satz, mit Ziellinie z. B. 24 bei Klimmzügen).
In den Diagrammen zeigt Antippen eines Punkts oder Balkens Datum und Wert.
Im Verlauf steht 🏆 hinter einer Übung, wenn sie einen neuen Bestwert gegenüber allen früheren Einträgen erreicht hat (Leitwert: geschätztes 1RM, bei Nur-Gewicht das Gewicht, bei Körpergewicht/Nur-Wiederholungen die Wiederholungssumme).

#### Kalender (Details)
Aufklappbarer Bereich „📊 Auswertungen“ unterhalb der Einträge.
- **Kalenderübersicht:** Tippen/Klicken auf einen markierten Tag öffnet ein kleines Fenster mit Einheit, Gewichten und Wiederholungen; erneutes Tippen oder Tippen daneben schließt es. Monatskalender (Mo–So) mit Blättern per ‹ ›. Tage mit Einheit sind grün markiert, Einheit 1 hellgrün, Einheit 2 dunkelgrün (beide am selben Tag: geteilt). Heute ist umrandet.

### Eindeutige IDs und Abgleich
Jeder Eintrag hat eine eindeutige ID und einen Änderungszeitpunkt. Beim Abgleich gilt: gleiche ID = gleicher Eintrag, die **neuere Änderung gewinnt**. So bleibt nach dem Bearbeiten kein alter Eintrag stehen. Gelöschte Einträge bleiben als „gelöscht“ markiert in Browser und Datei (unsichtbar), damit eine Löschung beim Abgleich nicht rückgängig gemacht wird. Bearbeitete Einträge zeigen ein ⓘ (antippen = Zeitpunkt der letzten Änderung).
Alt-Einträge (vor 0.16) bekommen beim ersten Start eine ID, die aus ihrem Inhalt berechnet wird. Duplikate aus früheren Versionen (alter und bearbeiteter Eintrag) müssen einmalig von Hand gelöscht werden.

### Einträge bearbeiten
Im Verlauf gibt es neben dem ✕ einen Stift ✎. Antippen lädt den Eintrag ins Eingabeformular (Datum, Gewichte, Wiederholungen), das Formular wird hervorgehoben und der Button heißt „Änderung speichern“. Die Einheit ist beim Bearbeiten gesperrt. „Bearbeiten abbrechen“ verwirft die Änderung.

### Datei-Indikator
Unter dem Titel steht, welche Tagebuch-Datei zuletzt verwendet wurde (Name, Aktion und Zeitpunkt: exportiert, abgeglichen oder importiert). Ohne bisherigen Export/Import steht dort „Keine Datei verknüpft“. Die Daten selbst liegen immer im Browser, die Datei ist die zuletzt abgeglichene Sicherung.

## Nutzung
GitHub Pages aktivieren (*Settings → Pages → Branch `main`*).

## Versionen
- **0.50:** Logo „Feuerfuchs“ (auch als Browser-Symbol), Verlauf filterbar nach Einheit mit Kompakt-/Ausführlich-Ansicht (kompakt als Standard), Notiz pro Eintrag (💬), Pausentimer (pro Übung einstellbar), Aufwärmsätze (🔥) und Scheibenrechner, antippbare Diagramme, Export-Erinnerung, Bildschirm bleibt während der Eingabe an.
- **0.45:** Kürzerer Platzhalter „Wdh.“ im Wiederholungsfeld, Gewichte in der Eingabe mit Komma (z. B. 110,5), bei Körpergewichtsübungen „zuletzt Körpergewicht“ bzw. „zuletzt +2,5 kg“.
- **0.44:** Eingabezeile auch auf schmalen Handys (360 px) mit ausreichend breitem Wiederholungsfeld; README: Version steht im ⓘ-Menü.
- **0.43:** Bugfix: Eingabezeile (Gewicht ▲▼ + Wiederholungen) auf dem Handy wieder korrekt, jetzt mit festem Raster.
- **0.42:** Gewichtspfeile größer: ▲ links und ▼ rechts neben dem Feld, über die volle Feldhöhe.
- **0.41:** ▲▼ für Gewichte (0,25 kg), angeheftete Leiste „Ältere Einträge“ zum Einklappen, „1RM geschätzt“, Titel „Trainingstagebuch“, Info-Menü ⓘ (Plan, Datei, Version, „created by Claude and JD“).
- **0.40:** Auswertungen: Fortschrittsübersicht, Bestleistungen, Regelmäßigkeit, Verläufe für Gewicht, geschätztes Max, Volumen und Wiederholungen; 🏆 im Verlauf.
- **0.31:** Pyramidensatz, neues Speichersystem (Startmenü, Import nur beim Start, Export schreibt als einziges in Dateien, „Alle Daten zurücksetzen“), Einträge je Einheit sichtbar, Layout-Fix „Sätze“ im Plan-Assistenten.
- **0.30:** Eigene Trainingspläne (1–6 Einheiten, Dokumentationsarten pro Übung), Plan im Tagebuch gespeichert, Anzeige des aktiven Plans, Kalender mit bis zu 6 Grüntönen.
- **0.21:** Nur letzte zwei Einträge sichtbar (Rest unter „Ältere Einträge“), Kurzübersicht beim Antippen eines Kalendertags, nur ein Eintrag pro Tag.
- **0.20:** Gewichtsvergleich zur vorangegangenen gleichen Einheit (Verlauf und Eingabe).
- **0.19:** Datum/Einheit werden bei jeder Aktualisierung neu gesetzt, Bereich „Auswertungen“ mit Kalenderübersicht.
- **0.18:** Verlauf wie Eingabe angeordnet (kg links, Wiederholungen rechts), letzte gleiche Einheit grün gestrichelt, Bearbeiten-Modus gelb.
- **0.17:** Satz-Nummern in der Eingabe, kompaktere Verlaufsansicht mit kg und Sätzen.
- **0.16:** Eindeutige IDs, Abgleich von Änderungen und Löschungen, ⓘ bei bearbeiteten Einträgen. Dateiformat Version 2.
- **0.15:** Einträge bearbeiten (Stift-Symbol im Verlauf).
- **0.14:** Indikator, welche Datei zuletzt verwendet wurde.
- **0.13:** Button „Trainingstagebuch importieren“, Versionsnummer eingeführt.
- davor (unnummeriert): Eingabe per Enter, variable Klimmzug-Sätze, Export als Trainingstagebuch mit Abgleich.
