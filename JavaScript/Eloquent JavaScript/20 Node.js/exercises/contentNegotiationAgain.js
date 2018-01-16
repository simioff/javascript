var http = require('http');

function get(hostname, path, headers) {
	var request = http.request({
		hostname: hostname,
		path: path,
		method: 'GET',
		headers: headers
	}, function(response) {
		console.log('->', Object.keys(response));
	});
}

// var hostname = 'http://eloquentjavascript.net';
var hostname = 'eloquentjavascript.net';
var path = '/author';

get(hostname, path, {Accept: 'text/plain'});
get(hostname, path, {Accept: 'text/html'});
get(hostname, path, {Accept: 'application/json'});
get(hostname, path, {Accept: 'application/rainbows+unicorns'});


// TODO fix it