var button = document.querySelector('button');
var span = document.querySelector('span');

button.addEventListener('mousedown', function(event) {
	if (event.which == 1)
		span.innerText = 'Left button';
	else if (event.which == 2) 
		span.innerText = 'Middle button';
	else if (event.which == 3) 
		span.innerText = 'Right button';
});