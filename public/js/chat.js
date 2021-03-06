document.querySelector("#start_chat").addEventListener("click", (event) => {
  
  const chatHelp = document.getElementById('chat_help');
  chatHelp.style.display = 'none';
  
  const chatInSupport = document.getElementById('chat_in_support');
  chatInSupport.style.display = 'block';

  const socket = io();

  const email = document.getElementById('email').value;
  const text = document.getElementById('txt_help').value; 

  const params = { email, text };

  socket.on('connect', () => {
    socket.emit('client_first_access', params, (callback, err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(callback);
      }
    })
  })
});
