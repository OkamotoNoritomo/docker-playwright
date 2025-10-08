FROM mcr.microsoft.com/playwright:v1.56.0-jammy

WORKDIR /app

# 依存だけ先に（キャッシュ有効化）
COPY package*.json ./

RUN npm ci

COPY . .

# 既定はHTMLレポート付きで実行
CMD ["npx", "playwright", "test", "--reporter=html"]

