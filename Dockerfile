FROM node:lts-slim AS base
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json next.config.ts tailwind.config.ts postcss.config.mjs ./
COPY src/ ./src/
COPY public/ ./public/

FROM base AS builder

RUN npm run build

FROM node:lts-slim AS production
WORKDIR /app

COPY --from=base /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public/
COPY --from=builder /app/src ./src/

RUN npm install --omit=dev

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start"]
