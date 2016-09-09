//example of the jquery ui form
//initialise js file for the jquery ui form
//tf 09/09/16

jQuery(document).ready(function ($){
  $('#arrival').datepicker();       //Turn input to jqui datepicker

  var $amount = $('#amount');       //cache the price input
  var $range = $('#price-range');   //cache the <div> for the price range
  $('#price-range').slider({        //turn price-range input into a slider
    range: true,                    //if it is a range it gets two handles
    min: 0,                         //Minimum value
    max: 400,                       //Maximum value
    value: [175, 300],              //Values to use when the page loads
    slide: function(event, ui) {    //When slider used update amount element
      $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
    }
  });
  $amount                           //Set initial values of amount element
    .val('$' + $range.slider('values', 0)   //A $ sign then lower range
    + ' - $' + $range.slider('values', 1)); //A $ sign then high range
});
