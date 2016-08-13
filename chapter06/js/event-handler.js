//event handlers in javascript
//these can only have one function attached to each event handler

//tf 13/08/16

function checkUsername() { //Declare function
  var elMessage = document.getElementById('feedback'); //Get feedback element
  if (this.value.length < 5) { //if username is too short
    elMessage.textContent = 'Username must be 5 characters or more'; //set message
  } else { //otherwise
    elMessage.textContent = ''; //Clear message
  }
}

var elUsername = document.getElementById('username'); //get username input

elUsername.onblur = checkUsername; //When it loses focus call checkuserName()
