// Array of image file names
const imageFiles = ['22.png', 'seek_135.jpeg', 'escape_03.webp', 'materia-mania.jpg', 'paper-scape_30.webp', 'scape_64.webp', 'simulacrum_001.webp', 'seek_97.jpeg', 'source_41.png', 'simulacrum_.jpeg', 'materia_mania_0026.jpeg', 'seek_125.jpg', 'paperscape.webp', 'source_58.png', 'escape_01.webp', 'materia_mania_0831.jpeg', 'scape_41.jpeg', 'simulacrum_n.jpeg', 'paperscape_.png', 'materia_mania_0446.jpeg'];
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeButton = document.getElementsByClassName('close')[0];
const galleryContainer = document.getElementById('galleryContainer');
const loadMoreBtn = document.getElementById('loadMoreBtn');

let currentIndex = 0;

// Function to handle image click event
function handleImageClick(event) {
    const clickedImage = event.target;
    modalImage.src = clickedImage.src;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener for close button click
closeButton.addEventListener('click', closeModal);

// Event listener for clicking outside the modal to close it
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Function to calculate the number of images per row
function getImagesPerRow() {
    const galleryWidth = galleryContainer.offsetWidth;
    const imageWidth = galleryContainer.offsetWidth / 4; // Adjust this value based on your desired image width
    const imagesPerRow = Math.floor(galleryWidth / imageWidth);
    return imagesPerRow;
}

// Function to load images
function loadImages() {
    const imagesPerRow = getImagesPerRow();
    const totalImagesToLoad = 4; // Load 4 images at a time

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < totalImagesToLoad; i++) {
        if (currentIndex >= imageFiles.length) {
            loadMoreBtn.style.display = 'none';
            break;
        }

        const img = document.createElement('img');
        img.src = `assets/${imageFiles[currentIndex]}`;
        img.alt = imageFiles[currentIndex];
        img.addEventListener('click', handleImageClick);
        fragment.appendChild(img);

        currentIndex++;
    }

    galleryContainer.appendChild(fragment);
}

// Function to load more images
function loadMoreImages() {
    loadImages();
}

// Event listener for load more button click
loadMoreBtn.addEventListener('click', loadMoreImages);

// Load initial set of images
loadImages();