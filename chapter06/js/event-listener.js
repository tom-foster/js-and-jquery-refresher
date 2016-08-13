//create an event listener the preferred standard for modern browsers
//13/11/16 TF

function checkUsername() { //declare function
  var elMsg = document.getElementById('feedback'); //get feedback element
  if (this.value.length < 5 ) { //if username too short
    elMsg.textContent = 'Username must be 5 characters or more'; //set msg
  } else { //otherwiser
    elMsg.textContent = ''; //clear msg
  }
}

var elUsername = document.getElementById('username'); //get username input
//When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);
