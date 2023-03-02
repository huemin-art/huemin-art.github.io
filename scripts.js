const folderPath = "mm/samples/"; // Replace with the path to your images folder
const bgFolderPath = "mm/detail/";
const imgExtensions = ["jpg", "jpeg", "png", "gif"];
const predefinedImageNames = ["sample1.png", "sample2.png", "sample3.png", "sample4.png", "sample5.png", "sample6.png", "sample7.png", "sample8.png", "sample9.png"];

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
    imageFilenames[imgClass] = predefinedImageNames;
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

