#Base Image
FROM node:lts-alpine3.22 
#this is apline version in which nodejs is already installed

WORKDIR /home/app


#Copying the source code to docker image

# COPY package-lock.json package-lock.json
# COPY package.json package.json
COPY package*.json .
RUN npm install 



COPY index.js index.js

COPY Dockerfile Dockerfile
#above all remain cache and below them again run


EXPOSE 8000

#if someone this this file this command run automatically 
CMD ["npm", "start"]
#image created
