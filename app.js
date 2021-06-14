// input
// var username = prompt('give me username');

// // processing
// var welcomemessage = 'Working' + username;

// // output
// alert(welcomemessage);

var button = document.querySelector('#btn-translate');
var word = document.querySelector('#txt-input');
var output = document.querySelector('#output');

var serverURL = 'https://api.funtranslations.com/translate/minion.json';
function getTranslationURL(text) {
  return serverURL + '?' + 'text' + text;
}

function errorHandler(error) {
  console.log('error occured', error);
  alert(
    'Something went wrong with the server please try again after sometime...'
  );
}

button.addEventListener('click', function clickEventHandler() {
  var inputText = word.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
});
