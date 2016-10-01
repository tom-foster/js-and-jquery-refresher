//01/10/16 the work around for the lack of this in older browsers
//helper function to add an event listener

function addEvent(el, event, callback) {
  if ('addEventListener' in el) { //if addEventListener works
    el.addEventListener(event,callback, false); //use it
  } else {
    el['e' + event + callback] = callback;
    el[event + callback] = function () {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event+callback]);
  }
}

//helper function to remove an event listener
function removeElement(el, event, callback) {
  if ('removeEventListener' in el) { //if removeEventListener works
    el.removeEventListener(event, callback, false); //use it
  } else {
    el.detachEvent('on' + event, el[event + callback]);   //create ie fallback
    el[event + callback] = null;
    el['e' + event + callback] = null;
  }
}
