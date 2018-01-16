var size = Number(prompt('Insert the chess board size', 'size'));
var chessBoard = '';

for (var i = 0; i < size; i++) {
	for (var j = 0; j < size; j++) {
		if ((i + j) % 2 == 0) {
			chessBoard += ' ';
		} else {
			chessBoard += '#';
		}
	}
	chessBoard += '\n';
}

console.log(chessBoard);

/* for size == 8
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/