//grouping messages in the console
//tf 17/09/16

jQuery(document).ready(function ($) {
  var $form = $('#calculator');

  $form.on('submit', function(e) { //runs when submit is pressed
    e.preventDefault();
    console.log('clicked submit'); //show the button was clicked

    var width, height, area;
    width = $('#width').val();
    height = $('#height').val();
    area = width * height;
//Note: how console.group and console.groupEnd() work together
    console.group('Area calculations'); //start group
      console.info('Width ', width);    //write out the width
      console.info('Height ', height);  //write out the height
      console.log('The area = ' + area); //write out the area
    console.groupEnd(); //end the group.

    $form.append('<p>' + area + '</p>');
  });
});
