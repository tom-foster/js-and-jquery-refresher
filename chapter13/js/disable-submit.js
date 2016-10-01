//disabling submit button example
//tf 01/10/16

(function() {
  var form = document.getElementById('newPwd'); //the form
  var password = document.getElementById('pwd'); //password input
  var submit = document.getElementById('submit'); //submit button

  var submitted = false;        //has form been submitted?
  submit.disabled = true;       //disable submit button
  submit.className = 'disabled';      //style submit button
  console.log(submit.className);

  // on input: check whether or not to enable the submit button
  addEvent(password, 'input', function(e) { //on input of password
    var target = e.target || e.srcElement;    //target of event
    submit.disabled = submitted || !target.value; //set disabled property
    // if form has been submitted or pwd has no value set CSS to disabled
    submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
  });

  // on submit: disabled the form so it cannot be submitted again
  addEvent(form, 'submit', function (e){  //on submit
    if (submit.disabled || submitted) { //if disabled or sent
      e.preventDefault(); //stop form submitting
      return;     //stop processing funciton
    }     //otherwise continue...
    submit.disabled = true; //disabled submit button
    submitted = true;     //update submitted var
    submit.className = 'disabled';      //update style

    //demo purposes only: what would have been sent and show submit is disabled
    e.preventDefault();         //stop from submitting
    alert('Password is ' + password.value); //show the text
  });
}());
