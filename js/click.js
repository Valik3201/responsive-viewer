function loadWebsite() {
  const urlInput = document.getElementById("url-input").value;
  document.getElementById("desktop").src = urlInput;
  document.getElementById("laptop").src = urlInput;
  document.getElementById("tablet").src = urlInput;
  document.getElementById("mobile").src = urlInput;
}
