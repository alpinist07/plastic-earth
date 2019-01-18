var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
};

Var searchForm = document.querySelector('.search-form');
var inputLocation = document.querySelector('.input-location');
searchForm.addEventListener('submit', callMap);
function callMap(e) {
  e.preventDefault();
  ps.keywordSearch(searchLoc.value, placesSearchCB);
}
