var match = /\d+/.exec('one two 100');
console.log(match);
console.log(match.index);

console.log('one two 100'.match(/\d+/));

var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec('bad'));
console.log(/(\d)+/.exec('123'));