//event listeners with parameters
//tf 13/11/16

var elUsername = document.getElementById('username'); //get username input
var elMsg = document.getElementById('feedback'); //get feedback element

function checkUsername(minLength) { //Declare function
  if (elUsername.value.length < minLength) { //if username too short
    //set the error message
    elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
  } else { //otherwise
    elMsg.innerHTML = ''; //clear message
  }
}

elUsername.addEventListener('blur', function () { //When it loses focus
  checkUsername(10); //Pass arguments here
}, false);
