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

function updateDdayCounter() {
  // 현재 한국 시간으로 날짜 계산
  const nowUTC = new Date(); // UTC 기준 현재 시간
  const offsetKST = 9 * 60 * 60 * 1000; // KST는 UTC+9이므로 9시간 추가
  const todayKST = new Date(nowUTC.getTime() + offsetKST); // 한국 표준시로 변환

  // 한국 시간 기준 자정 설정 (시간, 분, 초를 0으로 설정)
  const todayMidnightKST = new Date(
    todayKST.getFullYear(),
    todayKST.getMonth(),
    todayKST.getDate()
  );

  const targetDate = new Date("2025-01-04T00:00:00+09:00"); // 목표 날짜 (KST 기준)

  // 현재 날짜와 목표 날짜 사이의 시간 차이 계산 (밀리초)
  const timeDifference = targetDate - todayMidnightKST;

  // 밀리초를 일수로 변환
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // 남은 일수를 HTML에 업데이트
  const dDayElement = document.getElementById("d-day-counter");
  if (daysLeft > 0) {
    dDayElement.textContent = `${daysLeft}일 남았습니다.`;
  } else if (daysLeft === 0) {
    dDayElement.textContent = "오늘입니다!";
  } else {
    const daysPassed = Math.abs(daysLeft); // 경과된 일수
    dDayElement.textContent = `결혼 한지 ${daysPassed}일 입니다!`;
  }
}

// 페이지 로드 시 카운터 업데이트
updateDdayCounter();

// 매일 자정에 정확히 업데이트하기 위해 1초 간격으로 확인
setInterval(updateDdayCounter, 1000);
