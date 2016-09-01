//loading html into a page with jquery
//multiple page example using jq-load.html jq-load2.html jq-load3.html
//book example page 390-391
//tf 01/09/16

jQuery('nav a').on('click', function(e) {     //user clicks nav link
  e.preventDefault();                       //stop loading new link
  var url = this.href;                      //get value of href

  $('nav a.current').removeClass('current');  //clear current indicator
  $(this).addClass('current');              //New current indicator

  $('container').remove();                //remove old content
  $('#content').load(url + ' #content').hide().fadeIn('slow'); //new content
});
