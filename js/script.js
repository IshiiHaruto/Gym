// 左からニョキニョキ
const button = document.querySelector(".toggle-menu-button");
const menu = document.querySelector(".header-site-menu");

button.addEventListener("click", () => {
    menu.classList.toggle("open");
});