var para = document.querySelector('p');
var button = document.querySelector('p button');
console.log(button);
var span = document.querySelector('span');

para.addEventListener('mousedown', function() {
	span.innerText = 'Handler for paragraph.';
});

button.addEventListener('mousedown', function(event) {
	span.innerText = 'Handler for button.';

	if (event.which == 3) {
		event.stopPropagation();
	}
});


var div = document.querySelector('div');
var h2 = document.querySelector('h2');

div.addEventListener('click', function(event) {
	if (event.target.nodeName == 'BUTTON') {
		h2.innerText = 'Clicked ' + event.target.textContent;
	}
});