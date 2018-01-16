function countBs(string) {
	var count = 0;

	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) == 'B') {
			count++;
		}
	}

	return count;
}

function countChar(string, char) {
	var count = 0;

	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) == char) {
			count++;
		}
	}

	return count;
}

var string = 'aabbBBcbBdBe';

console.log(countBs(string)); // 4
console.log(countChar(string, 'B')); // 4
console.log(countChar(string, 'b')); // 3
console.log(countChar(string, 'a')); // 2