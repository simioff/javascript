var carCatPattern = /ca(r|t)/;
console.log(carCatPattern.test('aacataa'));
console.log(carCatPattern.test('aacaraa'));

var popPropPattern = /pr?op/;
console.log(popPropPattern.test('aaapropaaa'));
console.log(popPropPattern.test('aaapopaaa'));

var ferrPattern = /ferr(et|y|ari)/;
console.log(ferrPattern.test('aaferretaa'));
console.log(ferrPattern.test('aaferryaa'));
console.log(ferrPattern.test('aaferrariaa'));

var iousWordPattern = /(\b\w+ious\b)/;
console.log(iousWordPattern.test('cautious'));
console.log(iousWordPattern.test('aaaacautiousaaaa')); // false
console.log(iousWordPattern.test('aaaacautious aaaa'));
console.log(iousWordPattern.test('aaaa cautious aaaa'));

var whiteSpacePattern = /\s(\.|,|:|;)/;
console.log(whiteSpacePattern.test('aaa .gg'));
console.log(whiteSpacePattern.test('aaa   , gg'));
console.log(whiteSpacePattern.test('aaa\n:55'));
console.log(whiteSpacePattern.test('aaa\r\n;  '));

var wordLongerPattern = /(\b[a-zA-Z]{6,}\b)/;
console.log(wordLongerPattern.test('RegExr v3 was created by gskinner.com'));

var wordWithoutEPattern = /\b([^e\s\W]+)\b/g; 
console.log('RegExr v3 was created by gskinner.com'.match(wordWithoutEPattern));