# Use Debian-slim (not alpine) — TensorFlow requires glibc
FROM node:20-slim AS builder

WORKDIR /app

# Install all dependencies (incl. dev) for build
COPY package*.json ./
COPY prisma.config.ts ./
COPY src/prisma ./src/prisma
RUN npm ci

# Build app, then strip dev dependencies from node_modules
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=512"
RUN npm run build \
    && npm prune --omit=dev


FROM node:20-slim AS runtime

WORKDIR /app

# Python runtime for ML scoring
RUN apt-get update && apt-get install -y --no-install-recommends \
      python3 \
      python3-venv \
    && rm -rf /var/lib/apt/lists/*

COPY ML_model/requirements.txt ./ML_model/requirements.txt
RUN python3 -m venv /opt/venv \
    && /opt/venv/bin/pip install --no-cache-dir --upgrade pip \
    && /opt/venv/bin/pip install --no-cache-dir -r ML_model/requirements.txt

# Bring in compiled app + production node deps
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/ML_model ./ML_model

ENV PATH="/opt/venv/bin:$PATH"
ENV PYTHON_BIN="/opt/venv/bin/python"
ENV NODE_OPTIONS="--max-old-space-size=384"
ENV REC_SCORING_CONCURRENCY="1"

EXPOSE 3000

CMD ["node", "dist/src/main.js"]
