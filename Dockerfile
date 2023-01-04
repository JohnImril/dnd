FROM node:15.8-alpine3.11 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN start
EXPOSE 3000