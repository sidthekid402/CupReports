<<<<<<< HEAD
var database = firebase.database();

var map;
function initMap() {
  var cupertino = {lat: 37.323, lng: -122.032};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.323, lng: -122.032},
    zoom: 15
  });
  

   var data = firebase.database().ref()
   data.on("child_added",  function(snapshot){
     var getData = snapshot.val()
     console.log(getData.inc)
     console.log(getData.loc)//place holder, conv to coords later (GEOENCODING)

     var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + getData.loc + '</h1>'+
            '<div id="bodyContent">'+
            '<p><b>' + getData.inc + '</b>-' + getData.desc +'</p>'+
            '</div>'+
            '</div>';
     //geoencode to get lat/long
     var geocoder = new google.maps.Geocoder();
      var address = getData.loc;
      geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
          var marker2 = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
          var infowindow2 = new google.maps.InfoWindow({
            content: contentString
          });
          marker2.addListener('click',function(){
           infowindow2.open(map, marker2)
         });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
  

     

   })
    

function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location, 
        map: map
    });
}
}
 
=======

  var script = document.createElement('script');
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);
>>>>>>> origin/master
