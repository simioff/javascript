function primitiveMultiply(a, b) {	
	if (Math.random() < 0.5) {
		return a * b;
	} else {
		throw new MultiplicatorUnitFailure('Why not...');
	}
}

function MultiplicatorUnitFailure(message) {
	this.message = message;
	this.stack = (new Error()).stack;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = 'MultiplicatorUnitFailure';

function retry(a, b) {
	try {
		return primitiveMultiply(a, b);
	} catch (e) {
		if (e instanceof MultiplicatorUnitFailure) {
			console.log(e);
			return retry(a, b);
		} else {
			console.log('different error', e);
		}
	}
}

retry(3, 4);