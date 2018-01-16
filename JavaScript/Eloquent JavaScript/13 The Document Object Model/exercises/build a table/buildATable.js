var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function buildTable(array) {
	var headers = Object.keys(array[0]);
	
	var headerCells = [];
	headers.forEach(function(header) {
		headerCell = createNode('th', [header]);
		headerCells.push(headerCell);
	});

	var headerRow = createNode('tr', headerCells);

	var rows = [headerRow];

	array.forEach(function(el) {
		var cells = [];

		headers.forEach(function(header) {
			var cell = createNode('td', [el[header]]);

			cells.push(cell);
		});

		var row = createNode('tr', cells);
		rows.push(row);

	});

	var table = createNode('table', rows);
	
	console.log(table);

	document.body.appendChild(table);
}

function createNode(type, children) {
	var node = document.createElement(type);

	for (var i = 0; i < children.length; i++) {
		var child = children[i];

		if (typeof child == 'string' || typeof child == 'number') {
			child = document.createTextNode(child);
		}
		node.appendChild(child);
	}

	return node;
}

function styleNumberCells() {
	var cellNodes = document.getElementsByTagName('td');
	var cells = Array.prototype.slice.call(cellNodes, 0);
	var numberCells = cells.filter(function(cell) {
		return !isNaN(cell.innerText);
	});

	numberCells.forEach(function(cell) {
		cell.style.textAlign = 'right';
	});
}

buildTable(MOUNTAINS);
styleNumberCells();