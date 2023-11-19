const lightThemeButton = document.getElementById("light-theme");
const darkThemeButton = document.getElementById("dark-theme");
const body = document.body;
const inputWrapper = document.querySelector(".input-wrapper");
const navbar = document.querySelector(".navbar-wrapper");
const input = document.getElementById("url-input");
const div = document.getElementsByClassName("border");
const footer = document.getElementById("footer");
const icons = document.querySelectorAll(".navbar-icon");

lightThemeButton.addEventListener("click", () => {
  body.classList.remove("dark-mode");

  inputWrapper.classList.remove("dark-input-wrapper");
  navbar.classList.remove("dark-navbar-wrapper");
  input.classList.remove("dark-input");
  footer.classList.remove("dark-footer");

  icons.forEach((icon) => {
    icon.classList.remove("dark-navbar-icon");
  });

  for (let i = 0; i < div.length; i++) {
    div[i].classList.remove("dark-border");
  }
});

darkThemeButton.addEventListener("click", () => {
  body.classList.add("dark-mode");

  inputWrapper.classList.add("dark-input-wrapper");
  navbar.classList.add("dark-navbar-wrapper");
  input.classList.add("dark-input");
  footer.classList.add("dark-footer");

  icons.forEach((icon) => {
    icon.classList.add("dark-navbar-icon");
  });

  for (let i = 0; i < div.length; i++) {
    div[i].classList.add("dark-border");
  }
});
