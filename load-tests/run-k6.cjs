const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const profile = process.argv[2];
if (!profile) {
  console.error('Usage: node load-tests/run-k6.cjs <scriptNameWithoutExtension>');
  process.exit(1);
}

const testsDir = path.resolve(__dirname);
const scriptFile = path.resolve(testsDir, `${profile}.js`);

if (!fs.existsSync(scriptFile)) {
  console.error(`Script not found: ${scriptFile}`);
  process.exit(1);
}
const authToken = process.env.AUTH_TOKEN || '';
const backendContainer = process.env.K6_BACKEND_CONTAINER || 'nestjs-match';

function detectNetwork(containerName) {
  const result = spawnSync(
    'docker',
    ['inspect', '-f', '{{json .NetworkSettings.Networks}}', containerName],
    { encoding: 'utf8' },
  );

  if (result.status !== 0 || !result.stdout) {
    return '';
  }

  try {
    const networksObj = JSON.parse(result.stdout.trim());
    const networks = Object.keys(networksObj || {});
    return networks[0] || '';
  } catch {
    return '';
  }
}

const dockerNetwork = process.env.K6_DOCKER_NETWORK || detectNetwork(backendContainer);
const baseUrl = process.env.BASE_URL || (dockerNetwork ? 'http://nestjs-match:3000' : 'http://host.docker.internal:3000');

const args = [
  'run',
  '--rm',
  '-i',
  '-e',
  `BASE_URL=${baseUrl}`,
  '-e',
  `AUTH_TOKEN=${authToken}`,
  '-v',
  `${testsDir}:/scripts`,
  'grafana/k6',
  'run',
  `/scripts/${profile}.js`,
];

if (dockerNetwork) {
  args.splice(3, 0, '--network', dockerNetwork);
}

const result = spawnSync('docker', args, {
  stdio: 'inherit',
});

if (result.error) {
  console.error(`Failed to run docker k6: ${result.error.message}`);
  process.exit(1);
}

process.exit(result.status || 0);
