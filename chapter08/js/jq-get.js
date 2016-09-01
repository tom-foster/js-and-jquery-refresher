//the php file doesn't quite work with this, i'm running on simple python server
//shows jquery's ajax shorthand methods
//tf 01/09/16

//This first variable creates the t-shirt options on page 393
var vote = '<div id="vote"><div class="third"><a href="http://example.org?tshirt=gray"><img src="../images/t-gray.png" id="gray" alt="gray" /></a></div><div class="third"><a href="http://example.org?tshirt=yellow" id="yellow"><img src="../images/t-yellow.png" id="yellow" alt="yellow" /></a></div><div class="third"><a href="http://example.org?tshirt=green"><img src="../images/t-green.png" id="green" alt="green" /></a></div></div>';
jQuery('#selector').append(vote);

//This adds ratings to the side bar
jQuery('#selector a').on('click', function(e) {
  e.preventDefault();
  var queryString = 'vote=' + $(e.target).attr('id');
  $.get('../votes.php', queryString, function(data) {
    $('#selector').html(data);
  });
});
