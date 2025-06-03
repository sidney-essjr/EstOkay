# Fase de build
FROM node:22-alpine as build

WORKDIR /app

COPY estokay.front/package*.json ./
RUN npm ci

COPY estokay.front/ ./
RUN npm run build

# Servidor estático com nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY estokay.front/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
