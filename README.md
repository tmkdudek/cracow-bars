# cracow-bars

# Jak uruchomic api
    docker build -t cracow-bars .
    docker run -it --rm  -p 8080:8080 -v `pwd`/src:/usr/src/app/src -v `pwd`/tests:/usr/src/app/tests --name cracow-bars-running cracow-bars
# Jak uruchomić testy
    docker run -it --rm  -p 8080:8080 -v `pwd`/src:/usr/src/app/src -v `pwd`/tests:/usr/src/app/tests --name cracow-bars-running cracow-bars npm test