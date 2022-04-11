FROM node:alpine
COPY . /app
WORKDIR /app
CMD mode app.js