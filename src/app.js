
var PlacesSource      = require('./lib/PlacesSource'),
    BarsBrowser       = require('./lib/BarsBrowser'),
    restify           = require('restify');


var placesSource      = new PlacesSource();
    manager          = new BarsBrowser({
        'places'     : placesSource
    });



var server = restify.createServer();
server.get('/bars', function(req, res, next){
    res.charSet('utf8');
    manager.getBars(
                    function(err, bars){
                        res.send(bars);
                        next();
                    }
    );
});

server.get('/bar/:barId', function(req, res, next){
    res.charSet('utf8');
    manager.getBar(req.params.barId , function( err, barDetail ){
        res.charSet('utf8');
        if(barDetail){
            res.send(barDetail);
        }
        else{
            res.send(404, new Error( 'Bar not found'));
        }
        next();
    });
});

server.head('/bar/isOpen/:barId',function(req, res, next){
    try{
        manager.isOpenNow( req.params.barId, function(err, isOpen){
            res.setHeader('isOpen',isOpen);
            res.end();
        } );
    }catch(e){
        res.send(404, new Error( 'Bar not found'));
    }

})

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
