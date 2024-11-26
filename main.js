//스와이퍼 모달 등장
document.getElementById("album").addEventListener("click", function () {
  console.log("??");
  document.querySelector(".modal").classList.add("show-modal");

  document.body.classList.add("modal-open");
});

document.getElementById("close-btn").addEventListener("click", function () {
  console.log("모달 닫기");
  document.querySelector(".modal").classList.remove("show-modal");
  document.body.classList.remove("modal-open");
});

//스크롤바 내리면 area-2 애니메이션 시작.
window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    console.log(window.scrollY);
    document.querySelector(".area-2").style.transform = "translateY(50px)";
    document.querySelector(".area-2").style.transition = "all 1.5s";
  } else if (window.scrollY < 100) {
    document.querySelector(".area-2").style.transform = "translateY(0)";
  }
});

//이미지
const photoData = [
  { image: "img/img02.jpg" },
  { image: "img/img03.jpg" },
  { image: "img/img04.jpg" },
  { image: "img/img05.jpg" },
  { image: "img/img06.jpg" },
  { image: "img/img07.jpg" },
  { image: "img/img08.jpg" },
  { image: "img/img09.jpg" },
  { image: "img/img10.jpg" },
  { image: "img/img02.jpg" },
  { image: "img/img02.jpg" },
];

const wrapper = document.querySelector(".swiper-wrapper");

photoData.forEach((photo) => {
  wrapper.innerHTML += `
        <div class="swiper-slide">
            <img src="${photo.image}" alt="" />
        </div>
    `;
});
