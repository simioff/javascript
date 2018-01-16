var pile = {
	elements: ['eggshell', 'orange peel', 'worm'],
	get height() {
		return this.elements.lenght;
	},
	set height(value) {
		console.log('Ignoring attempt to set height to', value);
	}
}

console.log(pile.height);
pile.height = 100;

function TextCell(text) {
	this.text = text.split('\n');
}

Object.defineProperty(TextCell.prototype, 'height', {
	get: function() {
		return this.text.length;
	}
});

var cell = new TextCell('no\nway');
console.log(cell.height);
cell.height = 100;
console.log(cell.height);