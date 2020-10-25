# BUILD
# FROM node:alpine as builder
FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

# RUN SERVER
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
