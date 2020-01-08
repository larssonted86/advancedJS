var socket = io('http://3.120.96.16:3000');
socket.on('connect', function() {
  console.log('connected');
});
socket.on('messages', function(data) {
  chatBubble(data);
});
socket.on('new_message', function(data) {
  console.log(data);
  chatBubbleSingle(data);
});
socket.on('disconnect', function() {});

function chatBubble(data) {
  for (message of data) {
    let chat = document.querySelector('.chat');
    let chatBubble = document.createElement('div');
    chatBubble.className = 'chatBubble';
    chatBubble.textContent = message.username + ' ' + message.content;

    chat.appendChild(chatBubble);
  }
}

function chatBubbleSingle(data) {
  let chat = document.querySelector('.chat');
  let chatBubble = document.createElement('div');
  chatBubble.className = 'chatBubble';
  chatBubble.textContent = data.username + ' ' + data.content;

  chat.appendChild(chatBubble);
}
