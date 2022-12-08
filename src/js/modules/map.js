(function (){

function Position() {
    if(window.outerWidth > 992){
        this.lat = 59.939065;
        this.lng = 30.319335;
    }else {
        this.lat = 59.938882;
        this.lng = 30.32323;
    }
  }
  const coordinate = new Position;

/* Initializing the card */
function initMap() {
    const options = {
        center: coordinate,
        zoom: 17,
    }

    const myMap = new google.maps.Map(document.getElementById("map"), options);
    const marker = new google.maps.Marker({
        position: { lat: 59.938882, lng: 30.32323 },
        map: myMap,
        title: "Cat Energy",
        icon: "./img/footer__map-icon.png"
    })
}

window.initMap = initMap;

// window.addEventListener("resize", function(){
//     window.initMap = initMap;
// });

})();