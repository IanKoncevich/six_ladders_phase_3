
const menuBtn = document.querySelector("#toggle-mobile-burger"); // Burger menu
const menucont = document.querySelector('.main-menu-container'); // Menu container
const target = document.body; // Body

const openMenu = (e) => {
  if (target.classList.contains("mob-activated")) {
    target.classList.remove("mob-activated")
    menucont.classList.remove("search-hided")
  }else{
    target.classList.add("mob-activated")
    menucont.classList.add("search-hided")
  };
};

menuBtn.addEventListener("click", openMenu); //Burger on click