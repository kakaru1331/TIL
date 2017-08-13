// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

var images = document.querySelector('img');

images.onclick = function() {
  var imagesSrc = images.getAttribute('src');

  if(imagesSrc === 'images/firefox-icon.png') {
    images.setAttribute ('src','images/Nick.jpg');
  } else {
    images.setAttribute ('src', 'images/firefox-icon.png');
  }
}


var myBtn = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var userName = prompt('Please, enter your name.');
  localStorage.setItem('name', userName);
  myHeading.textContent = 'Welcome, ' + userName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "It's you, " + storedName;
}

myBtn.onclick = function() {
  setUserName();
}