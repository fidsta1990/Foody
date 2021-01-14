//Sidebar

const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close__btn");

menu.addEventListener("click", () => {
  sidebar.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});

//NAVBAR

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add("current");
  } else {
    header.classList.remove("current");
  }
});

//IMAGE CAROUSEL

const carouselImages = document.querySelectorAll(".carousel__slide .slide");
const carouselSlide = document.querySelector(".carousel__slide");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// const size = carouselImages[0].offsetWidth;

const slideWidth = carouselImages[0].offsetWidth;

let idx = 0;

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > carouselImages.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = carouselImages.length - 1;
  }

  carouselSlide.style.transform = `translateX(${-idx * slideWidth}px)`;
}

prevBtn.addEventListener("click", () => {
  idx--;
  changeImage();
});

nextBtn.addEventListener("click", () => {
  idx++;
  changeImage();
});
