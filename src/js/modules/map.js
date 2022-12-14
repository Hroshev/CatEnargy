function initMap() {
    const windowInnerWidth = window.outerWidth;
    const options = {
        center: windowInnerWidth <= 995 ? { lat: 59.938882, lng: 30.32323 } : { lat: 59.939065, lng: 30.319335 },
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

window.addEventListener("resize", () => {
    setTimeout(initMap, 2000);
});