document.addEventListener("DOMContentLoaded", function () {
  const multiButton = document.querySelector(".multi-button");
  const doubleButton = document.querySelector(".double-button");
  const multiplyDiv = document.querySelector(".multiply");
  const doubleDiv = document.querySelector(".double");

  multiButton.addEventListener("click", function () {
    multiplyDiv.style.display = "block";
    doubleDiv.style.display = "none";
  });

  doubleButton.addEventListener("click", function () {
    multiplyDiv.style.display = "none";
    doubleDiv.style.display = "block";
  });
});
