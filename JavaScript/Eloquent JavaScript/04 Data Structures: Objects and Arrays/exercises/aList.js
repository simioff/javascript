function arrayToList(array) {
	var list = {
		value : array[0],
		rest : null
	};

	var last = list;

	for (var i = 1; i < array.length; i++) {
		last.rest = {
			value : array[i],
			rest : null
		};
		last = last.rest;
	}

	return list;
}

function listToArray(list) {
	var array = [];

	while (list != null) {
		array.push(list.value);
		list = list.rest;
	} 

	return array;
}

function prepend(element, list) {
	element.rest = list;
	return element;
}

function nth(list, index) {
	var localList = list;

	for (var i = 0; i < index; i++) {
		if (i == index -1) {
			return localList;
		}
		localList = localList.rest
	}

	return
}

var list = arrayToList([1,2,3,6,8]);
console.log(list);
console.log(listToArray(list));
console.log(prepend({
	value : -1,
	rest : null
}, list));
console.log(nth(list, 3));
