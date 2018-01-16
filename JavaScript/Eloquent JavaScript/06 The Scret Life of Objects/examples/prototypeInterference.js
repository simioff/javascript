var map = {};

function storePhi(event, phi) {
	map[event] = phi;
}

storePhi('pizza', 0.069);
storePhi('tree', -0.081);
for (var name in map) {
	console.log(name);
}

Object.prototype.nonsense = 'bla';
for (var name in map) {
	console.log(name);
}

console.log('nonsense' in map);
// -> true
console.log('toString' in map);
// -> true

delete Object.prototype.nonsense;

Object.defineProperty(Object.prototype, 'hiddedNonsense', 
	{enumerable: false, value: 'bla'});
for (var name in map) {
	console.log(name);
}

console.log(map.hiddedNonsense);

console.log(map.hasOwnProperty('nonsense'));
// -> false

console.log(map.hasOwnProperty('toString'));
// -> false