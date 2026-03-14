# Use Debian-slim (not alpine) — TensorFlow requires glibc
FROM node:20-slim

WORKDIR /app

# ── Python + ML dependencies ──────────────────────────────────────────────────
RUN apt-get update && apt-get install -y --no-install-recommends \
      python3 \
      python3-pip \
      python3-dev \
    && rm -rf /var/lib/apt/lists/*

COPY ML_model/requirements.txt ./ML_model/requirements.txt
RUN pip3 install --no-cache-dir -r ML_model/requirements.txt

# ── Node dependencies ─────────────────────────────────────────────────────────
COPY package*.json ./
COPY prisma.config.ts ./
COPY src/prisma ./src/prisma

RUN npm ci

# ── Copy source and build ─────────────────────────────────────────────────────
COPY . .

ENV NODE_OPTIONS="--max-old-space-size=2048"

RUN npm run build

# ── Runtime ───────────────────────────────────────────────────────────────────
EXPOSE 3000

CMD ["npm", "run", "start:prod"]
