//loading xml with AJAX
//book example
//tf 01/09/16

var xhr = new XMLHttpRequest();     //CReate XMLHttpRequest object

xhr.onload = function() { //when response has loaded
  //The folloinwg conditional check will not work locally - only on a server
  // if (xhr.status === 200) { //if server was ok

//THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT html
  var response = xhr.responseXML;         //get XML from the server
  var events = response.getElementsByTagName('event'); //find <event> elements

  for (var i = 0; i < events.length; i++) {     //loop through them
    var container, image, location, city, newline;    //declare variables
    container = document.createElement('div');      //create <div> container
    container.className = 'event';                //add class attribute

    image = document.createElement('img');      //add map image
    image.setAttribute('src', getNodeValue(events[i], 'map'));
    image.setAttribute('alt', getNodeValue(events[i], 'location'));
    container.appendChild(image);

    location = document.createElement('p');         //add location data
    city = document.createElement('strong');
    newline = document.createElement('br');
    city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
    location.appendChild(newline);
    location.insertBefore(city, newline);
    location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
    container.appendChild(location);


    document.getElementById('content').appendChild(container);
  }
//}
  function getNodeValue(obj, tag) {     //gets content from xml
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }

//THE FINAL PART IS THE SAME AS THE HTML EXAMPLE BUT IT REQUESTS AN XML FILE
};

xhr.open('GET', '../data/data.xml', true);      //prepare the request
xhr.send(null);                               //send the request
