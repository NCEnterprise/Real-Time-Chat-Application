const socket = io();

function sendMessage() {
  const username = document.getElementById('username').value;
  const message = document.getElementById('messageInput').value;

  if (username && message) {
    socket.emit('chatMessage', { username, message });
    document.getElementById('messageInput').value = '';
  }
}

socket.on('chatMessage', (data) => {
  const messages = document.getElementById('messages');
  const li = document.createElement('li');
  li.innerText = `${data.username}: ${data.message}`;
  messages.appendChild(li);
});
