# TTB – Trainingstagebuch – Projektkontext für Claude

Web-App (PWA „TTB“) zum Dokumentieren von Krafttraining (Gewicht, Sätze, Wiederholungen), mit Google-Drive-Speicherung.
Entwickelt von JD mit Claude. Kommunikation mit dem Nutzer auf **Deutsch**, Oberfläche ebenfalls Deutsch.

## Aufbau
- **`index.html`**: die ganze App (HTML + CSS + JavaScript inline, kein Build-Schritt). Einzige externe Quelle: Googles Anmelde-Skript `accounts.google.com/gsi/client` (wird nur mit `CLIENT_ID` geladen).
- **`manifest.webmanifest`** (Name „TTB – Trainingstagebuch“, Kurzname **„TTB“**), **`icons/`** (aus dem Logo erzeugte PNGs: 192, 512, maskable 512, apple-touch 180), **`sw.js`** (Service Worker: Netz zuerst, nach 3 s Cache; Google-Anfragen unberührt). Bei neuer Version `CACHE`-Name in `sw.js` mitziehen (`ttb-<Version>`).
- `README.md`: Nutzerdoku inkl. Versionsliste.
- Gehostet über **GitHub Pages** (Branch `main`, Root): https://sirdenec-blip.github.io/Trainingsplan/
- Hauptnutzung **am Handy** (Android/Chrome, zusätzlich iPhone/Safari – iPhone-tauglich bauen). Layout mobile-first (360–400 px, keine horizontale Scrollleiste). Hell-/Dunkelmodus über CSS-Variablen auf `:root`.
- **Der Dunkelmodus ist die primäre Ansicht** (so nutzt der Nutzer die App): Farben, Kontraste und Gestaltung zuerst für Dunkel festlegen und prüfen, danach hell passend ableiten.

