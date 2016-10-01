// example of getting the values of form values and submitting forms
//tf  01/10/16

(function() {
  var form = document.getElementById('login');      //get form element

  addEvent(form, 'submit', function(e) {    //when user submits form
    e.preventDefault();
    var elements = this.elements;       //get all form elements
    var username = elements.username.value;   //select username entered
    var msg = 'Welcome ' + username;
    document.getElementById('main').textContent = msg; //write welcome message

  });
}());
