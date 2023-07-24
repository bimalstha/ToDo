#single stage build
# base image for the docker image
# FROM node:20-alpine3.17

# # sets the working directory inside the container to /todo/src 
# WORKDIR /todo

# # Copy only the package.json and yarn.lock files first to leverage Docker layer caching
# COPY package.json yarn.lock ./

# # installs all the dependencies for the application
# RUN yarn 

# #copy the rest of the application
# COPY . .

# # installs nodemon globally inside the container using npm 
# RUN npm install -g nodemon

# # starts the application inside the docker container
# CMD ["yarn","start"] 






####################################

# lets start multi stage build

FROM node:20-alpine3.17 AS build
WORKDIR /todo
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM node:20-alpine3.17
WORKDIR /todo
COPY --from=build /todo/dist ./
COPY --from=build /todo/package.json ./
RUN npm install --omit=dev
CMD ["node", "./app.js"]