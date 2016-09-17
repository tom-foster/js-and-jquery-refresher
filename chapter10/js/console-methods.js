//showing the different types of messages you write to the console
//info, warn, error
//tf 17/09/16

jQuery(document).ready(function ($) {
  console.info('Let\'s begin'); // info() script is running

  var $form, width, height, area;
  $form = $('#calculator');

  $('form input[type="text"]').on('blur', function () { //on blur event
    console.warn('You entered ', this.value); //Warn() what was entered
  });

  $('#calculator').on('submit', function (e) { //when form is submitted
    e.preventDefault();

    width = $('#width').val();
    height = $('#height').val();

    area = width * height;
    console.error("The area is correct " + area);        //error() show area - although not an error

    $form.append('<p class="result">' + area + '</p>');
  });
});
