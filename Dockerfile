FROM node:lts-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm
WORKDIR /app

RUN mkdir -p .next/cache

COPY --link package.json pnpm-lock.yaml ./

FROM base AS builder

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM builder AS nextjs
ARG NEXT_DEPLOYMENT_ID
ARG NEXT_SERVER_ACTIONS_ENCRYPTION_KEY

COPY --link next.config.mjs tsconfig.json ./
COPY --link src/ ./src/

RUN --mount=type=cache,target=/app/.next/cache pnpm run build

FROM base AS prod
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod

FROM node:lts-slim
WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl libssl-dev

ENV NODE_ENV=production \
    HOSTNAME=0.0.0.0 \
    NEXT_OTEL_VERBOSE=1

COPY --link --from=prod /app/node_modules ./node_modules
COPY --link --from=nextjs /app/.next/static ./.next/static
COPY --link --from=nextjs /app/.next/standalone /app/

CMD ["node", "--enable-source-maps", "server.js"]
