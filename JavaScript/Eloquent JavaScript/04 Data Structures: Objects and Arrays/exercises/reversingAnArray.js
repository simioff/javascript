function reverseArray(array) {
	var newArray = [];

	for (var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}

	return newArray;
}

console.log(reverseArray([8, 6, 5, 3, 1]));


function reverseArrayInPlace(array) {
	var aux;

	for (var i = 0; i < array.length / 2; i++) {
		aux = array[i];
		array[i] = array[array.length -1 -i];
		array[array.length -1 -i] = aux;	
	}
}

var arr = [8, 6, 5, 3, 1];

reverseArrayInPlace(arr);
console.log(arr);