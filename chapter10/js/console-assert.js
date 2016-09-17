//writing on a condition - testing
//tf 17/09/16

jQuery(document).ready(function ($) {
  var $form, width, height, area;
  $form = $('#calculator');

  $('form input[type="text"]').on('blur', function() {
    //the message only shows if users has entered number less than 10
    console.assert(this.value > 10, 'User has entered less than 10')    ;
  });

  $('#calculator').on('submit', function(e) {
    e.preventDefault();
    console.log('clicked submit');

    width = $('#width').val();
    height = $('#height').val();
    area = width * height;
    //the message only shows if user has not entered a number
    console.assert($.isNumeric(area), 'User enter non-numerica value');

    $form.append('<p>' + area + '</p>');
  });
});
