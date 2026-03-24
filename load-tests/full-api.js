import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter, Rate } from 'k6/metrics';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';
const LOAD_DURATION = __ENV.LOAD_DURATION || '2m';
const LATITUDE = __ENV.LATITUDE || '-1.9441';
const LONGITUDE = __ENV.LONGITUDE || '30.0619';
const RADIUS = __ENV.RADIUS || '10';

const AUTO_SIGNUP = (__ENV.AUTO_SIGNUP || '1') === '1';
const AUTO_CREATE_ANIMAL = (__ENV.AUTO_CREATE_ANIMAL || '1') === '1';

const PUBLIC_VUS = Number(__ENV.PUBLIC_VUS || 20);
const AUTH_VUS = Number(__ENV.AUTH_VUS || 8);
const USERS_VUS = Number(__ENV.USERS_VUS || 12);
const ANIMALS_VUS = Number(__ENV.ANIMALS_VUS || 12);
const RECS_VUS = Number(__ENV.RECS_VUS || 6);

const errors = new Rate('errors');
const skippedEndpoints = new Counter('skipped_endpoints');

export const options = {
  scenarios: {
    public_routes: {
      executor: 'constant-vus',
      exec: 'publicRoutes',
      vus: PUBLIC_VUS,
      duration: LOAD_DURATION,
      gracefulStop: '30s',
    },
    auth_routes: {
      executor: 'constant-vus',
      exec: 'authRoutes',
      vus: AUTH_VUS,
      duration: LOAD_DURATION,
      gracefulStop: '30s',
    },
    users_routes: {
      executor: 'constant-vus',
      exec: 'usersRoutes',
      vus: USERS_VUS,
      duration: LOAD_DURATION,
      gracefulStop: '30s',
    },
    animals_routes: {
      executor: 'constant-vus',
      exec: 'animalsRoutes',
      vus: ANIMALS_VUS,
      duration: LOAD_DURATION,
      gracefulStop: '30s',
    },
    recommendations_routes: {
      executor: 'constant-vus',
      exec: 'recommendationRoutes',
      vus: RECS_VUS,
      duration: LOAD_DURATION,
      gracefulStop: '30s',
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.1'],
    http_req_duration: ['p(95)<1500', 'p(99)<3000'],
    errors: ['rate<0.1'],
  },
};

function authHeaders(token) {
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
}

function runCheck(name, response, allowedStatuses = [200], maxMs = 2000) {
  const ok = check(response, {
    [`${name} status is expected`]: (r) => allowedStatuses.includes(r.status),
    [`${name} response time < ${maxMs}ms`]: (r) => r.timings.duration < maxMs,
  });

  errors.add(!ok);
}

function uniqueSuffix() {
  return `${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
}

function resolveToken() {
  const explicit = __ENV.AUTH_TOKEN || '';
  if (explicit) return explicit;

  const email = __ENV.AUTH_EMAIL || '';
  const password = __ENV.AUTH_PASSWORD || '';

  if (email && password) {
    const loginRes = http.post(
      `${BASE_URL}/auth/login`,
      JSON.stringify({ email, password }),
      { headers: { 'Content-Type': 'application/json' } },
    );

    if (loginRes.status === 200 || loginRes.status === 201) {
      return loginRes.json('token') || loginRes.json('access_token') || '';
    }
  }

  if (!AUTO_SIGNUP) return '';

  const suffix = uniqueSuffix();
  const signupBody = {
    name: `Load User ${suffix}`,
    sex: 'MALE',
    email: `load-${suffix}@example.com`,
    phone_number: `+25078${String(Math.floor(Math.random() * 10000000)).padStart(7, '0')}`,
    password: 'pass1234',
    lastActive: new Date().toISOString(),
    district: 'Kigali',
    sector: 'Gasabo',
    village: 'Kimironko',
    cell: 'Bibare',
    latitude: Number(LATITUDE),
    longitude: Number(LONGITUDE),
  };

  const signupRes = http.post(
    `${BASE_URL}/auth/signup`,
    JSON.stringify(signupBody),
    { headers: { 'Content-Type': 'application/json' } },
  );

  if (signupRes.status === 200 || signupRes.status === 201) {
    return signupRes.json('token') || signupRes.json('access_token') || '';
  }

  return '';
}

export function setup() {
  const token = resolveToken();

  let userId = __ENV.USER_ID || '';
  let animalId = __ENV.ANIMAL_ID || '';

  if (token && !userId) {
    const meRes = http.get(`${BASE_URL}/auth/loggedIn`, {
      headers: authHeaders(token),
    });
    if (meRes.status === 200) {
      userId = meRes.json('userId') || '';
    }
  }

  if (token && !animalId) {
    const animalsRes = http.get(`${BASE_URL}/animals`, {
      headers: authHeaders(token),
    });

    if (animalsRes.status === 200) {
      const body = animalsRes.json();
      if (Array.isArray(body) && body.length > 0) {
        animalId = body[0].animalId || '';
      }
    }
  }

  if (token && !animalId && AUTO_CREATE_ANIMAL) {
    const createBody = {
      name: `LoadAnimal-${uniqueSuffix()}`,
      sex: 'MALE',
      type: 'GOAT',
      status: 'ALIVE',
      specie: 'INDIGENOUS_GOAT',
      breed_confidence: 0.88,
    };

    const createRes = http.post(
      `${BASE_URL}/animals`,
      JSON.stringify(createBody),
      {
        headers: {
          ...authHeaders(token),
          'Content-Type': 'application/json',
        },
      },
    );

    if (createRes.status === 200 || createRes.status === 201) {
      animalId = createRes.json('animalId') || animalId;
    }

    if (!animalId) {
      const refreshRes = http.get(`${BASE_URL}/animals`, {
        headers: authHeaders(token),
      });

      if (refreshRes.status === 200) {
        const body = refreshRes.json();
        if (Array.isArray(body) && body.length > 0) {
          animalId = body[0].animalId || '';
        }
      }
    }
  }

  return { token, userId, animalId };
}

export function publicRoutes() {
  const rootRes = http.get(`${BASE_URL}/`);
  runCheck('GET /', rootRes, [200], 1500);

  const redisRes = http.get(`${BASE_URL}/redis/ping`);
  runCheck('GET /redis/ping', redisRes, [200], 1500);

  sleep(0.2);
}

export function authRoutes(data) {
  if (!data.token) {
    skippedEndpoints.add(2);
    sleep(0.4);
    return;
  }

  const meRes = http.get(`${BASE_URL}/auth/loggedIn`, {
    headers: authHeaders(data.token),
  });
  runCheck('GET /auth/loggedIn', meRes, [200], 1800);

  const logoutRes = http.get(`${BASE_URL}/auth/logOut`);
  runCheck('GET /auth/logOut', logoutRes, [200], 1800);

  sleep(0.3);
}

export function usersRoutes(data) {
  if (!data.token) {
    skippedEndpoints.add(3);
    sleep(0.5);
    return;
  }

  const usersRes = http.get(`${BASE_URL}/users`, {
    headers: authHeaders(data.token),
  });
  runCheck('GET /users', usersRes, [200], 2200);

  const nearbyRes = http.get(
    `${BASE_URL}/users/nearby?latitude=${LATITUDE}&longitude=${LONGITUDE}&radius=${RADIUS}`,
    { headers: authHeaders(data.token) },
  );
  runCheck('GET /users/nearby', nearbyRes, [200], 2500);

  if (data.userId) {
    const userByIdRes = http.get(`${BASE_URL}/users/${data.userId}`);
    runCheck('GET /users/:id', userByIdRes, [200], 2000);
  } else {
    skippedEndpoints.add(1);
  }

  sleep(0.4);
}

export function animalsRoutes(data) {
  if (!data.token) {
    skippedEndpoints.add(2);
    sleep(0.5);
    return;
  }

  const listRes = http.get(`${BASE_URL}/animals`, {
    headers: authHeaders(data.token),
  });
  runCheck('GET /animals', listRes, [200], 2200);

  if (data.animalId) {
    const singleRes = http.get(`${BASE_URL}/animals/${data.animalId}`, {
      headers: authHeaders(data.token),
    });
    runCheck('GET /animals/:id', singleRes, [200], 2200);
  } else {
    skippedEndpoints.add(1);
  }

  sleep(0.4);
}

export function recommendationRoutes(data) {
  if (!data.token) {
    skippedEndpoints.add(2);
    sleep(0.6);
    return;
  }

  const quickMatchesRes = http.get(
    `${BASE_URL}/recommendations/quick-matches?latitude=${LATITUDE}&longitude=${LONGITUDE}&radius=${RADIUS}`,
    { headers: authHeaders(data.token) },
  );
  runCheck('GET /recommendations/quick-matches', quickMatchesRes, [200], 3000);

  if (data.animalId) {
    const recRes = http.get(`${BASE_URL}/recommendations?animalId=${data.animalId}`, {
      headers: authHeaders(data.token),
    });
    runCheck('GET /recommendations?animalId', recRes, [200, 400, 404], 4000);
  } else {
    skippedEndpoints.add(1);
  }

  sleep(0.5);
}
