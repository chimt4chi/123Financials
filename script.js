const mobMenuBtn = document.getElementById("mobMenuBtn");
const navLinks = document.querySelector(".show-link");

mobMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
