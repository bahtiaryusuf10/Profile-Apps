var getToggleBtn = document.querySelector(".toggle-btn");
var getNav = document.querySelector(".nav-link");

getToggleBtn.addEventListener("click", function () {
  this.classList.toggle("click");
  getNav.classList.toggle("open");
});

var typedText = new Typed(".input", {
  strings: ["Backend Developer", "Android Developer", "Cloud Engineer"],
  typeSpeed: 70,
  backSpeed: 55,
  loop: true,
});
