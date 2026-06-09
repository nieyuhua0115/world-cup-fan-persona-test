# World Cup Fan Persona Test

世界杯犯病人格测试 / Football SBTI 毒舌版。

This is a standalone local MVP. It has no backend, database, auth, external API, or LLM dependency.

## Features

- National team bias picker
- 16-question football fan persona quiz
- 16 deterministic SBTI-style result personas
- Result card with axis breakdown, ratings, roast copy, and clipboard copy
- Static local data and unit-testable scoring logic

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Local Generated Copy Cache

The app does not call an LLM at runtime. It locally builds enhanced copy for all
`persona + national team` combinations from the static persona and team data.
The result page reads that cache by `persona code + team id`.

There are 288 combinations: 16 personas x 18 national team filters.

## Routes

- `/` landing page
- `/fan-test` quiz flow
- `/fan-result` result card

## Future Work

- AI inference server for personalized roast copy
- Downloadable share poster
- Chinese / English bilingual mode
- World Cup schedule and team data
- Recommended national team
- Result stats and leaderboard
- Xiaohongshu-style share image
- User name in result card
- Short-video script generation
- AB tests for copywriting style
