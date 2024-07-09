document.addEventListener("DOMContentLoaded", function () {
  function selectButtons() {
    const calcButton = document.querySelectorAll(".calc-button");
    if (calcButton) {
      // Check if the element exists
      calcButton.forEach((button) => {
        button.addEventListener("mouseover", hoverGrid);
      });
    } else {
      console.error("Element with class 'calc-button' not found.");
    }
  }

  function hoverGrid(event) {
    const button = event.target;
    console.log("hovered");
    button.style.backgroundColor = "brown";
  }

  

  selectButtons();
});
