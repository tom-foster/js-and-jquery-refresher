//showing the use of breakpoints and the debugger keyword
//tf 18/09/16

jQuery(document).ready(function ($) {
  var $form, width, height, area;
  $form = $('#calculator');

  $('#calculator').on('submit', function(e) {
    e.preventDefault();
    console.log("Clicked submit");

    width = $('#width').val();
    height = $('#height').val();
    area = (width * height);

    if (area < 100) {
      debugger;       //A breakpoint is set if the developer tools are open
    }

    $form.append('<p>' + area + '</p>');
  });
});


//you could also demonstate the debugger if you click on the line and set a breakpoint
//in chrome, and add the condition for the line
//for line 13 you could set the condition to - height > 400;
//and when the condition is true it will stop on this line.
//when height is over 400 the breakpoint will be active.
