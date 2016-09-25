//static filtering of data
//using the forEach javascript array method
//tf 25/09/16

jQuery(document).ready(function($) {
  //STORE EACH PERSON AS AN OBJECTI N AN ARRAY
  var people = [
    {                             //each person is an OBJECT
      name: "Casey",              //it holds name and rate
      rate: 60
    },
    {
      name: "Camille",
      rate: 80
    },
    {
      name: "Gordon",
      rate: 75
    },
    {
      name: "Nigel",
      rate: 120
    }
  ];

  //CHECKS EACH PERSON AND ADDS THOSE IN RANGE TO ARRAY
  var results = [];               //array for peopel in range
  people.forEach(function(person) { //fpr each person
    if (person.rate >= 65 && person.rate <= 90) {   //is rate in range
      results.push(person);         //if yes add to array
    }
  });

  //LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
  var $tableBody = $('<tbody></tbody>');    //new table body
  for (var i = 0; i < results.length; i++) { //loop through matches
    var person = results[i];                //store current person
    var $row = $('<tr></tr>');              //create a row for them
    $row.append($('<td></td>').text(person.name));  //add their name
    $row.append($('<td></td>').text(person.rate));  //add their rate
    $tableBody.append( $row );            //add row to new content
  }

  $('thead').after($tableBody);       //add tbody after thead
});
