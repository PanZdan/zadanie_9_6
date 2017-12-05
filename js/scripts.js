// // scripts.js

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {

	var TagNames = document.getElementsByTagName('li');
	var liCount = TagNames.length;

	var element = document.createElement('li');
	element.innerHTML = 'item ' + liCount;

	list.appendChild(element);
});