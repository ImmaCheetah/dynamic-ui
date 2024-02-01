import "./style.css";
// import dropdown from "./modules/dropdown";
// import loadNavbarLogic from "./modules/navbar";

// dropdown();
// loadNavbarLogic();

// const numArray = [1, 2, 3, 4, 5];
// let i = 0;

// function nextValue(array) {
//   if (i === array.length) {
//     i = 0;
//     console.log(array[i++]);
//   } else {
//     console.log(array[i++]);
//   }
// }

// nextValue(numArray);
// nextValue(numArray);

let currentSlide = 0;
let j = 0;
const imgArray = [];
const imageDiv = document.querySelectorAll(".image-div");
const imageDisplay = document.querySelector(".image-display");
const carousel = document.querySelector(".carousel-frame");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

imageDiv.forEach((img) => {
  imgArray.push(img);
  img.classList.add('hide');
});

function showImage(index) {
  imageDiv.forEach(img => {
    img.classList.add('hide')
  })
  imageDiv[index].classList.remove('hide');
}

imgArray[currentSlide].classList.remove('hide');

function nextSlide() {
  if (currentSlide === imgArray.length) {
    currentSlide = 0;
    showImage(currentSlide++);
  } else {
    showImage(currentSlide++);
  }
  console.log(currentSlide);
}

function previousSlide() {
  if (currentSlide < 1) {
    currentSlide = imgArray.length;
    showImage(currentSlide--);
  } else {
    showImage(currentSlide--);
  }
  console.log(currentSlide);
}



// showImage(2);

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", previousSlide);
