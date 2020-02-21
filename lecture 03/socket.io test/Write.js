var socket = io('http://3.120.96.16:3000');
socket.on('connect', function() {
  //   let body = document.querySelector('body');
  //   let chatInput = document.createElement('input');
  //   chatInput.type = 'text';
  //   chatInput.placeholder = 'message:';
  //   chatInput.id = 'message';
  //   chatInput.className = 'message';
  //   body.appendChild(chatInput);
});
socket.on('messages', function(data) {});
socket.on('disconnect', function() {});

let user = {
  username: 'Ted',
  content: 'Gomorron!'
};

function sendMessage(user) {
  let chatInput = document.querySelector('#message');
  chatInput.addEventListener('submit', function(e) {
    e.preventDefault;
    if (e.keyChar === 13) {
      let message = {
        username: user.username,
        content: input.value
      };
    }
  });
}

socket.emit('message', sendMessage(user));
