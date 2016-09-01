//using jsonp with AJAX - book example
//tf 01/09/16

function showEvents(data) {           //callback when JSON loads
  var newContent = '';                //variable to hold HTML

  // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
  for (var i = 0; i < data.events.length; i++) { //loop through data
    newContent += '<div class="event">';
    newContent += '<img src="' + data.events[i].map + '"';
    newContent += 'alt="' + data.events[i].location + '" />';
    newContent += '<p><strong>' + data.events[i].location + '</strong><br />';
    newContent += data.events[i].date + '</p>';
    newContent += '</div>';
  }

  //Update the page with the new content
  document.getElementById('content').innerHTML = newContent;
}
