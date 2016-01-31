var express = require('express'),
    app     = express(),
    jsonreq = require('request-json'),
    client  = jsonreq.createClient('http://rest:8080');
app.set('view engine', 'jade');
app.use('/public', express.static('public'));

app.get('/', function (req, res) {

    client.get('/bars', function(err, r, body) {
        res.render('index', { title: 'Lista barów', bars: body });
    });

});

app.get('/bar/:barId', function (req, res) {
    client.get('/bar/'+req.params.barId, function(err, r, body) {
        res.render('bar', { title: body.name, bar: body });
    });
});

app.listen(9090, function () {
    console.log('Example app listening on port 9090!');
});