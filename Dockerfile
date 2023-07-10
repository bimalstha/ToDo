FROM node:20-alpine3.17
WORKDIR /todo/src
COPY . /todo
RUN npm install -g nodemon
RUN yarn 
CMD yarn start