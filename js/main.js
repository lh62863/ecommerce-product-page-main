const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const carsousel = document.querySelector('.carousel');
const carsouselImgs = document.querySelectorAll('.carousel img');
const iconcart = document.querySelector('.iconcart');


let scrollWidth = 0;
let currentIndex = 0;

// document.addEventListener('DOMContentLoaded', () => {
//     scrollWidth = carsouselImgs[0].clientWidth;
// });

carsouselImgs[0].addEventListener('load', () => {
    scrollWidth = carsouselImgs[0].clientWidth;
});

previous.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }else {
        currentIndex = carsouselImgs.length - 1;
    }

    carsousel.style.transform = `translateX(-${currentIndex * scrollWidth}px)`;
});

next.addEventListener('click', () => {
    if (currentIndex < carsouselImgs.length - 1) { 
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    const carsousel = document.querySelector('.carousel');
    carsousel.style.transform = `translateX(-${currentIndex * scrollWidth}px)`;
});

iconcart.addEventListener('click', () => {  
    const cart = document.querySelector('.cart');
    cart.classList.toggle('active');
});


const iconMenu = document.querySelector('header .menu');
iconMenu.addEventListener('click', () => {
    const tab = document.querySelector('header .tab');
    tab.classList.add('active');

    const mask = document.querySelector('.container .mask');
    mask.classList.add('active');
});

const closeMenu = document.querySelector('header .tab .close');
closeMenu.addEventListener('click', () => {
    const tab = document.querySelector('header .tab');
    tab.classList.remove('active');

    const mask = document.querySelector('.container .mask');
    mask.classList.remove('active');
});


const minus = document.querySelector('.info .minus');
const plus = document.querySelector('.info .plus');
const quantity = document.querySelector('.info .quantity');
let count = 0;
minus.addEventListener('click', () => {
    if (count > 1) {
        count--;
    }
    quantity.textContent = count;
});
plus.addEventListener('click', () => {
    count++;
    quantity.textContent = count;
});

const imgset = document.querySelectorAll('.imgset img');
const bigimg = document.querySelectorAll('.product .bigimg');
for (let i = 0; i < imgset.length; i++) {
    imgset[i].addEventListener('click', () => {
        for (let j = 0; j < imgset.length; j++) {
            imgset[j].classList.remove('active');
            bigimg[j].classList.remove('active');
        }

        bigimg[i].classList.add('active');
        imgset[i].classList.add('active');
    });
}

bigimg[0].classList.add('active');