function showText() {
  document.getElementById('hideText').style.display = 'block';
}
window.addEventListener("load", showText);

function doRequest(method, url, search) {
  var requestPromise = new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    req.open(method, search ? url + '?' + search : url, true);
    req.send(null);

    req.onreadystatechange = function () {
      if (req.readyState == 4 && req.status == 200) {
        resolve(req.responseText);
      }
    }

    req.onerror = function (error) {
      reject(error);
    }
  });

    return requestPromise;
}

function displayAlert() {
  doRequest('GET', 'http://api.icndb.com/jokes/random')
  .then(function (responseText) {
    document.getElementById('displayText').innerHTML = responseText;
  })
  .catch(function (error) {
    document.getElementById('randomSection').style.background = 'red';
  })
}

document.getElementById('showAlert').addEventListener("click", displayAlert);

doRequest('GET', 'http://api.github.com/search/repositories', 'q=javascript')
.then((response) => {
  var res = JSON.parse(response);
  var repoList = document.getElementById('repos');

  res.items.forEach(repo => {
    var repoItem = '<li>' + repo.name + '</li>';
    repoList.innerHTML += repoItem;
    console.log(repo);
  })
})
.catch(function (error) {
  document.getElementById('randomSection').style.background = 'red';
})
