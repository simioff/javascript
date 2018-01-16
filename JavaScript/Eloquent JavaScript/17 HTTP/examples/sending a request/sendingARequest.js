var req = new XMLHttpRequest();
req.open('GET', 'example/data.txt', false);
req.send(null);

console.log(req.responseText);
console.log(req.status, req.statusText);
console.log(req.getResponseHeader('content-type'));