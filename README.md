# L.U.K.A.S. Kicktipp Bot

Automatischer Kicktipp-Bot mit Playwright, API-Football und Gemini-Analyse.

## Railway Deployment

1. Dieses Repository als neues Railway-Projekt importieren.
2. Unter **Variables** die Werte aus `.env.example` setzen.
3. Optional einen Railway-PostgreSQL-Service hinzufügen; `DATABASE_URL` wird dann automatisch verfügbar gemacht.
4. Eine öffentliche Domain für den Service erzeugen.

Der Docker-Container enthält Chromium über das offizielle Playwright-Image. Frontend und API laufen gemeinsam in einem Railway-Service. Der Healthcheck ist unter `/api/healthz` erreichbar.

## Wichtige Variablen

- `GEMINI_API_KEY`
- `FOOTBALL_API`
- `KICKTIPP_USERNAME`
- `KICKTIPP_PASSWORD`
- optional `KICKTIPP_USERNAME2`, `KICKTIPP_PASSWORD2`
- empfohlen `DATABASE_URL`

Zugangsdaten niemals in Quellcode, `.env.example`, Commits oder Logs eintragen.
