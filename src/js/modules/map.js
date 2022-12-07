function initMap() {
    const centerPosition = { lat: 59.938882, lng: 30.32323 };
    const positionLeft = { lat: 59.939065, lng: 30.319335 };
    const options = {
        center: positionLeft,
        zoom: 17,
    }

    const myMap = new google.maps.Map(document.getElementById("map"), options);

    const marker = new google.maps.Marker({
        position: centerPosition,
        map: myMap,
        title: "Cat Energy",
        icon: "./img/footer__map-icon.png"
    })
}

window.initMap = initMap;




// AIzaSyBIFOmvzCHvFU1JE_PmVSSHsyBLEigRMqA