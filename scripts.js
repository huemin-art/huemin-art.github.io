const folderPath = "mm/samples/"; // Replace with the path to your images folder
const bgFolderPath = "mm/detail/";
const imgExtensions = ["jpg", "jpeg", "png", "gif"];

let images = [];
let selectedImageNames = [];
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
  const allImageNames = shuffle(predefinedImageNames.slice());
  // Filter out any image names that have already been selected
  const availableImageNames = allImageNames.filter(function(name) {
    return selectedImageNames.indexOf(name) === -1;
  });
  selectedImageNames = selectedImageNames.concat(availableImageNames.slice(0, numImages));
  images.forEach(function(img, i) {
    const imageName = selectedImageNames[i];
    img.src = folderPath + imageName;
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
