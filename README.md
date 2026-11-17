# Trainingsplan

Einfaches Trainingslog fürs Fitnessstudio (läuft komplett im Browser, keine Installation).

## Pläne
- **Einheit 1:** Kniebeugen, Bankdrücken, Vorgebeugtes Rudern
- **Einheit 2:** Kreuzheben, Overhead-Press, Klimmzüge

## Eingabe
Pro Übung ein Feld: `Gewicht x Wdh-Wdh-Wdh`

| Eingabe | Bedeutung |
|---|---|
| `85x8-9-10` | 85 kg, Sätze mit 8, 9, 10 Wdh. |
| `82,5x8-9-10` | Dezimalgewicht |
| `85 8 9 10` | Kurzform ohne x und - |
| `0x8-7-6` | Körpergewicht (z. B. Klimmzüge) |

Datum ist standardmäßig heute, die Einheit wechselt automatisch (1 → 2 → 1 …). Die Werte vom letzten Mal stehen als Platzhalter im Feld.

## Nutzung
GitHub Pages aktivieren (*Settings → Pages → Branch `main`*) und die Seite am Handy öffnen.
Die Daten liegen im Browser (localStorage). Mit **Export** bekommst du eine Textdatei, mit **Backup** eine JSON-Sicherung zum Wiedereinspielen.
