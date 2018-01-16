function noisy(func) {
	return function(arg) {
		console.log('calling with', arg);
		var value = func(arg);
		console.log('called with', arg, ', got', value);
		return value;
	}
}

noisy(Boolean)(0); 
noisy(Boolean)('ma-ta'); 