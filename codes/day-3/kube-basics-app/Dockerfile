# FROM debian/ubuntu
FROM node:alpine

WORKDIR /restfulapp

COPY . .

ENV DEFAULT_PORT=3000
# documentation
# EXPOSE 3000
EXPOSE ${DEFAULT_PORT}

CMD [ "node", "app.js" ]
# node .\app.js