var weekDay = function() {
	var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
		'Thursday', 'Friday', 'Saturday'];

	return {
		name: function(number) { return names[number]; },
		number: function(name) { return names.indexOf(name); }
	};
}();

console.log(weekDay.name(weekDay.number('Sunday')));

(function(exports) {
	var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
		'Thursday', 'Friday', 'Saturday'];

	exports.name = function(number) { return names[number]; };
	exports.number = function(name) { return names.indexOf(name); }
})(this.weekDay2 = {});

console.log(weekDay2.name(weekDay2.number('Saturday')));