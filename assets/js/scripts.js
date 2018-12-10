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

// Web Socket

var socket = new WebSocket('ws://echo.websocket.org');
var open = document.getElementById('open');
var close = document.getElementById('close');

function onOpen() {
  socket.onopen;
  write('Socket has been opened! Send a message!');
}
open.addEventListener('click', onOpen);

function onClose() {
  socket.onclose;
  write('Socket has been closed!');
}
close.addEventListener('click', onClose);

socket.onmessage = function(msg) {
  write('Message recived: ' + msg.data);
}
socket.onerror = function(error) {
  write('The following error has occurred: ' + error.data);
}

function write(message) {
  var pre = document.createElement('p');
  pre.innerHTML = message;
  var output = document.getElementById('output');
  output.appendChild(pre);
}

function send() {
  var message = document.getElementById('messageInput');
  socket.send(message.value);
  write('Sent: ' + message.value);
}

var sendButton = document.getElementById('send');
sendButton.addEventListener('click', send);
