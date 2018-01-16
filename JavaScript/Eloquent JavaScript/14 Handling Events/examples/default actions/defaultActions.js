var link = document.querySelector('a');

link.addEventListener('click', function(event) {
	link.innerText += ' nope!';
	event.preventDefault();
});