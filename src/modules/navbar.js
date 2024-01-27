export default function loadNavbarLogic() {
  const moreItem = document.querySelectorAll(".more-drop-item");
  const moreBtn = document.querySelector(".more-btn");

  function toggleHide(target, className) {
    target.forEach((element) => {
      element.classList.toggle(className);
    });
  }

  moreBtn.addEventListener("click", () => {
    toggleHide(moreItem, "hide");
  });

  toggleHide(moreItem, "hide");
}
