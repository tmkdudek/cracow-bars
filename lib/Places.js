var GooglePlacesPromises = require('googleplaces-promises'),
    Promise              = require("node-promise").Promise;

module.exports = function(){

    var placesPromises  = new GooglePlacesPromises('AIzaSyCBgw9jXN5M1wsUx5vZaa_pgwUARhPTwU4'),
        searchParams    = {
                            location: [50.0619142,19.9359793],
                            types: "bar",
                            radius : 2000
                        };


    return {
        getPlaces : function(){
            var promise     = new Promise();
            var placeSearch = placesPromises.placeSearch(searchParams);
            placeSearch
                .then(function(response){
                    promise.resolve(response.results);
                })
                .fail(function(error){
                    promise.reject(error);
                })
            return promise;
        },
        getPlaceDetail : function() {

        }

    }
};

