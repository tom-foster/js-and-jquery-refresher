//determining position via the event object
//20/08/16 TF

var sx = document.getElementById('sx');   //Element to hold screenX
var sy = document.getElementById('sy');   //Element to hold screenY
var px = document.getElementById('px');   //Element to hold pageX
var py = document.getElementById('py');   //Element to hold pageY
var cx = document.getElementById('cx');   //Element to hold clientX
var cy = document.getElementById('cy');   //Element to hold clientY

function showPosition(e) {  //Declare function
  sx.value = e.screenX;     //Update element with screenX
  sy.value = e.screenY;     //Update element with screenY
  px.value = e.pageX;       //Update element with pageX
  py.value = e.pageY;       //Update element with pageY
  cx.value = e.clientX;     //Update element with clientX
  cy.value = e.clientY;     //Update element with clientY
}

var el = document.getElementById('body'); //Get body element
el.addEventListener('mousemove', showPosition, false); //Move updates position
