document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".toggle-menu-button");
    const menu = document.querySelector(".header-site-menu");

    console.log(button);
    console.log(menu);

    button.addEventListener("click", function () {
        console.log("クリックされた");
        menu.classList.toggle("open");
    });

});