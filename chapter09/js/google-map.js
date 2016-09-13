//google map example
//tf 13/09/16

function init() {
  var mapOptions = {        //set up the map options
    center: new google.maps.LatLng(52.292582,-1.5883776),
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    zoom: 13
  };
  var venueMap;     //Map () drwas a map
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}
  function loadScript() {
    var script = document.createElement('script'); //create script element
    script.src = 'http://maps.googleapis.com/maps/api/js?senser=false&callback=init';
    document.body.appendChild(script); //add element to page
}

window.onload = loadScript; //on load call loadScript()
