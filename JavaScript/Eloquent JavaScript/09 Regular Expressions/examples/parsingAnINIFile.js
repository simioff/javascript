var string = 'searchengine=http://www.google.com/search?q=$1\nspitefulness=9.7\n\n; comments are preceded by a semicolon...\n; each section concerns an individual enemy\n\n[larry]\nfullname=Larry Doe\ntype=kindergarten bully\nwebsite=http://www.geocities.com/CapeCanaveral/11451\r\n\r\n[gargamel]\r\nfullname=Gargamel\r\ntype=evil sorcerer\r\noutputdir=/home/marijn/enemies/gargamel';

console.log(string);

function parseINI(string) {
	var currentSection = {name: null, fields: []};
	var categories = [currentSection];

	string.split(/\r?\n/).forEach(function(line) {
		var match;

		if (/^\s*(;.*)?$/.test(line)) {
			return;
		} else if (match = line.match(/^\[(.*)\]$/)) {
			currentSection = {name: match[1], fields: []};
			categories.push(currentSection);
		} else if (match = line.match(/^(\w+)=(.*)$/)) {
			currentSection.fields.push({name: match[1], value: match[2]});
		} else {
			throw new Error("Line '" + line + "' is invalid.");
		}
	});

	return categories;
}

console.log(parseINI(string));