//using modernizr to show html 5 local storage API
//uses same origin policy
//example
//tf 06/09/16

//using modernizr could use window.localStorage just sayin
if (Modernizr.localstorage) {
  var txtUsername = document.getElementById('username');    //get form elements
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username');   //elements populated
  txtAnswer.value = localStorage.getItem('answer');   //by localStorage data

  txtUsername.addEventListener('input', function () { //data saved on keyup
    localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function() { //data saved on keyup
    localStorage.setItem('answer', txtAnswer.value);
  }, false);
}
