document.addEventListener('DOMContentLoaded', () => {
    const menu_burger = document.querySelector('.menu-burger');
    const icon_menu_burger = menu_burger.querySelector('i');
    const navbar = document.querySelector(".navbar");

    menu_burger.addEventListener('click', () => { 
        menu_burger.classList.toggle("active");
        icon_menu_burger.classList.toggle("bi-list");
        icon_menu_burger.classList.toggle("bi-x-lg");  
        navbar.classList.toggle("active");
    });
});
