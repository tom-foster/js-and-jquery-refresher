//changing type of input - showing a password
//tf 01/10/16

(function () {
  var pwd = document.getElementById('pwd');     //get password input
  var check = document.getElementById('showPwd'); //get checkbox

  addEvent(check, 'change', function(e) {
    var target = e.target || e.srcElement;      //get that element
    try {                         //try the following code block
      if (target.checked) {     //if the checkbox is checked
        pwd.type = "text";        //set pwd type to text
      } else {
        pwd.type = 'password';      //set pwd type to password
      }
    } catch(error) { //if this causes an error
      alert('This browser cannot switch type');   //say that cannot switch type
    }
  });
}());
