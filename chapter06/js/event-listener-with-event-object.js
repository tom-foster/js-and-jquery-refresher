//using event listeners with the event object
//15/08/16 tf

function checkLength(e, minLength) {  //declare function
  var el, elMsg; //declare variables
  if (!e) { //if event object doesn't exist
        e = window.event; //use ie fallback
  }
  el = e.target || e.srcElement; //get target of event
  elMsg = el.nextSibling; //get its next sibling
  console.log(e.target);
  if (el.value.length < minLength) { //if length is too short set message
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else { //otherwise
    elMsg.innerHTML = ''; //clear message
  }
}

var elUsername = document.getElementById('username'); //get username input
if (elUsername.addEventListener) { //if event listener is supported
  elUsername.addEventListener('blur', function(e) { //on blur event
    checkLength(e, 5); //call checkLength ()
  }, false); //capture in bubble phase
} else { //otherwise
  elUsername.attachEvent('onblur', function(e) { //ie fallback onblur
    checkLength(e, 5); //call checkLength()
  });
}
