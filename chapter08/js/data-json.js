//loading JSON with AJAX
//tf 01/09/16

var xhr = new XMLHttpRequest();       //Create XMLHttpRequest object

xhr.onload = function () { //When readystate changes
  if (xhr.status === 200) {     //if server status was okay
    responseObject = JSON.parse(xhr.responseText);
  }

  // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
  var newContent = '';
  for (var i = 0; i < responseObject.events.length; i++) { //loop through object
    newContent += '<div class="event">';
    newContent += '<img src="' + responseObject.events[i].map + '" ';
    newContent += 'alt = "' + responseObject.events[i].location + '" />';
    newContent += '<p><strong>' + responseObject.events[i].location + '</strong><br/>';
    newContent += responseObject.events[i].date + '</p>';
    newContent += '</div>';


  //Update the page with the new content
  document.getElementById('content').innerHTML = newContent;
  }
};

xhr.open('GET', '../data/data.json', true);       //Prepare the request
xhr.send(null);                               //send the request
