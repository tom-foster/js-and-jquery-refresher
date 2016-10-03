//final book example
//form validation
//tf 02/10/16

//Javascript validation of subscription form.
//A. Anonymous function triggered by submit event
//B. Fucntions called to perform generic checks by anon function in section A
//C. Functions called to perform generic checks by anon function in section A
//D. Functions to get/set/show/remove error messages
//E. Object to check type of data using RegEx called by validateTypes in section B

//Depdencies : jQuery, jQueryUI, birthday.js, styles.css

(function () {
  document.forms.register.noValidate = true; //Disable HTML5 validation - using JavaScript
  //-------------------------------------------------------------------
  // a) Anonymouse function triggered by the submit event
  // -----------------------------------------------------------------
  jQuery('form').on('submit', function(e) { //when form is submitted
    var elements = this.elements; //collection of form controls
    var valid = {};           //custom valid object
    var isValid;                    //isValid: checks form controls
    var isFormValid;                //isFormValid: checks entire form

    //perform generic checks (Calls functions outside the event handler)
    var i;
    for (i=0, l=elements.length; i < l; i++) {
      //next line calls validateRequired() validateTypes()
      isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
      if (!isValid) { //if it does not pass these two tests
        showErrorMessage(elements[i]); //show error messages
      } else {          //Otherwise
        removeErrorMessage(elements[i]); //remove error messages
      } //end if statement
      valid[elements[i].id] = isValid; //add element to the valid object
    } //end for loop

    //perform customer VALIDATION
    // bio (you could cache bio input in variable here)
    if (!validateBio()) { //call validateBio(), and if not valid
      showErrorMessage(document.getElementById('bio')); //show error message
      valid.bio = false;        //update valid object - this element is not valid
    } else {      //otherwise remove error message
      removeErrorMessage(document.getElementById('bio'));
    }

    //password (you could cache password input in variable here)
    if (!validatePassword()) { //call validatePassword(), and if not valid
      showErrorMessage(document.getElementById('password')); //show error message
      valid.password = false;   //update the valid object - this is not valid
    } else { //otherwise remove error message
      removeErrorMessage(document.getElementById('password'));
    }

    //parental consent (you could cache parent-consent in variable here)
    if (!validateParentsConsent()) { //call validateParentsConsent(), and if not valid
      showErrorMessage(document.getElementById('parents-consent')); //show error message
      valid.parentsConsent = false; //update the valid object - this is not valid
    } else {
      removeErrorMessage(document.getElementById('parents-consent'));
    }

    //DID IT PASS / CAN IT SUBMIT THE FORM?
    //loop through valid object, if there are errors set isFormValid to false
    for (var field in valid) { //check properties of the valid object
      if (!valid[field]) { //if it is not valid
        isFormValid = false; //set isFormValid variable to false
        break; //stop the for loop, an error was found
      } //Otherwise
      isFormValid = true; //the form is valid and ok to submit
    }

    //if the form did not validate, prevent it being submitted
    if (!isFormValid) { //if isFormValid is not true
      e.preventDefault(); //prevent the form from being submitted
    }

  }); //end of event handler anon function
  // END : anonymous function triggered by the submit button

  //--------------------------------------------------------------------
  // B) Functions for generic CHECKS
  //-----------------------------------------------------------------

  //Check if the field is required and if so does it have a value
  // Relies on isRequireD() and isEmpty() both shown below, and setErrorMessage - shown later.
  function validateRequired(el) {
    if (isRequired(el)) { //is this element required?
      var valid = !isEmpty(el); //is value not empty (true / false)?
      if (!valid) {
        setErrorMessage(el, 'Field is required'); //set the error message
      }
      return valid;     //return valid variable (true or false)?
    }
    return true;      //if not required, all is ok
  }

  //check if the element is required
  //it is called by validateRequireD()
  function isRequired(el) {
    return((typeof el.required === 'boolean') && el.required) ||
    (typeof el.required === 'string');
  }

  //check if the element is empty (or its value is the same as the placeholder text)
  //html5 browsers do allow users to enter the same text as placeholder, but in this case
  //users should not need to
  //it is called by validateRequired()
  function isEmpty(el) {
    return !el.value || el.value === el.placeholder;
  }

  //check if the value fits with the type ATTRIBUTE
  //relies on the validateType object (shown at end of iife)
  function validateTypes(el) {
    if (!el.value) return true; //if element has no value, return true
                                //otherwise get the value from .data()

    var type = jQuery(el).data('type') || el.getAttribute('type'); //or get the type of input
    if (typeof validateType[type] === 'function') { //is the type a method of validate object
      return validateType[type](el); //if yes, check if the value validates
    } else { //if not
      return true;      //return true because it cannot be tested
    }
  }

  //-----------------------------------------------------------------------
  //c) functions for custom VALIDATION
  //-----------------------------------------------------------------------

  //if user is under 13, check that parents have ticked the consent checkbox
  //dependency: birthday.js (otherwise check does not work)
  function validateParentsConsent() {
    var parentsConsent = document.getElementById('parents-consent');
    var consentContainer = document.getElementById('consent-container');
    var valid = true;         //variable: valid set to true
    if (consentContainer.className.indexOf('hide') === -1) { //if checkbox shown
      valid = parentsConsent.checked; //update valid: is it checked/not
      if (!valid) {
        setErrorMessage(parentsConsent, 'You need your parents\' consent');
      }
    }
    return valid;       //return whether valid or not
  }

  //check if the bio is less than or equal to 140 characters
  function validateBio() {
    var bio = document.getElementById('bio');
    var valid = bio.value.length <= 140;
    if (!valid) {
      setErrorMessage(bio, "Please make sure your bio does not exceed 140 characters");
    }
    return valid;
  }

  //check that the passwords both match and are 8 characters or more
  function validatePassword() {
    var password = document.getElementById('password');
    var valid = password.value.length >= 8;
    if (!valid) {
      setErrorMessage(password, 'Please make sure your password has at least 8 characters');
    }
    return valid;
  }

  //-------------------------------------------------------------------
  // D) Functions to set / get / show / remove error MESSAGES
  // ------------------------------------------------------------------

  function setErrorMessage(el, message) {
    jQuery(el).data('errorMessage', message); //store error message with element
  }

  function getErrorMessage(el) {
    return jQuery(el).data('errorMessage') || el.title; //get error message or title of element
  }

  function showErrorMessage(el) {
    var $el = jQuery(el);     //the element with the error
    var errorContainer = $el.siblings('.error.message'); //any siblings holding an error message

    if(!errorContainer.length) { //if no errors exist with the element
      //create a <span> element to hold the error and add it after the element with the error
      errorContainer = jQuery('<span class="error message"></span>').insertAfter($el);
    }
    errorContainer.text(getErrorMessage(el)); //add error message
  }

  function removeErrorMessage(el) {
    var errorContainer = jQuery(el).siblings('.error.message'); //get the sibling of this form control used to hold the error message
    errorContainer.remove(); //remove the element that contains the error message
  }

  //------------------------------------------------------------------------
  // E) OBJECT FOR CHECKING TYPES
  //--------------------------------------------------------------------------

  //checks whether data is valid, if not set error message
  //returns true if valid, falise if invalid
  var validateType = {
    email: function(el) { //create email() method
      //Rudimentary regular expression that checks for a single @ in the email
      var valid = /[^@]+@[^@]+/.test(el.value); //store the result of test in valid
      if (!valid) { //if the value of valid is not true
        setErrorMessage(el, 'Please enter a valid email'); //set error message
      }
      return valid; //return the valid variable
    },
    number: function(el) { //create number() method
      var valid = /^\d+$/.test(el.value); //store result of test in valid
      if (!valid) {
        setErrorMessage(el, 'Please enter a valid number');
      }
      return valid;
    },
    date: function(el) { //create date() method
      var valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.value);
      if (!valid) { //if the value of valid is not true
        setErrorMessage(el, 'Please enter a valid date'); //set error message
      }
      return valid; //return the valid variable
    }
  };

}()); //end of iife
