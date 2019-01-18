// 사진 업로드
var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
};

// 검색창에서 검색값 가져와 지도 호출하기
var searchForm = document.querySelector('.search-form');
var inputLocation = document.querySelector('.input-location');
searchForm.addEventListener('submit', callMap);
function callMap(e) {
  e.preventDefault();
  ps.keywordSearch(searchLoc.value, placesSearchCB);
}
