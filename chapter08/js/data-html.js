//loading html with AJAX
//tf 01/09/16

var xhr = new XMLHttpRequest();     //Create XMLHttpRequest object

xhr.onload = function() { //When response has loaded
  //The following conditional check will not work locally - only on a server
  if (xhr.status === 200) {
    document.getElementById('content').innerHTML = xhr.responseText; //update
  }
};

xhr.open('GET', '../data/data.html', true); //Prepare the request
xhr.send(null);                             //send the request
