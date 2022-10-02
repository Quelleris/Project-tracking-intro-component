const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".hamburger-btn");

navToggle.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    navToggle.classList.remove("active");
  } else {
    navbar.classList.add("active");
    navToggle.classList.add("active");
  }
});
