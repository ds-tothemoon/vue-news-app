<template>
  <div id="app">
    <div id="map"></div>
  </div>
</template>

<script>
export default {
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=caabb53ef849563be0ee55f23b427a91&libraries=services,clusterer,drawing';
            document.head.appendChild(script);
        }
    },
    methods: {
        initMap() {
            var container = document.getElementById('map');
            var options = {
              center: new kakao.maps.LatLng(33.450701, 126.570667),
              level: 3
            };

            var map = new kakao.maps.Map(container, options);
            // var marker = new kakao.maps.Marker({ 
            //     // 지도 중심좌표에 마커를 생성합니다 
            //     position: map.getCenter() 
            // }); 
            // // 지도에 마커를 표시합니다
            // marker.setMap(map);
            // map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
            
            // 장소 검색 객체를 생성합니다
            var ps = new kakao.maps.services.Places(); 

            // 키워드로 장소를 검색합니다
            ps.keywordSearch('이태원 맛집', placesSearchCB); 

            function placesSearchCB (data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {

                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                    // LatLngBounds 객체에 좌표를 추가합니다
                    var bounds = new kakao.maps.LatLngBounds();

                    for (var i=0; i<data.length; i++) {
                        displayMarker(data[i]);    
                        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                    }       

                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                    map.setBounds(bounds);
                } 
            
            }
            // 지도에 마커를 표시하는 함수입니다
            function displayMarker(place) {
                
                // 마커를 생성하고 지도에 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(place.y, place.x) 
                });

                // 마커에 클릭이벤트를 등록합니다
                kakao.maps.event.addListener(marker, 'click', function() {
                    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                    container.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                    container.open(map, marker);
                });
            }
        },
    }
}
</script>

<style>
#map {
    width: 400px;
    height: 300px;
}
</style>