//focus and blur events
//tf 19/08/16

function checkUsername() { //declare function
  var username = el.value;        //store username in variable
  if (username.length < 5) {      //if username < 5 characters
    elMsg.className = 'warning'; //change class on message
    elMsg.textContent = 'Not long enough, yet MATE'; //update message
  } else {                      //otherwise
    elMsg.textContent = '';     //clear the message
  }
}

function tipUsername() { //declare function
  elMsg.className = 'tip';    //change class for message
  elMsg.textContent = 'Username must be at least 5 characters'; //Add message
}

var el = document.getElementById('username'); //Username input
var elMsg = document.getElementById('feedback'); //element to hold message

//When the username input gains/loses focus call functions above:
el.addEventListener('focus', tipUsername, false); //focus call tipUsername()
el.addEventListener('blur', checkUsername, false); //blur call checkUsername()
