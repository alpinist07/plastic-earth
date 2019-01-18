var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new daum.maps.LatLng(37.56665, 126.97917), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
        mapTypeId : daum.maps.MapTypeId.ROADMAP // 지도종류
    };

// 지도를 생성한다
var map = new daum.maps.Map(mapContainer, mapOption);

// 지도 타입 변경 컨트롤을 생성한다
var mapTypeControl = new daum.maps.MapTypeControl();

// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

// 지도 중심 좌표 변화 이벤트를 등록한다
daum.maps.event.addListener(map, 'center_changed', function () {
  console.log('지도의 중심 좌표는 ' + map.getCenter().toString() +' 입니다.');
});

// 지도 확대 레벨 변화 이벤트를 등록한다
daum.maps.event.addListener(map, 'zoom_changed', function () {
  console.log('지도의 현재 확대레벨은 ' + map.getLevel() +'레벨 입니다.');
});

// 지도 영역 변화 이벤트를 등록한다
daum.maps.event.addListener(map, 'bounds_changed', function () {
  var mapBounds = map.getBounds(),
    message = '지도의 남서쪽, 북동쪽 영역좌표는 ' +
          mapBounds.toString() + '입니다.';

  console.log(message);
});

// 지도 시점 변화 완료 이벤트를 등록한다
daum.maps.event.addListener(map, 'idle', function () {
  var message = '지도의 중심좌표는 ' + map.getCenter().toString() + ' 이고,' +
          '확대 레벨은 ' + map.getLevel() + ' 레벨 입니다.';
  console.log(message);
});

// 지도 클릭 이벤트를 등록한다 (좌클릭 : click, 우클릭 : rightclick, 더블클릭 : dblclick)
daum.maps.event.addListener(map, 'click', function (mouseEvent) {
  console.log('지도에서 클릭한 위치의 좌표는 ' + mouseEvent.latLng.toString() + ' 입니다.');
});

// 지도 드래깅 이벤트를 등록한다 (드래그 시작 : dragstart, 드래그 종료 : dragend)
daum.maps.event.addListener(map, 'drag', function () {
  var message = '지도를 드래그 하고 있습니다. ' +
          '지도의 중심 좌표는 ' + map.getCenter().toString() +' 입니다.';
  console.log(message);
});

var ps = new daum.maps.services.Places();

// 키워드로 장소를 검색합니다
// ps.keywordSearch('이태원 맛집', placesSearchCB);

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === daum.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new daum.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new daum.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    }
}
