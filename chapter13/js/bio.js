//for the bio
//tf 03/10/16

(function() {
  var bio = jQuery('#bio');
  var bioCounter = jQuery('#bio-count');

  //show the counter when the field is focussed and update the class
  bio.on('focus', updateCounter);
  bio.on('keyup', updateCounter);

  //when we leave the textarea we hide the counter unless that are too many characters
  bio.on('blur', function() {
    if (bioCounter.text() >= 0) {
      bioCounter.addClass('hide');
    }
  });

  function updateCounter(e) {
    var count = 140 - bio.val().length;
    var status = '';
    if (count < 0) {
      status = 'error';
    } else if (count <= 15) {
      status = 'warn';
    } else {
      status = 'good';
    }

    //remove previous classes
    bioCounter.removeClass('error warn good hide');
    //add new class
    bioCounter.addClass(status);
    bioCounter.text(count);
  }
}());
