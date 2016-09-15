//example of styling a google map
//tf 15/09/16

var venueMap;
function init () {

  var pinLocation = new google.maps.LatLng(52.292582,-1.5883776);

  var mapOptions = {
    zoom: 15,
    center: pinLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },

    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },

    scaleControl: true,
    scaleControlOptons: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false,

    styles: [     //styles property is an array of objects
      {
        stylers: [      //stylers property holds array of objects
          { hue: "#00ff6f"},  //overall map colours
          { saturation: -50 } //overall map saturation
        ]
      }, {
        featureType: "road",    //road features
        elementType: "geometry", //their geometry (lines)
        stylers: [
          { lightness: 100 }, //lightness of roads
          { visibility: "simplified"} //level of road detail
        ]
      }, {
        featureType: "transit", //public transport features
        elementType: "geometry", //their geometry (lines)
        stylers: [
          { hue: "#ff6600"},      //colour of public transport
          { saturation: +80 }     //saturation of public transport
        ]
      }, {
        featureType: "transit", //public transport features
        elementType: "labels", //their labels
        stylers: [
          { hue: "#ff0066"}, //label colour
          { saturation: +80} //label saturation
        ]
      }, {
        featureType: "poi", //points of interest
        elementType: "labels",
        stylers: [
          { visibility : "off" } //turned off
        ]
      }, {
        featureType: "poi.park", //points of interest park
        elementType: "labels",
        stylers: [
          { visibility: "on" }
        ]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { hue: "#c4f4f4" }
        ]
      }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off"}
        ]
      }
    ]
};

var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

var startPosition = new google.maps.Marker({ //create a new marker for the map
  position: pinLocation, //set its position
  map: venueMap, //specify the map
  icon: "../images/moi.png" //path to image from HTML
});

}

function loadScript() {
  var script = document.createElement('script');
  script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=init";
  document.body.appendChild(script);
}

window.onload = loadScript;
