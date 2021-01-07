FROM node:12-alpine as builder
RUN apk update && apk add build-base autoconf automake libtool pkgconfig nasm
WORKDIR '/app'
COPY ./package.json ./
RUN npm install --global gatsby-cli && gatsby telemetry --disable
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 8000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public /usr/share/nginx/html