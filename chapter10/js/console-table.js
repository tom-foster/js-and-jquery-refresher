//showing the use of the console table commands in javascript
//tf 17/09/16
//console.table() is not support by edge /ie

var contacts = {     //store contact info in an object literal
  "London": {
    "Tel": "+44 (0)000 004 0123",
    "Country": "UK"
  },
  "Sydney": {
    "Tel": "+61 (0)2 1111 0000",
    "Country": "Australia"
  },
  "New York": {
    "Tel": "+1 (0)1 555 5555",
    "Country": "USA"
  }
};

console.table(contacts);      //write data to console using table()

var city, contactDetails; //declare variables for page
contactDetails = ''; //hold details written to page

jQuery(document).ready(function ($) {
  $.each(contacts, function (city, contacts) { //loop through data to
    contactDetails += city + ': ' + contacts.Tel + '<br />';
  });

  $('h2').after('<p>' + contactDetails + '</p>'); //add data to the page
});
