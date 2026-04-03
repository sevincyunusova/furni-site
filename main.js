const navIcon = document.querySelector(".nav-icon");
const navList = document.querySelector(".nav-list");
const leftBtn = document.getElementById('left-button');
const rightBtn = document.getElementById('right-button');
const sliderTxt = document.getElementById('slider-text');
const sliderImg = document.getElementById('slider-image');
const sliderName = document.getElementById('slider-name');
const sliderJob = document.getElementById('slider-job');

navIcon.addEventListener('click', () => {
    navList.classList.toggle("hidden")
    navIcon.classList.toggle("hidden")
});

let index = 0;

const slides = [
    {
        text: "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.”",
        img: "./pics/person-1.png",
        name: "Maria Jones",
        role: "CEO, Co-Founder, XYZ Inc."
    },
    {
        text: "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.”",
        img: "./pics/person-3.avif",
        name: "John Doe",
        role: "Design Director, ABC Agency"
    },
    {
        text: "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.”",
        img: "./pics/person-4.avif", 
        name: "Sarah Smith",
        role: "Marketing Manager, Global Tech"
    }
];

function updateUI() {
    sliderTxt.textContent = slides[index].text;
    sliderImg.src = slides[index].img;
    sliderName.textContent = slides[index].name;
    sliderJob.textContent = slides[index].role;
}

rightBtn.addEventListener('click', () => {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    updateUI();
})

leftBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    updateUI();
})

setInterval(() => {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    updateUI();
}, 4000); 