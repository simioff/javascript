var arrays = [[2,3,4],['a','b','c'],['i','iii','iv']];

console.log(arrays.reduce(function(accumulator, current) {
	return accumulator.concat(current);
}));
// [2, 3, 4, "a", "b", "c", "i", "iii", "iv"]