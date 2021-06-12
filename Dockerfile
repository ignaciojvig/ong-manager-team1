FROM node:14.17

WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 8080

CMD [ "nodemon", "index.js" ]