# Trainingstagebuch – Projektkontext für Claude

Persönliche Web-App zum Dokumentieren von Krafttraining (Gewicht, Sätze, Wiederholungen).
Entwickelt von JD mit Claude. Kommunikation mit dem Nutzer auf **Deutsch**, Oberfläche ebenfalls Deutsch.

## Aufbau
- **Eine einzige Datei: `index.html`** (HTML + CSS + JavaScript inline, keine Bibliotheken, kein Build-Schritt).
- `README.md`: Nutzerdoku inkl. Versionsliste.
- Gehostet über **GitHub Pages** (Branch `main`, Root): https://sirdenec-blip.github.io/Trainingsplan/
- Hauptnutzung **am Handy** (Android, Chrome). Layout immer mobile-first prüfen (ca. 360–400 px Breite, keine horizontale Scrollleiste). Hell- und Dunkelmodus über CSS-Variablen auf `:root`.

## Versionierung
- Konstante `const VERSION="…"` im Script von `index.html`, angezeigt im ⓘ-Menü.
- Aktuell: **0.45**. Jede neue Version erhöht um 0.01 (nächste: 0.46); größere Funktionspakete springen auf die nächste Zehnerstelle (0.50 …). **1.0** ist für eine mögliche Android-App/PWA vorgesehen.
- Wenn der Nutzer „gleiche Versionsnummer“ sagt, Version nicht erhöhen.
- Bei jeder Version: `VERSION` anpassen, README aktualisieren (Versionszeile oben + Eintrag unter „## Versionen“ + betroffene Abschnitte).
- Vor größeren Umbauten: knapp Optionen nennen und nachfragen, wenn der Nutzer „erst klären“ verlangt.

## Datenmodell
- **Plan** (localStorage `trainingsplan_plan_v1`): `{name, ts, units:[{exs:[{n, m, s, bw?, max?, goal?}]}]}`, 1–6 Einheiten.
  - `m`: `"wr"` Gewicht + Wdh. · `"w"` nur Gewicht · `"r"` nur Wdh. · `"p"` Pyramidensatz (feste Wdh., Gewicht je Satz).
  - `s`: Anzahl Sätze (0 = beliebig viele), `bw`: Körpergewichtsübung (Zusatzgewicht, beliebig viele Sätze).
  - Vorgabeplan **WKM**: Einheit 1 Kniebeugen, Bankdrücken, Vorgebeugtes Rudern; Einheit 2 Kreuzheben, Overhead-Press, Klimmzüge (bw, max 12 Wdh./Satz, Ziel 24).
- **Einträge** (localStorage `trainingsplan_v1`): `{id, date:"YYYY-MM-DD", unit, ex:{Übung: Wert}, ts, ed?, del?}`.
  - Wertformate: `85x8-9-10` (Gewicht+Wdh.), `85` (nur Gewicht), `x8-9-10` (nur Wdh.), `8@60-70-80` (Pyramide).
  - `id`: eindeutig, unveränderlich; `ts`: letzte Änderung; `ed`: bearbeitet (zeigt ⓘ); `del`: Löschmarkierung (Tombstone, bleibt erhalten).
  - **Ein Eintrag pro Kalendertag** (beim Speichern erzwungen).
- **Datei** (Export/Import): `{version:3, plan, sessions:[…]}`. Ältere Formate (Array, version 1/2) werden weiter gelesen.
- Zuletzt verwendete Datei: localStorage `trainingsplan_file`.

## Wichtige Regeln (vom Nutzer festgelegt)
- **Startmenü** bei leerem Browserspeicher: „Neuen Trainingsplan anlegen“ (WKM oder Individuell) oder „Trainingsplan importieren“. Import gibt es nur dort.
- **Eine geöffnete Datei wird nie verändert, bis „Trainingsplan exportieren“ gedrückt wird.**
- Export-Abgleich: gleiche ID = gleicher Eintrag, neuere `ts` gewinnt, Löschungen werden mit abgeglichen; neuerer Plan (`ts`) gewinnt.
- „Alle Daten zurücksetzen“: löscht nur Browserdaten (mit Warnung), nie die Datei.
- Datum = heute, Einheit = nächste im Wechsel (nach der Einheit des datumsmäßig letzten Eintrags), bei jeder Aktualisierung.
- Verlauf: so viele Einträge sichtbar wie Einheiten im Plan (je Einheit der neueste), Rest unter „Ältere Einträge“ (angeheftete Leiste zum Einklappen).
- Letzte gleiche Einheit im Verlauf grün gestrichelt (Referenz); Bearbeiten-Modus gelb.
- Auswertungen (aufklappbar, unter dem Verlauf): Kalender, Fortschritt, Bestleistungen, Regelmäßigkeit, Gewicht, 1RM geschätzt (Epley), Volumen, Wiederholungen. 🏆 im Verlauf bei neuem Bestwert.
- Stil: minimalistisch und kompakt, grüne Akzentfarbe, kleine Hilfsangaben in Grau.
- Zahlen in der Oberfläche immer mit Dezimalkomma (auch in Eingabefeldern); gespeichert wird intern mit Punkt.

## Arbeitsweise
- Nach Änderungen JavaScript-Syntax prüfen und – wo möglich – im Browser in Handybreite ansehen (360 **und** 390 px, hell und dunkel).
- Browsertest: Kopie von `index.html` über einen lokalen Server außerhalb des Repos ausliefern; Testdaten (z. B. WKM-Plan mit 20–30 Einträgen) nur dort per localStorage anlegen, nie im Repo.
- Git: nicht im PATH; das Git von GitHub Desktop nutzen (`%LOCALAPPDATA%\GitHubDesktop\app-*\resources\app\git\cmd\git.exe`). Im Repo ist `credential.helper=manager` gesetzt, der Nutzer ist angemeldet: Claude committet und pusht selbst auf `main`.
- Bestehende Nutzerdaten dürfen durch Updates nie verloren gehen (Formate abwärtskompatibel lesen).
- Commits mit kurzer deutscher Nachricht, z. B. `Version 0.44: …`.

## Offene Ideen
- Logo statt 🏋️-Emoji im Titel.
- Version 1.0: PWA und/oder Android-App (Capacitor) mit direktem Dateizugriff.
