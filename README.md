# Trainingsplan

Aktuelle Version: **0.13** (steht auch unten auf der Seite)

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

## Speicherung
Alle Einträge werden automatisch im Browser des Geräts gespeichert (localStorage), du kannst also einfach am Handy trainieren.

## Trainingstagebuch (Export in Datei)
Button **Trainingstagebuch exportieren**:
- **Neue Datei erstellen:** schreibt alle Einträge in eine neue Datei `Trainingstagebuch.json`.
- **Bestehende Datei auswählen:** liest die Datei ein, ergänzt fehlende Einträge in beide Richtungen (Datei → Browser und Browser → Datei) und aktualisiert die Datei. Doppelte Einträge (gleiches Datum, gleiche Einheit, gleiche Werte) werden nicht doppelt angelegt.

Chrome/Edge am Computer überschreiben die gewählte Datei direkt. Auf dem Handy (iPhone/Safari, Chrome Android) wird die ergänzte Datei neu heruntergeladen und ersetzt die alte.

### Trainingstagebuch importieren
Button **Trainingstagebuch importieren**: wählt eine Tagebuch-Datei aus und übernimmt alle Einträge, die im Browser noch fehlen. Die Datei wird dabei nicht verändert. Bereits vorhandene Einträge werden nicht doppelt angelegt.

## Nutzung
GitHub Pages aktivieren (*Settings → Pages → Branch `main`*).

## Versionen
- **0.13:** Button „Trainingstagebuch importieren“, Versionsnummer eingeführt.
- davor (unnummeriert): Eingabe per Enter, variable Klimmzug-Sätze, Export als Trainingstagebuch mit Abgleich.
