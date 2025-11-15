#Base Image
FROM ubuntu



RUN apt-get update
RUN apt install -y curl
#install node.js
RUN curl -sL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install -y nodejs
 
#Copying the source code to docker image
COPY index.js /home/app/index.js
COPY package-lock.json /home/app/package-lock.json
COPY package.json /home/app/package.json


WORKDIR /home/app
RUN npm install
