# Use Debian-slim (not alpine) — TensorFlow requires glibc
FROM node:20-slim

WORKDIR /app

# ── Python + ML dependencies ──────────────────────────────────────────────────
RUN apt-get update && apt-get install -y --no-install-recommends \
      python3 \
      python3-venv \
      python3-dev \
    && rm -rf /var/lib/apt/lists/*

COPY ML_model/requirements.txt ./ML_model/requirements.txt
RUN python3 -m venv /opt/venv \
    && /opt/venv/bin/pip install --no-cache-dir --upgrade pip \
    && /opt/venv/bin/pip install --no-cache-dir -r ML_model/requirements.txt

ENV PATH="/opt/venv/bin:$PATH"

# ── Node dependencies ─────────────────────────────────────────────────────────
COPY package*.json ./
COPY prisma.config.ts ./
COPY src/prisma ./src/prisma

RUN npm ci

# ── Copy source and build ─────────────────────────────────────────────────────
COPY . .

ENV NODE_OPTIONS="--max-old-space-size=2048"
ENV PYTHON_BIN="/opt/venv/bin/python"

RUN npm run build

# ── Runtime ───────────────────────────────────────────────────────────────────
EXPOSE 3000

CMD ["npm", "run", "start:prod"]
