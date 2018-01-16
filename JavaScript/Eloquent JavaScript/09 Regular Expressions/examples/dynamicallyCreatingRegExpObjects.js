var name = 'dea+hl[]rd';
var text = 'This dea+hl[]rd guys is super annoying.';
var escaped = name.replace(/[^\w\s]/g, '\\$&');
var regexp = new RegExp('\\b(' + escaped + ')\\b', 'gi');
console.log(text.replace(regexp, '_$1_'));