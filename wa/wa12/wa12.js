const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getDog);

const revealButton = document.querySelector("#js-tweet");
revealButton.addEventListener('click', revealBreed);

let currentBreed = '';
let currentImageUrl = '';

async function getDog() {
    clearBreed();  
    const endpoint = "https://dog.ceo/api/breeds/image/random";
    
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Failed to fetch dog image');
        }
        const imageData = await response.json();
        currentImageUrl = imageData.message;
        currentBreed = extractBreedFromUrl(currentImageUrl);
        displayDog(currentImageUrl);
    } catch (error) {
        console.error('Error fetching dog image:', error);
        alert('Error fetching dog image: ' + error.message);
    }
}

function displayDog(imageUrl) {
    const imgElement = document.querySelector("#js-dog-image");
    imgElement.innerHTML = `<img src="${imageUrl}" alt="Dog Image" style="max-width:100%;">`;
}

function clearBreed() {
    const breedElement = document.querySelector("#js-breed-name");
    breedElement.textContent = ''; 
}

function revealBreed() {
    const breedElement = document.querySelector("#js-breed-name");
    breedElement.textContent = `Breed: ${capitalizeBreed(currentBreed)}`;
}

function extractBreedFromUrl(url) {
    const regex = /\/breeds\/([a-z-]+)\//;
    const match = url.match(regex);
    return match ? match[1] : 'Unknown breed';
}

function capitalizeBreed(breed) {
    return breed.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

document.addEventListener('DOMContentLoaded', getDog);
