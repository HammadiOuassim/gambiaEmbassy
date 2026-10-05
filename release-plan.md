# Release plan

Ship the Embassy of The Gambia in Qatar interfaces from `Assessment.zip`.

The first result is the Next.js front on Vercel, using the mockups and no live API. After that, the NestJS API and the front move to a VPS with Docker. Vercel is only the fast preview host.

## Stack

| Part | Choice |
| --- | --- |
| Front | Next.js (App Router) and TypeScript, in `front/` |
| Back | NestJS and TypeScript, in `back/` |
| Data, later | PostgreSQL |
| First host | Vercel, front only |
| Later host | One VPS, front + API + database, via Docker Compose |
| CI | GitHub Actions |
| CD now | Vercel deploys `front/` from GitHub |
| CD later | GitHub Actions builds images and updates the VPS |

This repo, its commits, and its Vercel project all use **HammadiOuassim**.

| | |
| --- | --- |
| GitHub | [HammadiOuassim/gambiaEmbassy](https://github.com/HammadiOuassim/gambiaEmbassy) |
| Git name | HammadiOuassim |
| Git email | `88116332+HammadiOuassim@users.noreply.github.com` |
| Vercel | HammadiOuassim, root directory `front/` |

Account details are also in `docs.md`, `front/docs/README.md`, and `back/docs/README.md`.

## Layout

```text
gambiaEmbassy/
  Assessment.zip          design source
  docs.md
  release-plan.md
  front/                  Next.js
    docs/
  back/                   NestJS
    docs/
  docker-compose.yml      added in the VPS phase, not for the first Vercel drop
```

`front/docs/` holds front routes, screen notes, and env vars. `back/docs/` holds API modules, auth, and data notes.

## Phase 1 — Front on Vercel

Goal: open a public URL and see the interfaces.

Build Next.js in `front/` and match the screens in `Assessment.zip`. Pages read local mock data. Nothing in this phase calls NestJS.

| Route | Screen |
| --- | --- |
| `/` | Official embassy website, including the hero |
| `/login` | Citizen login |
| `/forgot-password` | Forgot password, including the invalid-email state |
| `/verify` | Two-step verification |
| `/reset-success` | Password reset success |
| `/register` | Secure citizen registration (step 3 of 4, with the step list) |
| `/portal` | Citizen portal dashboard |
| `/admin` | Embassy administration dashboard |

Deploy:

1. Create the Vercel project from `https://github.com/HammadiOuassim/gambiaEmbassy`.
2. Set the Vercel root directory to `front`.
3. Framework preset: Next.js. Build command: `next build`.
4. Production branch: `main`. Each push to `main` updates the Vercel URL. Pull requests get preview URLs.

No Dockerfile and no API are required for this URL.

## Phase 2 — NestJS API

Add the API in `back/` once the Vercel front is visible.

Modules to plan for:

- Auth: email or Citizen ID, password, SMS code, password reset
- Citizens: registration steps, profile, family, emergency contacts
- Applications: passport renewal, birth registration, status
- Documents: certificates and passport or QID metadata
- Notifications
- Admin: citizen search, approve, request correction, official PDF

The front keeps working on Vercel. It calls the API through `NEXT_PUBLIC_API_URL`. Until the VPS exists, that URL can point at a local NestJS process.

## Phase 3 — Docker and the VPS

This replaces Vercel. Both apps run on one machine.

`front/Dockerfile` builds the Next.js app and serves it with `next start`.

`back/Dockerfile` builds NestJS and runs `node dist/main`.

Root `docker-compose.yml` runs:

- `web` from `front/`
- `api` from `back/`
- `postgres`

Compose is the VPS runtime. It is not used for the first Vercel deploy. Vercel builds Next.js itself and does not read this compose file.

## CI

GitHub Actions on pull requests and on `main`:

- `front`: install, lint, typecheck, `next build`
- `back`: install, lint, unit test, `nest build`, once the API exists

A failing check blocks the merge. Phase 1 only needs the front job.

## CD

**Now.** Vercel’s GitHub integration deploys `front/` from `main`. No custom deploy script.

**On the VPS.** A GitHub Actions workflow on `main`:

1. Runs the same CI checks.
2. Builds the front and back images.
3. Copies compose and env to the VPS over SSH, or pulls images from a registry.
4. Runs `docker compose up -d`.

Secrets for that workflow live in GitHub Actions, not in the repo: VPS host, SSH key, database password, API secrets.

## Move from Vercel to the VPS

1. Confirm `docker compose up` serves the same routes on the VPS.
2. Point the domain from Vercel to the VPS.
3. Set `NEXT_PUBLIC_API_URL` to the VPS API.
4. Leave the Vercel project in place until the domain has been checked, then remove it.

The Next.js code stays in `front/`. Only the host and the API URL change. NestJS is deployed first on the VPS, not on Vercel.

## Decided

- The first Vercel drop includes all eight screens.
- English ships first. The Arabic language toggle is a later pass.
- Vercel is the HammadiOuassim account, project from this `gambiaEmbassy` repository.

## Phase 1 boundaries

Included: the eight screens, English copy from the mockups, shared green-and-white layout, mock citizen Mariama F. Jallow.

Not included yet: a real login, database, file upload, SMS, Arabic translations, and the NestJS process.
