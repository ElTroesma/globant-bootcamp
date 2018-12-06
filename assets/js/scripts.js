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
