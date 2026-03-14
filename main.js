const navIcon = document.querySelector(".nav-icon");
const navList = document.querySelector(".nav-list");

navIcon.addEventListener('click', () => {
    navList.classList.toggle("hidden")
    navIcon.classList.toggle("hidden")
});