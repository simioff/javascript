function range(from, to, step = 1) {
	var range = [];

	var size = Math.abs(to-from) / Math.abs(step);

	while (size >= 0) {
		range.push(from);
		from += step;
		size--;
	}

	return range;
}

function sum(array) {
	var sum = 0;
	
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}

	return sum;
}

var arr = range(1, 10, 2);
console.log(arr);
console.log(sum(arr));

/*
[1, 3, 5, 7, 9]
25
*/

arr = range(10, 1, -2);
console.log(arr);
console.log(sum(arr));

/*
[10, 8, 6, 4, 2]
30
*/