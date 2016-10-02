//text counter for a biography
//tf 02/10/16

(function () {
  var bio = document.getElementById('bio'), //<textarea> element
  bioCount = document.getElementById('bio-count'); //character count el

  addEvent(bio, 'focus', updateCounter);      //call updateCounter() on focus
  addEvent(bio, 'input', updateCounter);  //call updateCounter() on input

  addEvent(bio, 'blur', function() { //on leaving the element
    if (bio.value.length <= 140) { //if bio is not too long
      bioCount.className = 'hide';    //hide the counter
    }
  });

  function updateCounter(e) {
    var target = e.target || e.srcElement;    //get the target of the event
    var count = 140 - target.value.length; //how many characters are left
    if (count < 0) { //if less than 0 chars free
      bioCount.className = 'error';   //add class of error
    } else if (count <= 15) { //if less than 15 chars free
      bioCount.className = 'warn'; //add class of warn
    } else {
      bioCount.className = 'good'; //add class of good
    }
    var charMsg = '<strong>' + count + '</strong>' + 'characters'; //message to display
    bioCount.innerHTML = charMsg; //update the counter element
  }
}());
