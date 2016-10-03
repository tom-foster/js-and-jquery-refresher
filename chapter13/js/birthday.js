//checking the age of someone registering
//parental box if under 13
//tf 03/10/16

(function () {
  var $birth = jQuery('#birthday');     //dob input
  var $parentsConsent = jQuery('#parents-consent'); //consent checkbox
  var $consentContainer = jQuery('#consent-container'); //checkbox container

  //create the date pickled using jQuery UI
  $birth.prop('type', 'text').data('type', 'date').datepicker({
    dateFormat: 'yy-mm-dd'
  });

  $birth.on('blur change', checkDate);    //dob loses focus

  function checkDate() {    //declare checkdate()
    var dob = this.value.split('-');        //array from date
    //pass toggleParentsConsent() the date of birth as a date object
    toggleParentsConsent(new Date(dob[0], dob[1], - 1, dob[2]));
  }

  function toggleParentsConsent(date) { //declare function
    if (isNaN(date)) return;        //stop if date invalid
    var now = new Date();         //new date obj: today
    //if diff less than 13 years (ms * seconds * mins * hours * days * years)
    //does not account for leap years
    //if the user is less than 13 we show parents consent tick box
    if ((now - date) < (1000 * 60 * 60 * 24* 365 * 13)) {
      $consentContainer.removeClass('hide');    //remove hide class
      $parentsConsent.focus();      //give it focus
    } else {    //Otherwise
      $consentContainer.addClass('hide');   //add hide to class
      $parentsConsent.prop('checked', false); //set checked to false
    }
  }

}());
