const folderPath = "mm/samples/"; // Replace with the path to your images folder
const bgFolderPath = "mm/detail/";
const imgExtensions = ["jpg", "jpeg", "png", "gif"];
let predefinedImageNames = ["sample1.png", "sample2.png", "sample3.png", "sample4.png", "sample5.png", "sample6.png", "sample7.png", "sample8.png", "sample9.png"];

let images = [];
let currentImageIndices = {};
let imageFilenames = {};

function getRandomImage(img) {
  const imgClass = img.getAttribute("class");
  const newImageIndex = getRandomIndex(imageFilenames[imgClass].length);
  currentImageIndices[imgClass] = newImageIndex;
  img.src = folderPath + imageFilenames[imgClass][currentImageIndices[imgClass]];
  imageFilenames[imgClass].splice(newImageIndex, 1);
}

function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

const bgImageNames = ["detail1.png", "detail2.png", "detail3.png"];

function setRandomBackgroundImage() {
  const randomIndex = getRandomIndex(bgImageNames.length);
  const bgImagePath = bgFolderPath + bgImageNames[randomIndex];
  document.body.style.backgroundImage = `url(${bgImagePath})`;
}

document.addEventListener("DOMContentLoaded", function() {
  images = Array.from(document.querySelectorAll(".sample"));
  images.forEach((img) => {
    const imgClass = img.getAttribute("class");
    currentImageIndices[imgClass] = -1;
    imageFilenames[imgClass] = predefinedImageNames.slice(); // make a copy of the predefinedImageNames array
    getRandomImage(img);
  });

  setRandomBackgroundImage();
});

$(document).ready(function() {
  $('.hamburger').click(function() {
    $('.main').toggleClass('active');
    $('.nav-btn').toggleClass('active');
  });
})
