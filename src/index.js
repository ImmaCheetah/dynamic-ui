import "./style.css";

const menuItem = document.querySelectorAll(".dropdown-item");
const menuHeader = document.querySelector(".dropdown-header");

function swapClasses(target, firstClass, secondClass) {
  target.forEach((element) => {
    element.classList.add(firstClass);
    element.classList.remove(secondClass);
  });
}

menuHeader.addEventListener("click", () => {
  if (menuItem[0].classList.contains("hide")) {
    swapClasses(menuItem, "visible", "hide");
  } else {
    swapClasses(menuItem, "hide", "visible");
  }
});

swapClasses(menuItem, "hide");
