const menuBtn = document.querySelector(".header__menu_burger");
const menu = document.querySelector(".header__content");
menuBtn.addEventListener("click", () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active__icon');
});
