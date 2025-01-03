
function checkMobile(){
    return(parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--mobile')));
}

if(checkMobile()){
    zoom = 2;
    size = 20;
} else {
    zoom = 4;
    size = 34;
}

function style(feature) {
    return {
        fillColor: '#00bfff99',
        weight: 0,
        opacity: 0.1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.3
    };
}



const customIcon = L.icon({
    iconUrl: 'map-marker.svg',
    iconSize: [size, size],     // size of the icon
    iconAnchor: [size/2, size/2],   // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0]   // point from which the popup should open relative to the iconAnchor
});

var map = L.map('map').setView([33.05, 59.6], zoom);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
maxZoom: 19,
}).addTo(map);

L.geoJson(countriesData, {style:style}).addTo(map);



for(var i = 0; i < cities.length; i++) {
    var city = cities[i];
    marker = L.marker([city.Lat, city.Long], {icon: customIcon, opacity:0.9, riseOnHover:true}).addTo(map)
    .bindPopup('<b>' + city.Name + '</b><br>' + ( city.Year? city.Year + '<br>' : '' ) + city.Description);
}
