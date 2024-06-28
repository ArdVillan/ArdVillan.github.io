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

// Adding images to thumb-bar and setting up click functionality
images.forEach((image) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', altTexts[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
    });
});

// Darken/Lighten button
btn.addEventListener('click', () => {
    if (overlay.style.backgroundColor === 'rgba(0,0,0,0.5)') {
        overlay.style.backgroundColor = 'transparent';
        btn.textContent = 'Darken';
    } else {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.textContent = 'Lighten';
    }
});
