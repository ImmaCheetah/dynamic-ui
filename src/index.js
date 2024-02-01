import "./style.css";
// import dropdown from "./modules/dropdown";
// import loadNavbarLogic from "./modules/navbar";

// dropdown();
// loadNavbarLogic();

let currentSlide = 0;
let j = 0;
const imgArray = [];
const imageDiv = document.querySelectorAll(".image-div");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const circleBtn = document.querySelectorAll(".circle");

imageDiv.forEach((img) => {
  imgArray.push(img);
  img.classList.add("hide");
});

function showImage(index) {
  imageDiv.forEach((img) => {
    img.classList.add("hide");
  });
  imageDiv[index].classList.remove("hide");
}

function clearSelected() {
  circleBtn.forEach(btn => {
    btn.classList.remove('selected');
  })
}

imgArray[currentSlide].classList.remove("hide");
circleBtn[currentSlide].classList.add('selected');

function nextSlide() {
  if (currentSlide === imgArray.length - 1) {
    currentSlide = 0;
    showImage(currentSlide);
    clearSelected();
    circleBtn[currentSlide].classList.add('selected');
  } else {
    showImage(++currentSlide);
    clearSelected();
    circleBtn[currentSlide].classList.add('selected');
  }
}

function previousSlide() {
  if (currentSlide < 1) {
    currentSlide = imgArray.length - 1;
    showImage(currentSlide);
    clearSelected();
    circleBtn[currentSlide].classList.add('selected');
  } else {
    showImage(--currentSlide);
    clearSelected();
    circleBtn[currentSlide].classList.add('selected');
  }
}

circleBtn.forEach((btn) => {
  btn.setAttribute("index", j++);

  btn.addEventListener("click", (e) => {
    currentSlide = btn.getAttribute("index");
    clearSelected();
    e.target.classList.add("selected");
    showImage(currentSlide);
  });
});



// circleBtn.forEach(btn2 => {
//   btn2.classList.remove('selected');
// })

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", previousSlide);
