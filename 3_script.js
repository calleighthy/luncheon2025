// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");

  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", () => {
      alert("Button clicked!");
    });
  }
});
