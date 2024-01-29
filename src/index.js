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

let i = 0;
let j = 0;
const imgArray = [];
const imageDiv = document.querySelectorAll(".image-div");
const imageDisplay = document.querySelector(".image-display");
const carousel = document.querySelector(".carousel-frame");
const nextBtn = document.querySelector(".next-btn");

imageDiv.forEach((img) => {
  img.setAttribute("index", i++);
  imgArray.push(img);
});

const indexDiv = document.querySelectorAll("[index]");
console.log(indexDiv.length);
function nextSlide() {
  if (j === indexDiv.length - 1) {
    // Move div outside of display
    indexDiv[j].classList.add("fade-out");
    carousel.appendChild(indexDiv[j]);

    indexDiv[j + 1].classList.add(".fade-in");
    imageDisplay.appendChild(indexDiv[++j]);
    // indexDiv[j].classList.add('fade-out');

    j = 0;
  } else {
    indexDiv[j].classList.add("fade-out");
    carousel.appendChild(indexDiv[j]);

    indexDiv[j + 1].classList.add(".fade-in");
    imageDisplay.appendChild(indexDiv[++j]);
  }
  console.log(j);
  indexDiv[j].classList.add("fade-out");
}

nextBtn.addEventListener("click", nextSlide);

// nextSlide();
// nextSlide();
// nextSlide();
// nextSlide(imgArray);