## Versionierung
- Konstante `const VERSION="…"` in `index.html`, angezeigt im ⓘ-Menü.
- Aktuell: **0.96** (Testversion PWA + Drive-Sync). Vom Nutzer bestätigt: Google-Anmeldung in der installierten Android-App, Offline-Speichern mit automatischem Nachholen, Anmeldung am PC im Browser und Synchronisierung Handy ↔ PC in beide Richtungen. Offen bis 1.0: Test auf dem iPhone (Safari + installierte App; Nutzer testet später), stilles Erneuern nach > 1 h. **1.0** = fertige, vom Nutzer abgenommene PWA. Kleine Schritte +0.01, größere Pakete nächste Zehnerstelle.
- Wenn der Nutzer „gleiche Versionsnummer“ sagt, Version nicht erhöhen.
- Bei jeder Version: `VERSION` und `CACHE` in `sw.js` anpassen, README aktualisieren (Versionszeile + „## Versionen“ + betroffene Abschnitte).
- Vor größeren Umbauten: Konzept/Optionen knapp vorlegen und nachfragen.

## Speicherung (seit 0.90)
- **Mehrere Pläne.** Jeder Plan ist ein Dokument `{app:"TTB", version:4, plan, sessions}` → in Drive **eine Datei pro Plan** im Ordner **„Trainingstagebuch“** (sichtbar), Dateiname = Planname + `.json`, Zuordnung über appProperty `ttbPlan` = Plan-ID (Umbenennen benennt die Datei um, nie zweite Datei). Berechtigung nur `drive.file`.
- **Gerät (localStorage):** `ttb_index` `{mode:"cloud"|"local"|null, active, email?, folder?, plans:{id:{id,name,n,last,fileId?,mod?,dirty?,rev?,debug?}}}`, `ttb_doc_<planId>` (Arbeitskopie), `ttb_tok` (Google-Zugang, ~1 h), `ttb_last` (letzter Abgleich). Oberfläche: `trainingsplan_ui` `{hf, hv, tmr}`.
- **Ablauf:** `persist()` speichert sofort lokal, markiert `dirty`/`rev` und startet `syncSoon()` (1,5 s). `syncAll()`: Drive-Liste holen, neue Pläne anderer Geräte aufnehmen, je Plan `syncPlan()` = herunterladen → mit frischer lokaler Kopie zusammenführen (`mergeDocs`: gleiche ID, neuere `ts` gewinnt, Tombstones bleiben; neuerer Plan gewinnt) → lokal schreiben → nur bei Unterschied hochladen. `dirty` wird nur gelöscht, wenn `rev` während des Abgleichs unverändert blieb. Abgleich auch beim Öffnen, Zurückkehren (visibilitychange) und `online`; beim Verlassen wird Ausstehendes sofort übertragen.
- **Google-Zugang:** Im Browser-Tab GIS-Token-Client (Popup; Erneuern über `kick()` nach Speichern/Löschen oder Tipp auf die Statuszeile). In der **installierten App** (`appMode()` = `display-mode: standalone` oder `navigator.standalone`) **immer Weiterleitung** mit `#access_token` (State in `localStorage.ttb_st`, Rücksprung-Aktion in `sessionStorage.ttb_after`) – das GIS-Popup bleibt dort auf Android in einem Overlay weiß hängen (vom Nutzer gemeldet, 0.91). `silentRenew()`: beim Start und beim Zurückkehren still per `prompt=none` erneuern, nur wenn nichts eingegeben ist, höchstens alle 30 min (`ttb_silent`). Zugang ~1 h; ohne Zugang arbeitet alles lokal weiter. Ein eigener Server (z. B. Cloudflare Worker für Dauerzugang) ist als **spätere Ausbaustufe** vorgesehen.
- `CLIENT_ID` oben im Speicher-Abschnitt von `index.html` (Google-Cloud-Projekt „TTB Trainingstagebuch“ des Nutzers, Client „TTB Web“; erlaubte Quellen `https://sirdenec-blip.github.io` und `http://localhost:8765`). Status bei Google: „Testen“ – nur eingetragene Testnutzer können sich anmelden; im Teststatus zeigt Google bei jeder Anmeldung den Hinweis „nicht überprüft“ und das stille Erneuern klappt dann offenbar nicht. Ziel: „In Produktion“ (für `drive.file` keine Google-Prüfung nötig; Branding verlangt Startseite + **`datenschutz.html`** + autorisierte Domain `sirdenec-blip.github.io`; kein Logo hochladen, das löst eine Prüfung aus). Leer = nur „Ohne Cloud“ möglich.
- `datenschutz.html`: Datenschutzerklärung (Inhalt muss zur tatsächlichen Datenverarbeitung passen – bei Änderungen an Speicherung/Diensten mit anpassen), verlinkt auf dem Startbildschirm und im ⓘ-Menü.
- Im Browser-Pane von Claude öffnet sich das Google-Anmeldefenster nicht (Popups nur nach echtem Nutzerklick) – echte Anmeldung testet der Nutzer.
- **Datenschutz-Regeln:** Löschen eines Plans = Drive-Papierkorb (30 Tage). In Drive gelöschte Pläne werden lokal entfernt (vorher Rückfrage, falls offline geändert). „Lokale Daten löschen & Google trennen“ synchronisiert vorher (offline verweigert) und löscht nur `ttb_*`. Debug-Plan (`id:"debug"`) wird **nie** hochgeladen. In Drive wird nie automatisch etwas gelöscht.
- Keine Rückwärtskompatibilität zu Ständen vor 0.90 nötig (laut Nutzer keine echte Nutzung davor); alte Schlüssel `trainingsplan_v1/_plan_v1/_file` werden beim Start entfernt.

## Datenmodell
- **Plan:** `{id, name, ts, units:[{exs:[{n, m, s, bw?, max?, goal?, rest?}]}]}`, 1–6 Einheiten, Name eindeutig.
  - `m`: `"wr"` Gewicht + Wdh. · `"w"` nur Gewicht · `"r"` nur Wdh. · `"p"` Pyramidensatz.
  - `s`: Sätze (0 = beliebig viele), `bw`: Körpergewichtsübung.
  - `rest`: Pause in Sekunden (fehlt = 120 für alle Übungen; 0 = aus), nur gespeichert, wenn abweichend. „Nur Gewicht“ hat bewusst keine Pause (kein Satz-Ereignis – vom Nutzer so entschieden).
  - Vorgabe **WKM**: Einheit 1 Kniebeugen, Bankdrücken, Vorgebeugtes Rudern; Einheit 2 Kreuzheben, Overhead-Press, Klimmzüge (bw, max 12, Ziel 24).
- **Einträge:** `{id, date:"YYYY-MM-DD", unit, ex:{Übung: Wert}, ts, ed?, del?, note?}`. Werte: `85x8-9-10`, `85`, `x8-9-10`, `8@60-70-80`. Ein Eintrag pro Kalendertag.

## Wichtige Regeln (vom Nutzer festgelegt)
- **Start:** „Mit Google Drive starten“ (Standard, groß) → vorhandene Pläne wählen (bei genau einem direkt öffnen) oder Plan anlegen (WKM/Individuell). „Ohne Cloud nutzen“ nur als kleiner Link mit vorherigem Hinweis-Popup zu den Grenzen; später verbindbar (gleichnamige Pläne werden zusammengeführt).
- **Plan wechseln** (Knopf unten und Planname unter dem Titel): oben direkt die **Liste aller Pläne** (antippen = wechseln), darunter „＋ Neuen Plan erstellen“ (WKM / Individuell / Aus bestehendem Plan übernehmen = Übungen ohne Einträge) und „Plan löschen“ (Bestätigung). Unten „Lokale Daten löschen & Google trennen“ (lokaler Modus: „Lokale Daten löschen“); im lokalen Modus zusätzlich „Sicherungskopie teilen“/„Sicherung einspielen“.
- Debug-Plan heißt „Debug-WKM“; der Käfer wird nur als Symbol davor angezeigt (`pName()`), nicht im Namen gespeichert.
- **Statuszeile** unter dem Titel statt Export-Erinnerung (gespeichert / offline / Verbindung erneuern / nur auf diesem Gerät).
- **Kein Ton / keine akustische Benachrichtigung** (ausdrücklicher Nutzerwunsch). Timer-Ende: grüne Leiste + Vibration (Android).
- Datum = heute, Einheit = nächste im Wechsel, bei jeder Aktualisierung.
- Verlauf: so viele Einträge sichtbar wie Einheiten (je Einheit der neueste), Rest unter „Ältere Einträge“ (angeheftet). Filter „Alle · E1 · E2 …“ (dann nur 1 sichtbar), Ansicht „Kompakt“ (Standard, Bubbles `.bb`, Name wird gekürzt) / „Ausführlich“. Notiz: Eingabe nur Symbol (klappt Feld aus), Verlauf kompakt 💬 zum Antippen.
- **Standard für Logos und Piktogramme: einfarbig** als Inline-SVG mit `currentColor` (passt sich hell/dunkel an), keine bunten Emojis – auch keine Zeichen wie ☁ ⚠ ⏱ 🐞 📱, die Android bunt darstellt. Vorhandene Sammlung: `svgI`/`sI`, `BB`, `FL`, `NB`, `CK`, `BUG`, `ICO.{cloud,warn,cal,ov,rec,reg,w,e1,vol,rp}`. Aktiv = volle Deckkraft, inaktiv = blass.
  - **Ausnahmen** (vom Nutzer festgelegt): 🏆 Pokale (Bestwerte), 💬 Notiz-Symbol im Verlauf/Archiv, 📋 vor dem Plannamen in der Statusleiste oben. Texte in System-Dialogen (`confirm`/`alert`) sind ebenfalls ausgenommen.
  - Das Feuerfuchs-Logo ist als einziges Bild farbig.
- Trainingshelfer: Satz-Pausentimer, Leiste immer **oben** (`--tb`, Scroll-Versatz ausgeglichen). Uhr-Knopf: kurz = an/aus, lang (0,5 s) = freier Timer (±0:15/±0:30, Start → Pause → Weiter, „Zeit abgelaufen“). Aufwärmsätze 40/60/80 % (2,5-kg-Raster), Scheibenrechner (20-kg-Stange), Wake Lock.
- **Debug-Modus:** Käfer hinter der Versionsnummer (ⓘ); lange drücken (1 s) legt Plan „🐞 Debug-WKM“ mit `demoData()` (~46 Einträge) **nur lokal** an und wechselt dorthin; keine Auswirkung auf echte Pläne.
- Logo „Feuerfuchs“ als Inline-SVG-`<symbol id="lg">` (Rugbyball aubergine `#4b2142`), auch Favicon und App-Icons.
- Gewichtsdifferenz im Verlauf (+ / −): **sehr gedeckt** eingefärbt (`--dup`/`--ddn`, kaum Kontrast zu den grauen Hilfszahlen, normale Schriftstärke) – sie soll nicht im Fokus stehen.
- Letzte gleiche Einheit grün gestrichelt; Bearbeiten-Modus gelb. Auswertungen: Kalender (Tage mit Notiz: kleines einfarbiges Sprechblasen-Symbol `NB(10)` oben rechts im Kästchen), Fortschritt, Bestleistungen, Regelmäßigkeit, Gewicht, 1RM (Epley), Volumen, Wiederholungen; 🏆 bei Bestwert; Diagramme antippbar.
- Stil: minimalistisch, grüne Akzentfarbe, Hilfsangaben grau. Zahlen in der Oberfläche mit Dezimalkomma, gespeichert mit Punkt.
- Vor einer Umsetzung, bei der eine Vorgabe technisch keine Wirkung hätte, kurz mit Begründung nachfragen.

## Arbeitsweise
- Nach Änderungen im Browser in Handybreite prüfen (360 **und** 390 px, hell und dunkel), Konsole auf Fehler prüfen.
- **Browsertest:** Testumgebung im Scratchpad: `serve.ps1` (lokaler Server, Port 8765, auch PUT für erzeugte Dateien), `build-site.ps1` (kopiert `index.html` und fügt `mock.js` ein = Ersatz für Google Drive in localStorage `mock_drive`, mit Offline-Schalter und `edit()` für „anderes Gerät“). Nie Test-Code ins Repo. `.claude/launch.json` ist per `.git/info/exclude` ausgeschlossen.
- Die echte Google-Anmeldung kann Claude nicht selbst testen (keine Passwörter) – das testet der Nutzer am Handy/iPhone.
- **Dateien nie per Skript „blind“ überschreiben:** PowerShell-Skripte mit `$ErrorActionPreference='Stop'` und Prüfungen vor dem Schreiben (ein fehlerhaftes Skript hat einmal `index.html` geleert; wiederhergestellt aus Git).
- Git: nicht im PATH; Git von GitHub Desktop nutzen (`%LOCALAPPDATA%\GitHubDesktop\app-*\resources\app\git\cmd\git.exe`). `credential.helper=manager` ist gesetzt: Claude committet und pusht selbst auf `main`.
- Commits mit kurzer deutscher Nachricht, z. B. `Version 0.91: …`.

## Offene Ideen
- **Später:** kleiner Server (z. B. Cloudflare Worker) für dauerhaften Google-Zugang ohne stündliches Erneuern; Veröffentlichung der Google-App (Datenschutzseite) für Nutzer außerhalb der Testnutzerliste.
- Aus dem Brainstorming: „Letztes Mal“ beim Satz, Gewichtsvorschlag/Progression, Wochen-/Monatsrückblick, Plateau-Erkennung, Zeitraumwahl für Diagramme, Körpergewicht erfassen, Jahres-Heatmap, Deload-Woche, Rückgängig nach Löschen, größere Tippflächen für ✎/✕.
- Scheibensatz einstellbar machen (aktuell fest 25/20/15/10/5/2,5/1,25).
