//the jQuery POST(ing) of AJAX
//tf 03/09/16

jQuery('#register').on('submit', function(e) { //when form is submitted
  e.preventDefault(); //prevent it being sent
  var details = $('#register').serialize(); //serialise form data
  $.post('../register.php', details, function(data) { //use $.post to send it
    $('#register').html(data); //where to display result
  });
});
