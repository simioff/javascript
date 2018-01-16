var box = {
	locked: true,
	unlock: function() {this.locked = false;},
	lock: function() {this.locked = true;},
	_content: [],
	get content() {
		if (this.locked) 
			throw new Error('Locked!');
	}
};

function withBoxUnlocked(f) {
	box.unlock();
	console.log('unlocked');

	try {
		f();
	} catch (e) {
		console.log(e);
	} finally {
		box.lock();
		console.log('locked');
	}
}

withBoxUnlocked(function() {throw new Error('Hi');});