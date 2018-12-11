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
  localStorage.clear('result');
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
  else {
    alert('Attach a plain text file!');
  }
});

// Web Socket

const socket = new WebSocket('ws://echo.websocket.org');
var connect = document.getElementById('open');
var disconnect = document.getElementById('close');
var send = document.getElementById('send');

function write(text) {
  var output = document.getElementById('output');
  var i = document.createElement('p');
  var data = document.createTextNode(text);
  i.appendChild(data);
  output.appendChild(i);
}

function doConnect() {
  if (socket.readyState == 1) {
    socket.onopen = write('Socket has been opened successfuly!');
  }
  else {
    write('The connection with socket has failed')
  }
}
connect.addEventListener('click', doConnect);

socket.onerror = function(error) {
  write('An error has been ocurred: ' + error);
}

function doSend() {
  var input = document.getElementById('messageInput');
  socket.send(input.value);
  write('You: ' + input.value);
}
send.addEventListener('click', doSend);

socket.onmessage = function(evt) {
  write('Response: ' +evt.data);
}

function doDisconnect() {
  if (socket.readyState == 1) {
    socket.onclose = write('Socket has been disconnected');
  }
}
disconnect.addEventListener('click', doDisconnect);
