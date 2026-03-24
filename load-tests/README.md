# Load Testing (k6)

This folder contains k6 load tests for baseline and stress checks.

## Prerequisites

- Backend API running (for example at `http://localhost:3000`)
- Docker installed (already available in this workspace)
- Optional: local `k6` binary if you do not want Docker

## Test Profiles

- `smoke.js`: short baseline check for latency/error rate
- `stress.js`: staged ramp-up to validate behavior under higher concurrency
- `full-api.js`: multi-scenario profile that exercises public + protected API routes

## NPM Commands

- `npm run test:load` - alias for smoke test with Dockerized k6
- `npm run test:load:smoke` - smoke profile (Dockerized k6 via cross-platform Node runner)
- `npm run test:load:stress` - stress profile (Dockerized k6 via cross-platform Node runner)
- `npm run test:load:api` - full API profile (Dockerized k6 via cross-platform Node runner)
- `npm run test:load:local:smoke` - smoke profile with local k6 binary
- `npm run test:load:local:stress` - stress profile with local k6 binary
- `npm run test:load:local:api` - full API profile with local k6 binary

## Environment Variables

- `BASE_URL`: target backend URL
  - Default for local-k6 scripts: `http://localhost:3000`
  - Docker scripts auto-detect the backend container network and use `http://nestjs-match:3000`
  - Fallback for Docker scripts (if no container network detected): `http://host.docker.internal:3000`
- `AUTH_TOKEN` (optional): use existing JWT for protected routes
- `AUTH_EMAIL` + `AUTH_PASSWORD` (optional): login credentials if no `AUTH_TOKEN`
- `AUTO_SIGNUP` (optional, default `1`): if no token/credentials, `full-api.js` creates a temporary user through `/auth/signup`
- `AUTO_CREATE_ANIMAL` (optional, default `1`): if no animal is found, create one via `/animals` in setup to exercise animal and recommendation routes
- `USER_ID` (optional): force specific user id for `/users/:id`
- `ANIMAL_ID` (optional): force specific animal for `/animals/:id` and `/recommendations?animalId=`
- `LATITUDE`, `LONGITUDE`, `RADIUS` (optional): defaults are `-1.9441`, `30.0619`, `10`
- `LOAD_DURATION` (optional): scenario duration for `full-api.js` (default `2m`)
- `PUBLIC_VUS`, `AUTH_VUS`, `USERS_VUS`, `ANIMALS_VUS`, `RECS_VUS` (optional): per-scenario concurrency tuning
- `K6_DOCKER_NETWORK` (optional): force a specific Docker network name
- `K6_BACKEND_CONTAINER` (optional): backend container name used for auto-detection (default: `nestjs-match`)

Example (Git Bash):

```bash
BASE_URL=http://localhost:3000 npm run test:load:local:smoke
BASE_URL=http://host.docker.internal:3000 npm run test:load:smoke
LOAD_DURATION=45s PUBLIC_VUS=8 AUTH_VUS=4 USERS_VUS=4 ANIMALS_VUS=4 RECS_VUS=2 npm run test:load:api
```

## Endpoint Coverage

`smoke.js` and `stress.js`:
- `GET /`
- `GET /redis/ping`

`full-api.js`:
- `GET /`
- `GET /redis/ping`
- `GET /auth/loggedIn` (token required)
- `GET /auth/logOut`
- `GET /users` (token required)
- `GET /users/nearby` (token required)
- `GET /users/:id` (if user id available)
- `GET /animals` (token required)
- `GET /animals/:id` (if animal id available)
- `GET /recommendations/quick-matches` (token required)
- `GET /recommendations?animalId=` (if animal id available)

## Metrics to Watch

- `http_req_duration` p(95), p(99): latency percentiles
- `http_req_failed`: failed request ratio
- `errors`: custom check failure rate
- `http_reqs` and `iterations`: throughput indicators
- `skipped_endpoints`: endpoints skipped due to missing auth token/user/animal context

Suggested acceptance baseline:

- p95 latency under 800ms (smoke), under 1200ms (stress), under 1500ms (full-api)
- error rate below 5% (smoke), below 10% (stress/full-api)
