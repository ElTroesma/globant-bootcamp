var text = document.getElementById('textArea');
var button = document.getElementById('submit');
var clearButton = document.getElementById('clear');
var result = localStorage.getItem('result');

button.addEventListener('click', function() {
  localStorage.setItem('result', text.value);
});

if (result != null) {
  console.log('Welcome back ' + result);
}
clearButton.addEventListener('click', function () {
  localStorage.clear();
});

// Drag and Drop

text.addEventListener('drop', function(event) {
  event.preventDefault();
  var reader = new FileReader();
  reader.readAsText(event.dataTransfer.files[0]);
  if (event.dataTransfer.files[0].type == "text/plain") {
    reader.addEventListener('load', function(event) {
      text.innerHTML = event.target.result;
    });
  }
});
