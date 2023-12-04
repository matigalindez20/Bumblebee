const button = document.querySelector(".menu-hamburger");
const nav = document.querySelector(".nav-links");

button.addEventListener("click", () => {
  nav.classList.toggle("activo");
});
