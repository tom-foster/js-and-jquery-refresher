//showing bad practice event attributes in html
//you shouldn't use these
//tf 12/08/16

function checkUsername() { //declare function
  var elMsg = document.getElementById('feedback'); //get feedback element
  var elUsername = document.getElementById('username'); //get username input
  if (elUsername.value.length < 5) { //if username too short
    elMsg.textContent = 'Username must be 5 characters or more'; //set message
  } else { //otherwise
    elMsg.textContent = ''; //clear message
  }
}
