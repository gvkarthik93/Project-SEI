function funct(data){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {

    if(xhttp.readyState == 4 && xhttp.status == 200){
      var jsonElem = JSON.parse(xhttp.responseText);
      console.log("Response received from server: "+xhttp.responseText);
      var list = document.getElementById('searchList');
      var input = document.getElementById('search_bar');

      while(list.firstChild){
        list.removeChild(list.firstChild);
      }

      var suggestions = [];
      for (var key in jsonElem) {
        var keyValue = jsonElem[key];
        suggestions.push(keyValue);
      }
      console.log(suggestions);

      suggestions.forEach(function(item) {
        //create a new <option> element.
        var option = document.createElement('option');
        //Set the value using the item in the JSON array.
        option.value = item;
        option.text = item;
        //Add the <option> element to the <datalist>.
        list.appendChild(option);
      });
    }

  };

  xhttp.open("POST", "/searchSuggestions", true);
  xhttp.send(data);

}

function test_button(){
  var data = document.search_form.search_bar.value;
  funct(data);
}