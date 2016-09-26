//example of dynamic filtering filtering an ARRAY
//this uses the add on jquery.nouislider.js
//tf 26/09/16

(function() {
  //STORE EACH PERSON AS AN OBJECT IN AN ARRAY
  var people = [
    {
      name: 'Casey',                    //each person is an object
      rate: 60                            //it holds name and rate
    },
    {
      name: 'Camille',
      rate: 80
    },
    {
      name: 'Gordon',
      rate: 75
    },
    {
      name: 'Nigel',
      rate: 120
    }
  ];

  var rows = [],              //rows array
  $min = jQuery('#value-min'),  //minimum text input
  $max = jQuery('#value-max'), //maximum text input
  $table = $('#rates');     //the table that shows results

  function makeRows() { //create table rows and the array
    people.forEach(function(person) {   //for each person object in people
      var $row = jQuery('<tr></tr>'); //create a row for them
      $row.append( jQuery('<td></td>').text(person.name) ); //add their name
      $row.append( jQuery('<td></td>').text(person.rate) ); //add their rate
      rows.push({ //create rows arrray which links people objects to table rows
        person: person,     //reference to the person object
        $element: $row    //reference to row as jQuery selection

      });
    });
  }

  function appendRows() { //add rows to the table
    var $tbody = jQuery('<tbody></tbody>');   //creates <tbody> element
    rows.forEach(function(row) { //for each object in the rows array
      $tbody.append(row.$element);      //add the html for the row
    });
    $table.append($tbody);      //add the rows to the table
  }

  function update(min,max) { //update the table content
    rows.forEach(function(row) { //for each row in the rows array
      if (row.person.rate >= min && row.person.rate <= max) { //if in range
        row.$element.show();    //show the row
      } else {                      //otherwise
        row.$element.hide();    //hide the row
      }
    });
  }

  function init() { //tasks when script first runs
    jQuery('#slider').noUiSlider({ //set up the slide control
      range: [0,150], start: [65, 90], handles: 2, margin: 20, connect: true,
      serialization: {to: [$min, $max], resolution: 1}
    }).change(function() { update($min.val(), $max.val()); });
    makeRows();   //create table rows and rows array
    appendRows();     //add the rows to the table
    update($min.val(), $max.val());     //update table to show matches
  }

  jQuery(init); //call init() when DOM is ready

}());
