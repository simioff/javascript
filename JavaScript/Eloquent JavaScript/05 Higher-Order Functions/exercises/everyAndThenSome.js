function every(array, predicate) {
	for (var i = 0; i < array.length; i++) {
		if (!predicate(array[i])) {
			return false;
		}
	}

	return true;
}

function some(array, predicate) {
	for (var i = 0; i < array.length; i++) {
		if (predicate(array[i])) {
			return true;
		}
	}

	return false;	
}

var arr = [-10, -1, 0, 1, 3, 6, 40, 99];

var positive = function(el) {
	return el >= 0;
};

var in100Range = function(el) {
	return Math.abs(el) < 100;
};

var isString = function(el) {
	return typeof el == 'string';
}

console.log(every(arr, positive)); // false
console.log(some(arr, positive)); // true
console.log(every(arr, in100Range)); // true
console.log(some(arr, in100Range)); // true
console.log(every(arr, isString)); // false
console.log(some(arr, isString)); // false