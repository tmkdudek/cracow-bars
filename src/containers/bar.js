module.exports = (function(  ){

    var Bar =  function( place ) {
        this.id = place.id;
        this.name = place.name;
        this.opening = place.opening;
        this.rating = place.rating;
        this.photos = place.photos;
        this.icon = place.icon;
        this.types = place.types;
        this.address = place.address;
        this.phone = place.phone;
        this.reviews = place.reviews;
    };
    Bar.prototype.isOpenNow = function(){
        if( typeof this.opening != 'undefined' &&
            this.opening.open_now != 'undefined'){
            return this.opening.open_now;
        }else{
            return false;
        }
    }


    return Bar;
})();