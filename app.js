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
