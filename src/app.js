var Places      = require('../lib/Places.js'),
    Manager     = require('../lib/Manager.js'),
    cache       = require('../lib/Cache.js'),
    restify     = require('restify'),
    formatter   = require('../lib/Formatter.js');

formatter.setFormat('json');

var places      = new Places();
    manager     = new Manager({
        'cache'         : cache,
        'output'        : formatter,
        'datasource'    : places
    });
