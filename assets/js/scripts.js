function showText() {
  document.getElementById('hideText').style.display = 'block';
}
window.addEventListener("load", showText);

function displayAlert() {
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.icndb.com/jokes/random', false);
  req.send(null);
  console.log(req.responseText);
}
document.getElementById('showAlert').addEventListener("click", displayAlert);
