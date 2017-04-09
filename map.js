var map;
function initMap() {
  var cupertino = {lat: 37.323, lng: -122.032};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.323, lng: -122.032},
    zoom: 15
  });
  var marker1 = new google.maps.Marker({
   position: cupertino,
   map: map
  });
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Burglary</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Cupertino - some mans got raped bruh</b>,'
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

   marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
   // Create a <script> tag and set the USGS URL as the source.

  var script = document.createElement('script');
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);


// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}
}
