FROM node:22-alpine

WORKDIR /app

COPY estokay.api/package*.json ./
RUN npm ci

COPY estokay.api/ ./
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/main"]
