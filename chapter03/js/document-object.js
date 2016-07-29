//showing the document object in action
//29/07/16 tf

var msg = '<p><strong>page title: </strong>' + document.title + '<br/>';
msg += '<strong>page address: </strong>' + document.URL + '<br/>';
msg += '<strong>last modified: </strong>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;
