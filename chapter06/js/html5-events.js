//using html5 events
//tf 20/08/16

function setup() {
  var textInput;
  textInput = document.getElementById('message');
  textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function(e) {
  var message = 'You have changes that have not been saved.';
  (e || window.event).returnValue = message;
  return message;
});
