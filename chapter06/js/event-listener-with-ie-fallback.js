//fall back for using event listeners in ie8
//tf 13/08/16

var elUsername = document.getElementById('username'); //get username input
var elMsg = document.getElementById('feedback'); //get feedback element

function checkUsername(minLength) { //declare function
  if (elUsername.value.length < minLength) { //if username is too short
    //Set message
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else { //otherwise
    elMsg.innerHTML = '';
  }
}

if (elUsername.addEventListener) { //if event listener supported
  elUsername.addEventListener('blur', function() { //when username loses focus
    checkUsername(7); //call checkUsername()
  }, false); //Capture during bubble phase
} else { //otherwise
  elUsername.attachEvent('onblur', function() {
    checkUsername(8); //call checkUsername()
  });
}
