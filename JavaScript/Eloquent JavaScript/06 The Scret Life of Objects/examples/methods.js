function speak(line) {
	console.log('The ' + this.type + 
		' rabbit says \'' + line + '\'');
}

var whiteRabbit = {
	type: 'white',
	speak: speak
};

var fatRabbit = {
	type: 'fat',
	speak: speak
};

whiteRabbit.speak('Hi!');
fatRabbit.speak('Bye!');