FROM node:16.10.0

WORKDIR /app

COPY package*.json .

RUN yarn

COPY . . 

EXPOSE 3000

CMD [ "yarn", "start"]