FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma.config.ts ./
COPY src/prisma ./src/prisma

RUN npm ci

COPY . .

ENV NODE_OPTIONS="--max-old-space-size=8192"

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:debug"]
