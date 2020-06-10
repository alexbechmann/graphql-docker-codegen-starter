FROM node:10

WORKDIR /usr/src/app

# COPY ./.npmrc .
COPY ./package*.json ./
COPY ./tsconfig.json ./

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "dev" ]
