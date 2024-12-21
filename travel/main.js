
function checkMobile(){
    return(parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--mobile')));
}

if(checkMobile()){
    zoom = 2;
} else {
    zoom = 4;
}

function style(feature) {
    return {
        fillColor: '#f00',
        weight: 0,
        opacity: 0.1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.3
    };
}

var map = L.map('map').setView([40.1431, 47.5769], zoom);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
}).addTo(map);

L.geoJson(countriesData, {style:style}).addTo(map);



for(var i = 0; i < cities.length; i++) {
    var city = cities[i];
    marker = L.marker([city.Lat, city.Long], {opacity:0.9, riseOnHover:true}).addTo(map)
    .bindPopup('<b>' + city.Name + '</b><br>' + ( city.Year? city.Year + '<br>' : '' ) + city.Description);
        marker.on('mouseover', function(e) {
        this.openPopup();
      });
      marker.on('mouseout', function(e) {
        this.closePopup();
      });
}
