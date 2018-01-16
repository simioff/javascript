var fs = require('fs');

fs.writeFile('myFile.txt', 'Node was here', function(err) {
	if (err) 
		console.log('Failed to write file: ', err);
	else
		console.log('File written.');
});

fs.readFile('myFile.txt', 'utf8', function(error, text) {
	if (error) 
		throw error;

	console.log('The file contained:', text);
});

fs.readFile('myFile.txt', function(error, buffer) {
	if (error)
		throw error;
	
	console.log('The failes contained', buffer.length, 'bytes.',
		'The first byte is:', buffer[0]);
});

console.log(fs.readFileSync('myFile.txt', 'utf8'));