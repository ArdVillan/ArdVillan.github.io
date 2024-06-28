const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Images and their alternative texts
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const imageAltText = {
    'pic1.jpg': 'waterfall',
    'pic2.jpg': 'sunset',
    'pic3.jpg': 'creek',
    'pic4.jpg': 'park',
    'pic5.jpg': 'flatirons'
};

// Adding images to thumb-bar and setting up click functionality
/* Looping through the images */
for(let i = 0; i < imageArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageArray[i]);
    newImage.setAttribute('alt', imageAltText[imageArray[i]]);
    thumbBar.appendChild(newImage);
  
    /* Adding a click event listener to each thumbnail image */
    newImage.addEventListener('click', (function(index) {
      return function() {
        displayedImage.setAttribute('src', imageArray[index]);
        displayedImage.setAttribute('alt', imageAltText[imageArray[index]]);
      }
    })(i));
  }
  
  /* Writing a handler that runs the darken/lighten button */
  btn.addEventListener('click', function() {
    const currentClass = btn.getAttribute('class');
    if(currentClass === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });