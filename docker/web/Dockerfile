FROM node:5.5.0-onbuild
# replace this with your application's default port
EXPOSE 8080


RUN npm install nodemon -g
RUN npm install jasmine-node -g
RUN mkdir -p /usr/src/app

ADD . /usr/src/app


RUN npm install
WORKDIR /usr/src/app/websrc

CMD [ "nodemon","app.js" ]
