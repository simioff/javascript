var pattern = /y/g;
pattern.lastIndex = 3;

var match = pattern.exec('xyzzy');
console.log(match.index); // 4
console.log(pattern.lastIndex); // 5

var digit = /\d/g;
console.log(digit.exec('here it is: 1')); // ['1']
console.log(digit.exec('and now: 1')); // null

console.log('Banana'.match(/an/g));