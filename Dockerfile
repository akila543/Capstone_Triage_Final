FROM node:latest

RUN mkdir -p /srv/app

WORKDIR /srv/app

COPY package.json /srv/app

RUN npm install --production

COPY . .

RUN npm run build

RUN npm run test

WORKDIR "./server"

CMD ["node","server.js"]



