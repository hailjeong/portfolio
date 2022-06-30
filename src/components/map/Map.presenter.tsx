import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Map1Page() {
  // const [lat, setLat] = useState(0);
  // const [lng, setLng] = useState(0);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "//dapi.kakao.com/v2/maps/sdk.js?appkey=60f41832d3a252ba8f706fab1b304c1d&autoload=false ";
  //   document.head.appendChild(script);

  //   script.onload = () => {
  //     window.kakao.maps.load(function () {
  //       const container = document.getElementById("map");
  //       const options = {
  //         // 지도를 생성할 때 필요한 기본 옵션
  //         center: new window.kakao.maps.LatLng(37.5559, 126.9112),
  //         level: 3, // 지도의 레벨 (확대 축소)
  //       };
  //       const map = new window.kakao.maps.Map(container, options);

  //       const markerPosition = new window.kakao.maps.LatLng(37.5559, 126.9112);
  //       // 마커를 생성합니다
  //       const marker = new window.kakao.maps.Marker({
  //         position: markerPosition,
  //       });

  //       // 마커가 지도 위에 표시되도록 설정합니다
  //       marker.setMap(map);

  //       // 지도에 클릭 이벤트를 등록합니다
  //       // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
  //       window.kakao.maps.event.addListener(
  //         map,
  //         "click",
  //         function (mouseEvent) {
  //           // 클릭한 위도, 경도 정보를 가져옵니다
  //           const latlng = mouseEvent.latLng;

  //           // 마커 위치를 클릭한 위치로 옮깁니다
  //           marker.setPosition(latlng);

  //           setLat(latlng.La);
  //           setLng(latlng.Ma);
  //         }
  //       );
  //     });
  //   };
  // }, []);

  return (
    <div>
      <div id="map" style={{ width: 400, height: 300 }}></div>
      {/* <div id="clickLatlng"></div> */}
    </div>
  );
}
