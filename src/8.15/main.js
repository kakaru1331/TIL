var elems = document.querySelectorAll('h1');

for (var i = 0; i < elems.length; i++) {
  elems[i].className = 'blue';
}

var js = document.querySelector('#js');
var textNode = js.firstChild;
console.log(textNode.nodeValue); // JavaScript
textNode.nodeValue = 'RoR'; // Javacript -> RoR

js.textContent += ' is cool';

var cpp = document.querySelector('#cpp');
cpp.innerHTML += '<bold> is really fast!</bold>';

var newHeading = document.createElement('h1');
var newText = document.createTextNode('C#');
newHeading.appendChild(newText);
cpp.appendChild(newHeading);

js.insertAdjacentHTML('beforeend', ' also Ruby = hot!')