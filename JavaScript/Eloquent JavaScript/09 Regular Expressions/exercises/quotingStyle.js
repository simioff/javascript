var story = 'bla bla \'hey man, aren\'t you there?\' why not?';

console.log(story.replace(/(\W+?\'|\'\W+?')/g, '"'));
// not well implemented, it shouldn't replace the white space
