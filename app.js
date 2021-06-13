// input
// var username = prompt('give me username');

// // processing
// var welcomemessage = 'Working' + username;

// // output
// alert(welcomemessage);

var button = document.querySelector('#btn-translate');
var word = document.querySelector('#txt-input');
var output = document.querySelector('#output');

button.addEventListener('click', function clickEventHandler() {
  output.innerText = 'fdfscsdfcsdcsd' + word.value;
});
