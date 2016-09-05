//showing off the geolocation API
//working with location example
//tf 05/09/16

var elMap = document.getElementById('loc');           //HTML element
var msg = 'Sorry, we were unable to get your location.';    //no location msg

if (Modernizr.geolocation) {      //is geo supported
  navigator.geolocation.getCurrentPosition(success, fail);    //ask for location
  elMap.textContent('Checking location...');    //say checking...
} else {  //not supported
  elMap.textContent = msg;      //add manual entry
}

function success(position) { //got location
  msg = '<h3>Longitude:<br/>';      //Create message
  msg += position.coords.longitude + '</h3>';   //add longitude
  msg += '<h3>Latitude:<br/>';    //create message
  msg += position.coords.latitude + '</h3>';    //add latitude
  elMap.innerHTML = msg;      //show location
}

function fail(msg) {        //not got location
  elMap.textContent = msg;      //show error message
  console.log(msg.code);    //log the error
}
