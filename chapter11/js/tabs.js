//creating tab panels using jQuery
//example tf 19/09/16

jQuery(document).ready(function($) { //make sure document is ready
  $('.tab-list').each(function() { //find lists of tabs
    var $this = $(this);    //store this list
    var $tab = $this.find('li.active'); //get the active list item
    var $link = $tab.find('a');     //get link from active tab
    var $panel = $($link.attr('href')); //get active panel

    $this.on('click', '.tab-control', function(e) { //when click on a tab
      e.preventDefault(); //prevent link behaviour
      var $link = $(this), //store the current link
          id = this.hash; //get href of clicked tab
      console.log(id);      //CHECKING
      if (id && !$link.is('.active')) { //if not currently active
        $panel.removeClass('active'); //make panel inactive
        $tab.removeClass('active'); //make tab inactive

        $panel = $(id).addClass('active'); //make new panel active
        $tab = $link.parent().addClass('active'); //make new tab active
      }
    });
  });
});
