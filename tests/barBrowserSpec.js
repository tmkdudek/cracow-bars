describe('BarBrowser',function(){

    var BarBrowser        = require('../src/lib/BarsBrowser.js'),
        Promise           = require("node-promise").Promise,
        PlacesSource      = require('../src/lib/PlacesSource.js'),
        promise,
        placesSource,
        barBrowser;

    beforeEach(function(){
        placesSource = new PlacesSource();
        promise     = new Promise();
        barBrowser   = new BarBrowser({
            'places' : placesSource
        });
    });

    it("Browser should throw exception when initalized without params", function() {
        expect(function(){
             new BarBrowser();
        }).toThrow();
    });

    it('getBars should return array of bar containers',function(done){

        spyOn(placesSource,'getPlaces').andReturn(promise);


        barBrowser.getBars(function( err, bars ) {

            expect(bars[0].id).toBe('fakei12adasd');
            expect(bars[0].name).toBe('Example bar');
            expect(bars[0].opening).toEqual( { open_now: false, weekday_text: [] });
            expect(bars[0].rating).toBe( 4.2 );
            expect(bars[0].isOpenNow()).toBe(false);

            expect(bars[1].id).toBe('faasdasdkeid');
            expect(bars[1].name).toBe('Example bar 2');
            expect(bars[1].opening).toEqual( { open_now: false, weekday_text: [] });
            expect(bars[1].rating).toBe( 2.2 );
            expect(bars[1].isOpenNow()).toBe(false);

            expect(bars[2].id).toBe('fak12deid');
            expect(bars[2].name).toBe('Example bar 3');
            expect(bars[2].opening).toEqual( { open_now: true, weekday_text: [] });
            expect(bars[2].rating).toBe( 4.5 );
            expect(bars[2].isOpenNow()).toBe(true);

            done();

        });

        promise.resolve(require('./fakeBarsListResult.js').results);
    });

    it('getBar should return detail of bar if exist',function(done) {

        spyOn(placesSource, 'getPlaceDetail').andReturn(promise);

        barBrowser.getBar('fakei12adasd',function( err, barDetail ) {

            expect(barDetail.id).toBe('fakei12adasd');
            expect(barDetail.name).toBe('Example bar');
            expect(barDetail.opening).toEqual( { open_now: false, weekday_text: [] });
            expect(barDetail.rating).toBe( 4.2 );
            expect(barDetail.isOpenNow()).toBe(false);
            done();
        });
        promise.resolve(require('./fakeBarDetail.js').result);


    });

    it('getBar should return false if bar doesnot exist',function(done) {

        spyOn(placesSource, 'getPlaceDetail').andReturn(promise);

        barBrowser.getBar('fakei12adasd',function( err, barDetail ) {

            expect(barDetail).toBeFalsy();
            done();
        });
        promise.resolve(undefined);

    });





});