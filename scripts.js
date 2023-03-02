const folderPath = "mm/samples/"; // Replace with the path to your images folder
const bgFolderPath = "mm/detail/";
const imgExtensions = ["jpg", "jpeg", "png", "gif"];
const predefinedImageNames = ["sample1.png", "sample2.png", "sample3.png", "sample4.png", "sample5.png", "sample6.png", "sample7.png", "sample8.png", "sample9.png"];

let images = [];
let currentImageIndices = {};
let imageIndices = [];
let imageFilenames = {};

function getRandomImage(img) {
  const imgClass = img.getAttribute("class");
  const newImageIndex = imageIndices.pop();
  currentImageIndices[imgClass] = newImageIndex;
  img.src = folderPath + imageFilenames[imgClass][currentImageIndices[imgClass]];
}

const bgImageNames = ["detail1.png", "detail2.png", "detail3.png"];

function setRandomBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * bgImageNames.length);
  const bgImagePath = bgFolderPath + bgImageNames[randomIndex];
  document.body.style.backgroundImage = `url(${bgImagePath})`;
}

document.addEventListener("DOMContentLoaded", function() {
  images = Array.from(document.querySelectorAll(".sample"));
  const numImages = images.length;
  imageIndices = shuffle([...Array(numImages).keys()]); // create an array of indices and shuffle it
  images.forEach((img) => {
    const imgClass = img.getAttribute("class");
    currentImageIndices[imgClass] = -1;
    imageFilenames[imgClass] = shuffle(predefinedImageNames.slice()); // shuffle the filenames for each image
    getRandomImage(img);
  });

  setRandomBackgroundImage();
});

$(document).ready(function() {
  $('.hamburger').click(function() {
    $('.main').toggleClass('active');
    $('.nav-btn').toggleClass('active');
  });
});

function shuffle(array) {
  // Fisher-Yates shuffle algorithm
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
