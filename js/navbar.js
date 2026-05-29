const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
