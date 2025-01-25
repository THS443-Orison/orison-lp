# ベースイメージ
FROM node:lts-slim AS base
WORKDIR /app

# パッケージファイルをコピーしてインストール
COPY package.json package-lock.json ./
RUN npm ci

# ソースコードをコピー
COPY tsconfig.json next.config.ts tailwind.config.ts postcss.config.mjs ./
COPY src/ ./src/
COPY public/ ./public/

# ビルド用のステージ
FROM base AS builder

# Next.js をビルド
RUN npm run build

# プロダクション用のイメージ
FROM node:lts-slim AS production
WORKDIR /app

# `package.json` と `package-lock.json` を `base` からコピー
COPY --from=base /app/package.json /app/package-lock.json ./

# `.next` ディレクトリを `builder` からコピー
COPY --from=builder /app/.next ./.next

# `public/` を `builder` からコピー（Tailwind の purge CSS のため）
COPY --from=builder /app/public ./public/

# `src/` もコピー（Tailwind の purge に影響するため）
COPY --from=builder /app/src ./src/

# 本番用の依存関係のみインストール
RUN npm install --omit=dev

# 環境変数を設定
ENV NODE_ENV=production
ENV PORT=3000

# ポートを公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "run", "start"]
