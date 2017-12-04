// // scripts.js

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {

	var number = document.getElementsByTagName('li');
	var liNumber = number.length;

	var element = document.createElement('li');
	element.innerHTML = 'item ' + liNumber;

	list.appendChild(element);
});