var squareWorker = new Worker('code/squareWorker.js');

squareWorker.addEventListener('message', function(event) {
	console.log('The worker responded:', event.data);
});

squareWorker.postMessage(10);
squareWorker.postMessage(24);