var req = new XMLHttpRequest();
req.open('GET', 'example/fruit.json', false);
req.send(null);

console.log(req.responseText);
console.log(req.status, req.statusText);
console.log(req.getResponseHeader('content-type'));
console.log(JSON.parse(req.responseText));