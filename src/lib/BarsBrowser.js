var Bar = require('../containers/bar.js');
module.exports = function( config ){

    if( !config || !config.places) {
        throw new Error('Should pass places api to constructor');
    }

    var places   = config.places;

    return {
        getBars : function( callback ) {
            places.getPlaces()
                .then( function( rawPlaces ) {

                    var bars = [];

                    rawPlaces.forEach( function( place ) {
                        bars.push(new Bar({
                            id : place.place_id,
                            name : place.name,
                            opening : place.opening_hours,
                            rating : place.rating,
                            photos : place.photos
                        }));
                    });

                    callback ( null, bars );

                });
        },
        getBar : function( barId , callback ) {

            places.getPlaceDetail(barId)
                .then(function(place){

                    if(place){
                        var bar = new Bar({
                            id : place.place_id,
                            name : place.name,
                            opening : place.opening_hours,
                            rating : place.rating,
                            photos : place.photos
                        });
                    }
                    callback ( null, bar || false );
                });
        },
        isOpenNow : function( barId , callback) {
            this.getBar( barId, function(err, barDetail ){
                callback( err, barDetail.isOpenNow());
            })
        }
    }

}