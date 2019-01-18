var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new daum.maps.LatLng(36.90611, 127.03842), // 지도의 중심좌표
        level: 11, // 지도의 확대 레벨
        mapTypeId : daum.maps.MapTypeId.ROADMAP // 지도종류
    };

// 지도를 생성한다
var map = new daum.maps.Map(mapContainer, mapOption);

// 지도 타입 변경 컨트롤을 생성한다
var mapTypeControl = new daum.maps.MapTypeControl();

// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

// 지도에 확대 축소 컨트롤을 생성한다
var zoomControl = new daum.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

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
// 마커 이미지의 주소
var markerImageUrl = 'http://t1.daumcdn.net/localimg/localimages/07/2012/img/marker_p.png',
    markerImageSize = new daum.maps.Size(40, 42), // 마커 이미지의 크기
    markerImageOptions = {
        offset : new daum.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
    };

// 마커 이미지를 생성한다
var markerImage = new daum.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);

// 지도에 마커를 생성하고 표시한다
var marker = new daum.maps.Marker({
    position: new daum.maps.LatLng(37.12345, 128.53068), // 마커의 좌표
    draggable : true, // 마커를 드래그 가능하도록 설정한다
    image : markerImage, // 마커의 이미지
    map: map // 마커를 표시할 지도 객체
});

// 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
daum.maps.event.addListener(marker, 'click', function() {
    alert('마커를 클릭했습니다!');
});

// 마커에 mouseover 이벤트를 등록한다
daum.maps.event.addListener(marker, 'mouseover', function() {
    console.log('마커에 mouseover 이벤트가 발생했습니다!');
});

// 마커에 mouseout 이벤트 등록
daum.maps.event.addListener(marker, 'mouseout', function() {
    console.log('마커에 mouseout 이벤트가 발생했습니다!');
});

// 마커에 dragstart 이벤트 등록
daum.maps.event.addListener(marker, 'dragstart', function() {
    console.log('마커에 dragstart 이벤트가 발생했습니다!');
});

// 마커에 dragend 이벤트 등록
daum.maps.event.addListener(marker, 'dragend', function() {
    console.log('마커에 dragend 이벤트가 발생했습니다!');
});
