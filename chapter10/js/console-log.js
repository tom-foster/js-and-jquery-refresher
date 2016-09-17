//demonstrating logging data to the console
//tf 17/09/16

console.log("Let's begin");     //indicate script is running
var $form, width, height, area;
$form = $('#calculator');

jQuery(document).ready(function ($) {
  $('form input[type="text"]').on('blur', function () { //when input loses focus
    console.log('You entered ', this.value); //write value to console
  });

  $('#calculator').on('submit', function(e) { //when the user clicks submits
    e.preventDefault(); //prevent the form submitting
    console.log('Clicked submit');    //indicate the button was clicked

    width = $('#width').val();
    console.log('Width ' + width);      //write width to console

    height = $('#height').val();
    console.log('Height ' + height); //writes height to console-log

    area = width * height;
    console.log("Area was found to be " + area);      //writes area to console

    $form.append('<p>' + area + '</p>');
  });
});
