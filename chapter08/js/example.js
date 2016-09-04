//end of chapter 08 example
//showing ajax and json in use, pulling data from both a JSON file and html
//tf 04/09/16

jQuery(document).ready(function($) {      //when the DOM is ready

  var times;                              //declare global variable
  $.ajax({                              //Setup request
    beforeSend: function(xhr) {     //Before requesting data
      if (xhr.overrideMimeType) {   //if supported
        xhr.overrideMimeType("application/json"); //set MIME to prevent errors
      }
    }
  });

  //FUNCTION THAT COLLECTS DATA FROM THE JSON file
  function loadTimetable() {      //declare the function
    $.getJSON('../data/example.json')   //try to collect json data
    .done( function(data) {       //if successful
      times = data;           //store it in a variable
    }).fail( function() {     //if a problem: show message
      $('#event').html('Sorry! We could not load the timetable at the moment');
    });
  }

  loadTimetable();      //call the function

  // CLICK ON THE EVENT TO LOAD A timetable
  $('#content').on('click', "#event a", function(e) { //user clicks on place

    e.preventDefault();                   //prevent loading page
    var loc = this.id.toUpperCase();      //get value of id attribute

    var newContent = '';      //to build up timetable
    for (var i = 0; i < times[loc].length; i++) {   //loop through sessions
      newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
      newContent += '<a href="descriptions.html#';
      newContent += times[loc][i].title.replace(/ /g, '-') + '">';
      newContent += times[loc][i].title + '</a></li>';
    }

    $('#sessions').html('<ul>' + newContent + '</ul>');   //Display time

    $('#event a.current').removeClass('current');   //update selected links
    $(this).addClass('current');

    $('#details').text('');               //clear third column
  });

  // CLICK ON A SESSIONS TO LOAD THE DESCRIPTION
  $('#content').on('click', '#sessions li a', function(e) { //click on session
    e.preventDefault();         //prevent Loading
    var fragment = this.href;   //title is in href

    fragment = fragment.replace('#', ' #');  //add space after #
    $('#details').load(fragment);    //to load info

    $('#sessions a.current').removeClass('current'); //update selected
    $(this).addClass('current');
  });

  // CLICK ON PRIMARY NAVIGATION
  $('nav a').on('click', function(e) { //click on nav
    e.preventDefault();         //prevent Loading
    var url = this.href;        //get URL To load

    $('nav a.current').removeClass('current');    //update nav
    $(this).addClass('current');

    $('#container').remove();               //remove old
    $('#content').load(url + ' #container').hide().fadeIn('slow'); //add new
  });

});
