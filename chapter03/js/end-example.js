// end example for chapter 03
//tf 30/07/16

/*This script is placed inside an immediately invoked function expression
which helps protect the scope of variables */

(function() {
  //Part one: create hotel object and write out the offer details

  //Create a hotel object using object literal syntax
  var hotel = {
    name: 'Park',
    roomRate: 240, //Amount in ppounds
    discount: 15, //Percentage discount
    offerPrice: function () {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  }

  //Write out the hotel name, standard rate, and the special rate

  var hotelName, roomRate, specialRate; //declare variables

  hotelName = document.getElementById('hotelName');
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name; //Write hotel name
  roomRate.textContent = '£' + hotel.roomRate.toFixed(2); //Write room rate
  specialRate.textContent = '£' + hotel.offerPrice(); //Write offer price

  //PART TWO: Calculate and write out the expiry details for the offer
  var expiryMessage; //Message displayed to users
  var today; //Today's date
  var elEnds; // the element that shows the message about the offer ending

  function offerExpires(today) {
    //Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthName;
    //Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    //Create arrays to hold the names of days/ months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
  //Collect the parts of the date to show on the page
  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();
  //Creae the message
  expiryMessage = 'Offer expires next ';
  expiryMessage += day + ' <br/>(' +date + ' ' + month + ' ' + year + ')';
  return expiryMessage;
  }

today = new Date(); // Put today's date in variable
elEnds = document.getElementById('offerEnds'); //Get the offerEnds element
elEnds.innerHTML = offerExpires(today); //Add the expiry message

//Finish the immediately invoked function expression
}());
