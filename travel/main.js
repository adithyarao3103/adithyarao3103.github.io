
function checkMobile(){
    return(parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--mobile')));
}

if(checkMobile()){
    zoom = 2;
} else {
    zoom = 4;
}

var map = L.map('map').setView([40.1431, 47.5769], zoom);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
}).addTo(map);

for(var i = 0; i < cities.length; i++) {
    var city = cities[i];
    L.marker([city.Lat, city.Long]).addTo(map)
    .bindPopup(city.Name + '<br>' + city.Description);
}