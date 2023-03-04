const folderPath = "mm/samples/"; // Replace with the path to your images folder
const bgFolderPath = "mm/detail/";
const imgExtensions = ["jpg", "jpeg", "png", "gif"];

const predefinedImageNames = [
  "sample1.jpg",
  "sample3.jpg",
  "sample4.jpg",
  "sample5.jpg",
  "sample6.jpg",
  "sample7.jpg",
  "sample8.jpg",
  "sample9.jpg",
  "sample10.jpg",
  "sample11.jpg",
  "sample12.jpg",
  "sample13.jpg",
  "sample14.jpg",
  "sample15.jpg",
  "sample16.jpg",
  "sample17.jpg",
  "sample18.jpg",
  "sample19.jpg",
  "sample20.jpg",
  "sample21.jpg",
  "sample22.jpg",
  "sample23.jpg",
  "sample24.jpg",
  "sample25.jpg",
  "sample26.jpg",
  "sample27.jpg",
  "sample28.jpg",
  "sample29.jpg",
  "sample30.jpg",
  "sample31.jpg",
  "sample32.jpg",
  "sample33.jpg",
  "sample34.jpg",
  "sample35.jpg",
  "sample36.jpg"
];

let images = [];
let currentImageIndices = {};
let imageIndices = [];
let imageFilenames = {};
let usedImages = [];

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
  let availableIndices = [];
  for (let i = 0; i < arr.length; i++) {
    if (!usedImages.includes(arr[i]) && i !== currentIndex) {
      availableIndices.push(i);
    }
  }
  if (availableIndices.length === 0) {
    usedImages = [];
    availableIndices = Array.from(Array(arr.length).keys());
    availableIndices.splice(currentIndex, 1);
  }
  const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
  usedImages.push(arr[randomIndex]);
  return randomIndex;
}

const bgImageNames = [
  "detail1.jpg", 
  "detail2.jpg", 
  "detail3.jpg",
  "detail4.jpg",
  "detail5.jpg",
  "detail6.jpg",
  "detail7.jpg",
  "detail8.jpg",
  "detail9.jpg",
  "detail10.jpg",
  "detail11.jpg",
  "detail12.jpg",
  "detail13.jpg",
  "detail14.jpg",
  "detail16.jpg",
  "detail17.jpg",
  "detail18.jpg",
  "detail19.jpg",
  "detail20.jpg",
  "detail21.jpg",
  "detail22.jpg",
  "detail23.jpg",
  "detail24.jpg",
  "detail25.jpg"
];

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
