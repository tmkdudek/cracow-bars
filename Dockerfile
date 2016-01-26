FROM node:5.5.0-onbuild
# replace this with your application's default port
RUN mkdir -p /usr/src/app
RUN npm install nodemon -g
COPY . /usr/src/app
WORKDIR /usr/src/app



EXPOSE 8080
CMD [ "npm", "start" ]