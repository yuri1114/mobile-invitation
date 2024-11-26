//스크롤바 내리면 area-2 애니메이션 시작.
window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    document.querySelector(".area-2").style.transform = "translateY(50px)";
    document.querySelector(".area-2").style.transition = "all 1.5s";
  } else if (window.scrollY < 100) {
    document.querySelector(".area-2").style.transform = "translateY(0)";
  }
});

// window.onload = function () {
//   // 지도 초기화
//   const mapContainer = document.getElementById("map"); // 지도를 표시할 div
//   const mapOption = {
//     center: new kakao.maps.LatLng(37.5355, 127.0944), // 강변 웨딩스퀘어의 좌표
//     level: 3, // 지도의 확대 레벨
//   };

//   // 지도 생성
//   const map = new kakao.maps.Map(mapContainer, mapOption);

//   // 마커 추가
//   const markerPosition = new kakao.maps.LatLng(37.5355, 127.0944); // 마커의 위치
//   const marker = new kakao.maps.Marker({
//     position: markerPosition,
//   });
//   marker.setMap(map);

//   // 인포윈도우 추가 (강변 웨딩스퀘어 정보)
//   const infowindow = new kakao.maps.InfoWindow({
//     content:
//       '<div style="padding:5px; font-size:14px;">강변 웨딩스퀘어<br>3층 루시드홀</div>',
//   });
//   infowindow.open(map, marker);
// };

//계좌번호
document.getElementById("chang").addEventListener("click", function (e) {
  if (e.target == document.querySelector(".title-top")) {
    console.log(e.target);
    document.querySelector(".chang-detail").classList.toggle("show-detail");
  }
});

document.getElementById("yuri").addEventListener("click", function (e) {
  if (e.target == document.querySelector(".title-yuri")) {
    console.log(e.target);
    document.querySelector(".yuri-detail").classList.toggle("show-detail");
  }
});

// 복사버튼
document.querySelectorAll(".row button").forEach((button) => {
  button.addEventListener("click", function () {
    // 현재 버튼과 동일한 row 안의 p.bank를 찾기
    const bankTextElement = this.closest(".row").querySelector(".bank");

    // span을 제외한 텍스트 추출
    const bankText = bankTextElement.childNodes[0].textContent.trim();

    // 클립보드에 복사
    navigator.clipboard
      .writeText(bankText)
      .then(() => {
        alert(`복사되었습니다: ${bankText}`);
      })
      .catch((err) => {
        console.error("복사에 실패했습니다:", err);
      });

    this.classList.add("copied");
    setTimeout(() => this.classList.remove("copied"), 2000);
  });
});
