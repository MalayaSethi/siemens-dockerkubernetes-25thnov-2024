FROM node:alpine
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

ENV DEFAULT_PORT=3000
EXPOSE ${DEFAULT_PORT}

CMD [ "node","server.js" ]