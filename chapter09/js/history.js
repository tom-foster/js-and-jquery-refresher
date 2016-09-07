//working with the history object in HTML5 history API
//this will require a local server
//example tf 07/09/16


jQuery(document).ready(function($) { //DOM has loaded
  function loadContent(url) {       //load new content into page
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) { //click handler
    e.preventDefault(); //Stop link loading new page
    var href = this.href; //get href attribute of link
    var $this = $(this);  //store link in jquery object
    $('a').removeClass('current');        //remove current from links
    $this.addClass('current');          //update current link
    loadContent(href);          //call function: loads content
    history.pushState('', $this.text, href); //update history
  });

  window.onpopstate = function() {
    var path = location.pathname;
    loadContent(path);
    var page = path.substring(location.pathname.lastIndexOf('/')+1);
    $('a').removeClass('current');
    $('[href="' + page + '"]').addClass('current');
  };
});
