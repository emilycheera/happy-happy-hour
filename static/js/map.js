const SanFrancisco = 'San Francisco, California';
let coordinates = [[-122.46066, 37.78287],[-122.40205,37.78164],[-122.43744, 37.7724],[-122.47765, 37.76379]];
let markers = [];
let restaurants;

$.get('/restaurant-object', (res) => {
    let restaurants = res;

    for (const rest of Object.values(restaurants)){
        marker = new tt.Marker().setLngLat(rest.coordinate).addTo(map);
        var popup = new tt.Popup({offset: popupOffsets}).setHTML(`<b>${rest.name}</b><br>${rest.address}, ${rest.city}, ${rest.state}, ${rest.zipcode}<br><b>Offers:</b> ${rest.offer}`);
        marker.setPopup(popup).togglePopup();
}
var popupOffsets = {
  top: [0, 0],
  bottom: [0, -50],
  'bottom-right': [0, -70],
  'bottom-left': [0, -70],
  left: [25, -35],
  right: [-25, -35]
}
});


let map = tt.map({
    key: 'tz1ptALiZKB6nDN1PZBfjxiGi39e1i8z',
    container: 'map',
    style: 'tomtom://vector/1/basic-main',
    center: [-122.46066, 37.78287],
    zoom: 12
});
map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());


$('#search').on('submit', (evt) => {
  evt.preventDefault();

  const formInputs = {
    "location": $("#location").val(),
  };

  $.get('/map', formInputs, (res) => {
    console.log(res);

    // Use res.lat and res.lon to update center on map.
    map.setCenter(
        {lat: res.lat, lng: res.lon}
        );
    });
});