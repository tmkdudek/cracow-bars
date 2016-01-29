# cracow-bars

## How to start Rest Api
    docker build -t cracow-bars .
    docker run -it --rm  -p 8080:8080 -v `pwd`/src:/usr/src/app/src -v `pwd`/tests:/usr/src/app/tests --name cracow-bars-running cracow-bars
## To run test
    docker run -it --rm  -p 8080:8080 -v `pwd`/src:/usr/src/app/src -v `pwd`/tests:/usr/src/app/tests --name cracow-bars-running cracow-bars npm test

## Api
   GET http://localhost:8080/bars
   GET http://localhost:8080/bar/ChIJy5YtdGpbFkcRj_mYfiaWIpI
   HEAD http://localhost:8080/bar/isOpen/ChIJy5YtdGpbFkcRj_mYfiaWIpI

