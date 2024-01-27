export default function dropdown() {
  const menuItem = document.querySelectorAll(".dropdown-item");
  const menuHeader = document.querySelector(".dropdown-header");

  function toggleHide(target, className) {
    target.forEach((element) => {
      element.classList.toggle(className);
    });
  }

  menuHeader.addEventListener("click", () => {
    toggleHide(menuItem, "hide");
  });

  toggleHide(menuItem, "hide");
}
