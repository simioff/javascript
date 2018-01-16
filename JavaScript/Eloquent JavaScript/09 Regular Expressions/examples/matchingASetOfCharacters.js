console.log(/[0123456789]/.test('in 1992')); // true
console.log(/[0-9]/.test('in 1992')); // true

var dataTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dataTime.test('30-01-2003 15:20')); // true
console.log(dataTime.test('30-ja-2003 15:20')); // false

var notBinary = /[^01]/;
console.log(notBinary.test('1100100010100110')); // false
console.log(notBinary.test('1100100010200110')); // true