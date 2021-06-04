// HAMBURGER MENU

const toggle = document.querySelector(".nav__toggle--js");
const navMenu = document.querySelector(".nav__menu--js");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("toggleX");
  navMenu.classList.toggle("show-menu");
});
