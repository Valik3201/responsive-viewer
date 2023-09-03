const lightThemeButton = document.getElementById("light-theme");
const darkThemeButton = document.getElementById("dark-theme");
const body = document.body;
const input = document.getElementById("url-input");
const div = document.getElementsByClassName("border");
const footer = document.getElementById("footer");

lightThemeButton.addEventListener("click", () => {
  body.classList.remove("dark-mode");

  input.classList.remove("dark-input");
  footer.classList.remove("dark-footer");

  for (let i = 0; i < div.length; i++) {
    div[i].classList.remove("dark-border");
  }
});

darkThemeButton.addEventListener("click", () => {
  body.classList.add("dark-mode");

  input.classList.add("dark-input");
  footer.classList.add("dark-footer");

  for (let i = 0; i < div.length; i++) {
    div[i].classList.add("dark-border");
  }
});
