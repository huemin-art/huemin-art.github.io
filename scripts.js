const folderPath = "mm/samples/"; // Replace with the path to your images folder
const bgFolderPath = "mm/detail/";
const imgExtensions = ["jpg", "jpeg", "png", "gif"];

let images = [];
let currentImageIndices = {};
let imageFilenames = {};

function getRandomImage(img) {
  const imgClass = img.getAttribute("class");
  const newImageIndex = getRandomIndexExcludingCurrent(imageFilenames[imgClass], currentImageIndices[imgClass]);
  currentImageIndices[imgClass] = newImageIndex;
  img.src = folderPath + imageFilenames[imgClass][currentImageIndices[imgClass]];
}

function getRandomIndexExcludingCurrent(arr, currentIndex) {
  if (arr.length <= 1) {
    return 0;
  }
  let randomIndex = Math.floor(Math.random() * arr.length);
  while (randomIndex === currentIndex) {
    randomIndex = Math.floor(Math.random() * arr.length);
  }
  return randomIndex;
}

const bgImageNames = ["detail1.png", "detail2.png", "detail3.png"];

function setRandomBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * bgImageNames.length);
  const bgImagePath = bgFolderPath + bgImageNames[randomIndex];
  document.body.style.backgroundImage = `url(${bgImagePath})`;
}

document.addEventListener("DOMContentLoaded", function() {
  images = Array.from(document.querySelectorAll(".sample"));
  images.forEach((img) => {
    const imgClass = img.getAttribute("class");
    currentImageIndices[imgClass] = -1;
    fetch(folderPath) // Fetch the folder's contents
      .then(response => response.text())
      .then(html => {
        const doc = new DOMParser().parseFromString(html, "text/html"); // Convert the folder contents to a DOM object
        const imageLinks = Array.from(doc.querySelectorAll("a")) // Get an array of all the links in the folder
          .map(link => link.href) // Convert each link to a string
          .filter(link => imgExtensions.includes(link.split(".").pop())); // Filter out links that don't have an image extension
        imageFilenames[imgClass] = imageLinks.map(link => link.split("/").pop()); // Extract the filenames from the links and store them in an array

        getRandomImage(img);
      })
      .catch(error => console.error(error));
  });

  setRandomBackgroundImage();
});

$(document).ready(function() {
  $('.hamburger').click(function() {
    $('.main').toggleClass('active');
    $('.nav-btn').toggleClass('active');
  });
})
