function showText() {
  document.getElementById('hideText').style.display = 'block';
}
window.addEventListener("load", showText);

function displayAlert() {
  alert("You have pressed the button");
}
document.getElementById('showAlert').addEventListener("click", displayAlert);
