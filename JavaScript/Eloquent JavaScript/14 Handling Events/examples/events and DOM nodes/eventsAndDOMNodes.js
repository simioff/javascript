var button1 = document.querySelector('#btn1');
button1.addEventListener('click', function() {
	document.querySelector('p').innerText = 'Button clicked';
});

var button2 = document.querySelector('#btn2');
function once() {
	document.querySelector('p').innerText = 'Done';
	button2.removeEventListener('click', once);
}
button2.addEventListener('click', once);