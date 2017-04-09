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

   marker1.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
