import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';
const AUTH_TOKEN = __ENV.AUTH_TOKEN || '';

const errors = new Rate('errors');

export const options = {
  vus: 10,
  duration: '45s',
  thresholds: {
    http_req_failed: ['rate<0.05'],
    http_req_duration: ['p(95)<800', 'p(99)<1500'],
    errors: ['rate<0.05'],
  },
};

function runCheck(name, response, expectedStatus = 200) {
  const ok = check(response, {
    [`${name} status is ${expectedStatus}`]: (r) => r.status === expectedStatus,
    [`${name} response time < 1200ms`]: (r) => r.timings.duration < 1200,
  });

  errors.add(!ok);
}

export default function () {
  const rootRes = http.get(`${BASE_URL}/`);
  runCheck('GET /', rootRes, 200);

  const redisRes = http.get(`${BASE_URL}/redis/ping`);
  runCheck('GET /redis/ping', redisRes, 200);

  if (AUTH_TOKEN) {
    const animalsRes = http.get(`${BASE_URL}/animals`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    const authOk = check(animalsRes, {
      'GET /animals status is 200 (with token)': (r) => r.status === 200,
      'GET /animals response time < 1500ms': (r) => r.timings.duration < 1500,
    });

    errors.add(!authOk);
  }

  sleep(1);
}
