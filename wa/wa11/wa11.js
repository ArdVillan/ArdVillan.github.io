const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Images and their alternative texts
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altTexts = {
    'pic1.jpg': 'waterfall',
    'pic2.jpg': 'sunset',
    'pic3.jpg': 'creek',
    'pic4.jpg': 'park',
    'pic5.jpg': 'flatirons'
};

// Adding images to thumb-bar and setting up click funct