let sendMessage = document.querySelector('.input'),
  addButton = document.querySelector('.button'),
  messageDisplay = document.querySelector('.message');

let messageList = [];

addButton.addEventListener('click', function () {

  let newMessage = {
    message: sendMessage.value
  }

  messageList.push(JSON.parse(JSON.stringify(newMessage)));

  console.log(messageList)

  displayMessages()
})


function displayMessages() {

  let displayMessage = '';

  messageList.forEach(function (item) {

    displayMessage += `
      <div class="new-message">
        <p class="new-message__text">${item.message}</p>
        <img src="../public/images/avatar2.jpg" class="avatar">
      </div>
    `;

    messageDisplay.innerHTML = displayMessage;

  })

}