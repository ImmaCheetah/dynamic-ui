import "./style.css";
// import dropdown from "./modules/dropdown";
// import loadNavbarLogic from "./modules/navbar";

// dropdown();
// loadNavbarLogic();

let i = 0;
const imgArray = [];
const imageDiv = document.querySelectorAll(".image-div");
const nextBtn = document.querySelector(".next-btn");

imageDiv.forEach((img) => {
  img.setAttribute("index", i++);
  imgArray.push(img);
});

console.log(imgArray);

function nextSlide() {
  imgArray[0].classlist.add('first-image');
}

nextSlide();
// Create display div with next and previous buttons
// Store all image divs inside of an array and add index attribute
// Show initial image inside of display div
// When next is pressed
// - Add a "front-img" class to next image in array
// - Transition that image to the left
