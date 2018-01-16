function get(url) {
	return new Promise(function(succeed, fail) {
		var req = new XMLHttpRequest();

		req.open('GET', url, true);
		req.addEventListener('load', function() {
			if (req.status < 400)
				succeed(req.responseText);
			else
				fail(new Error('Request failed: ' + responseText.statusText));
		});
		req.addEventListener('error', function() {
			fail(new Error('Network error'));
		});
		req.send(null);
	});
}

get('example/data.txt').then(function(text) {
	console.log('data.txt: ' + text);
}, function(error) {
	console.log('Failed to fetch data.txt: ' + error);
});

function getJSON(url) {
	return get(url).then(JSON.parse);
}

function showMessage(msg) {
	var elt = document.createElement('div');
	elt.textContent = msg;
	return document.body.appendChild(elt);
}

var loading = showMessage('Loading...');

getJSON('example/bert.json').then(function(bert) {
	return getJSON(bert.spouse);
}).then(function(spouse) {
	return getJSON(spouse.mother);
}).then(function(mother) {
	showMessage('The name is ' + mother.name);
}).catch(function(error) {
	showMessage(String(error));
}).then(function() {
	document.body.removeChild(loading);
});