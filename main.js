//스크롤바 내리면 area-2 애니메이션 시작.
window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    document.querySelector(".area-2").style.transform = "translateY(50px)";
    document.querySelector(".area-2").style.transition = "all 1.5s";
  } else if (window.scrollY < 100) {
    document.querySelector(".area-2").style.transform = "translateY(0)";
  }
});

window.onload = function () {
  // 지도 초기화
  const mapContainer = document.getElementById("map"); // 지도를 표시할 div
  const mapOption = {
    center: new kakao.maps.LatLng(37.53573445785757, 127.0956967726977), // 강변 웨딩스퀘어의 좌표
    level: 3, // 지도의 확대 레벨
  };

  // 지도 생성
  const map = new kakao.maps.Map(mapContainer, mapOption);

  // 마커 추가
  const markerPosition = new kakao.maps.LatLng(
    37.53573445785757,
    127.0956967726977
  ); // 마커의 위치
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);

  // 인포윈도우 추가 (강변 웨딩스퀘어 정보)
  const infowindow = new kakao.maps.InfoWindow({
    content:
      '<div style="padding:5px; font-size:14px;">강변 웨딩스퀘어<br>3층 루시드홀</div>',
  });
  infowindow.open(map, marker);
};

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

function calculateDday() {
  // 목표 날짜 설정 (KST 기준)
  const targetDate = new Date("2025-01-04T00:00:00+09:00");

  // 현재 시간을 UTC로 가져온 뒤 KST로 변환
  const nowUTC = new Date();
  const offsetKST = 9 * 60 * 60 * 1000; // UTC+9
  const nowKST = new Date(nowUTC.getTime() + offsetKST);

  // 오늘 자정 기준 현재 날짜 (KST)
  const todayMidnightKST = new Date(
    nowKST.getFullYear(),
    nowKST.getMonth(),
    nowKST.getDate(),
    0,
    0,
    0 // 시간을 자정으로 고정
  );

  // 목표 날짜와 오늘 자정 기준 차이 계산
  const timeDifference = targetDate - todayMidnightKST;

  // 밀리초를 일 단위로 변환
  const daysLeft = timeDifference / (1000 * 60 * 60 * 24);

  // 결과 반영 (남은 날짜 반올림 처리)
  const dDayElement = document.getElementById("d-day-counter");
  if (daysLeft > 0) {
    dDayElement.textContent = `D-${Math.ceil(daysLeft) + 1}`; // 자정을 기준으로 계산
  } else if (daysLeft === 0) {
    dDayElement.textContent = "D-Day!";
  } else {
    dDayElement.textContent = `D+${Math.abs(Math.ceil(daysLeft))}`;
  }
}

// 페이지 로드 시 디데이 계산
calculateDday();

// 1초마다 디데이 업데이트
setInterval(calculateDday, 1000);
