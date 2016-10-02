//populating select boxes based off another select box

(function () {
  var type = document.getElementById('equipmentType'); //type select box
  var model = document.getElementById('model');   //model select box
  var cameras = { //object stores cameras
    bolex: 'Bolex Paillard H8',
    yashica: 'Yashica 30',
    pathescape: 'Pathescape Super-8 Relax',
    canon: 'Canon 512'
  };
  var projectors = { //store projectors
    kodak: 'Kodak Instamatic M55',
    bolex: 'Bolex Sound 715',
    eumig: 'Eumig Mark S',
    sankyo: 'Sankyo Dualux'
  };

  // When the user changes the type select box
  addEvent(type, 'change', function() {
    if (this.value === 'choose') { //no selection made
      model.innerHTML = '<option>Please choose a type first</option>';
      return;
    }
    var models = getModels(this.value); //select the right object

    // Loop through the options in the object to create options
    var options = '<option>Please choose a model</option>';
    var key;
    for (key in models) { //loop through models
      options += '<option value="' + key + '">' + models[key] + '</option>';
    } //if an option could contain a quote, key should be escaped
    model.innerHTML = options; //update select box
  });

  function getModels(equipmentType) {
    if (equipmentType === 'cameras') { //if type is cameras
      return cameras;   //return cameras object
    } else if (equipmentType === 'projectors') { //if type is projectors
      return projectors; //return projectors object
    }
  }
}());
