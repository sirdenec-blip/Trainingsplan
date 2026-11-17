# Trainingsplan

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

## Nutzung
GitHub Pages aktivieren (*Settings → Pages → Branch `main`*). Daten liegen im Browser (localStorage); **Export** = Textdatei, **Backup** = JSON-Sicherung.
