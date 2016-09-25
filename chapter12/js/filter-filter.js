//static filtering of data
// using the filter() array method
//tf 25/09/16

jQuery(document).ready(function($) {

  //STORE EACH PERSON AS AN OBJECT IN AN ARRAY
  var people = [
    {                                 //each person is an object
      name: "Casey",                  //it holds name and rate
      rate: 60
    },
    {
      name: "Camille",
      rate: 80
    },
    {
      name: "Magical Trevor",
      rate: 75
    },
    {
      name: "Nigel",
      rate: 120
    }
  ];

  // THE FUNCTION ACTS AS A FILTER
  function priceRange(person) {       //declare priceRange()
    return (person.rate >= 65) && (person.rate <= 90);  //in range returns true
  }

  // FILTER THE PEOPLE ARRAY AND ADD MATCHES TO THE RESULTS ARRAY
  var results = [];               //array for matching people
  results = people.filter(priceRange); //filter() calls priceRange()

  //LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
  var $tableBody = $('<tbody></tbody');         //new table body
  for (var i = 0; i < results.length; i++) { //loop through matches
    var person = results[i];                //store current person
    var $row = $('<tr></tr>');              //create a row for them
    $row.append($('<td></td>').text(person.name)); //Add their name
    $row.append($('<td></td>').text(person.rate));  //add their rate
    $tableBody.append( $row );     //add row to new content
  }

  $('thead').after($tableBody);   //add tbody after thead
});
