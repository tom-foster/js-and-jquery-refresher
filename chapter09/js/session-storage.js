// showing mordernizr feature detection with sessionstorage api
//example tf 06/09/16


//you can use window.sessionStorage

if (Modernizr.sessionstorage) {
  var txtUsername = document.getElementById('username'), //get form elements
      txtAnswer = document.getElementById('answer');

      txtUsername.value = sessionStorage.getItem('username'); //elements populated
      txtAnswer.value = sessionStorage.getItem('answer'); //by sessionStorage

      txtUsername.addEventListener('input', function () { //save data on keyup
        sessionStorage.setItem('username', txtUsername.value);
      }, false);

      txtAnswer.addEventListener('input', function () { //save data on keyup
        sessionStorage.setItem('answer', txtAnswer.value);
      }, false);
}
