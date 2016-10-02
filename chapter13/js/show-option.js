//radio buttons, showing additional buttons based on selection
//tf 02/10/16

(function() {
  var form, options, other, otherText, hide; //declare variables
  form = document.getElementById('how-heard');  //get the form
  options = form.elements.heard;       //get the radio buttons
  other = document.getElementById('other');   //other radio button
  otherText = document.getElementById('other-text');  //other text input
  otherText.className = 'hide';     //hide other text input

  for (var i = [0]; i < options.length; i++) { //loop through radios
    addEvent(options[i], 'click', radioChanged); //add event listener
  }

  function radioChanged() {
    hide = other.checked ? '' : 'hide';   //is other checked?
    otherText.className = hide;       //text input visibility
    if (hide) {
      otherText.value = '';       //empty its contents
    }
  }
}());
