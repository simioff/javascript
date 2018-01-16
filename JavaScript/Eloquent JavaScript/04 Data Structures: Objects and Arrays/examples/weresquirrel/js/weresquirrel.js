function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt(
				(table[2] + table[3]) *
				(table[0] + table[1]) *
				(table[1] + table[3]) *
				(table[0] + table[2])
			);
}

function hasEvent(event, entry) {
	return entry.events.indexOf(event) != -1;
}

function extractTable(event, journal) {
	var table = [0, 0, 0, 0];

	for (var i = 0; i < journal.length; i++) {
		var entry = journal[i];
		var index = 0;

		if (hasEvent(event, entry)) {
			index += 1;
		}
		if (entry.squirrel) {
			index += 2;
		}
		table[index]++;
	}

	return table;
}

function gatherCorrelations(journal) {
	var phis = {};

	for (var i  = 0; i < journal.length; i++) {
		var events = journal[i].events;

		for (var j = 0; j < events.length; j++) {
			var event = events[j];

			if (!(event in phis)) {
				phis[event] = phi(extractTable(event, journal));
			}
		}
	}

	return phis;
}