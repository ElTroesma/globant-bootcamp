function showText() {
  document.getElementById('hideText').style.display = 'block';
}
window.addEventListener("load", showText);

function doRequest(method, url) {
  var requestPromise = new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    req.open(method, url, true);
    req.send(null);

    req.onreadystatechange = function () {
      if (req.readyState == 4) {
        resolve(req.responseText);
      }
    }
  });

    return requestPromise;
}

function displayAlert() {
  doRequest('GET', 'http://api.icndb.com/jokes/random').then(function (responseText) {
    document.getElementById('displayText').innerHTML = responseText;
  })
}
document.getElementById('showAlert').addEventListener("click", displayAlert);
