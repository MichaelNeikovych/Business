const sliderArray = [
    'img/slider-photo.jpg',
    'img/slider-photo-2.jpg',
    'img/slider-photo-3.jpg',
];
const slider = document.querySelector('#slider');
const firstBtn = document.querySelector('#first-btn');
const secondBtn = document.querySelector('#second-btn');
const thirdBtn = document.querySelector('#third-btn');
slider.src = sliderArray[0];

firstBtn.addEventListener('click', function(){
    slider.src = sliderArray[0];
});
secondBtn.addEventListener('click', function(){
    slider.src = sliderArray[1];
});
thirdBtn.addEventListener('click', function(){
    slider.src = sliderArray[2];
});