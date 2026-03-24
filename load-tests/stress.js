import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

const errors = new Rate('errors');

export const options = {
  stages: [
    { duration: '1m', target: 20 },
    { duration: '2m', target: 60 },
    { duration: '2m', target: 120 },
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.1'],
    http_req_duration: ['p(95)<1200', 'p(99)<2500'],
    errors: ['rate<0.1'],
  },
};

function runCheck(name, response, expectedStatus = 200) {
  const ok = check(response, {
    [`${name} status is ${expectedStatus}`]: (r) => r.status === expectedStatus,
    [`${name} response time < 2000ms`]: (r) => r.timings.duration < 2000,
  });

  errors.add(!ok);
}

export default function () {
  const rootRes = http.get(`${BASE_URL}/`);
  runCheck('GET /', rootRes, 200);

  const redisRes = http.get(`${BASE_URL}/redis/ping`);
  runCheck('GET /redis/ping', redisRes, 200);

  sleep(0.5);
}
