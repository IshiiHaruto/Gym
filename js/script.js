/*ボタン押すと左から生えてくる*/
document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".toggle-menu-button");
    const menu = document.querySelector(".header-site-menu");

    button.addEventListener("click", function () {
        menu.classList.toggle("open");
    });

});