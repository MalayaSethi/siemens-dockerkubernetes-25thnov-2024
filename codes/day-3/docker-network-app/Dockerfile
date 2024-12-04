FROM node:alpine
WORKDIR /app

COPY package.json ./
RUN npm install

COPY models/ ./models
COPY app.js ./


ENV DEFAULT_PORT=3000
EXPOSE ${DEFAULT_PORT}

CMD [ "node","app.js" ]
