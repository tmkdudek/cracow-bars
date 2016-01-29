describe('BarBrowser',function(){

    var BarBrowser        = require('../src/lib/BarsBrowser.js'),
        Promise           = require("node-promise").Promise,
        PlacesSource      = require('../src/lib/PlacesSource.js'),
        promise           = new Promise(),
        placesSource,
        barBrowser;

    beforeEach(function(){
        placesSource = new PlacesSource();
        barBrowser   = new BarBrowser({
            'places' : placesSource
        })
    })

    it("Browser should throw exception when initalized without params", function(done) {
        expect(function(){
             new BarBrowser();
        }).toThrow();
        done();
    });

    it('getBars should return array of bar containers',function(){


        spyOn(placesSource, 'getPlaces').and.returnValue(promise);



    })





});