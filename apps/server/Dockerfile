FROM node:18

WORKDIR /server
COPY ./db/init.sql /docker-entrypoint-initdb.d/
COPY package.json .
RUN npm install

COPY . .
CMD npm start