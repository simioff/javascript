console.log(/'\d+'/.test("'123'")); // true
console.log(/'\d+'/.test("''")); // false
console.log(/'\d*'/.test("'123'")); // true
console.log(/'\d*'/.test("''")); // true

var neighbor = /neighbou?r/;
console.log(neighbor.test('neighbour')); // true
console.log(neighbor.test('neighbor')); // true

var dataTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dataTime.test('30-1-2003 8:45')); // true

var fiveOrMore = /\d{5,}/;
console.log(fiveOrMore.test('2018')); // false
console.log(fiveOrMore.test('09012018')); // true