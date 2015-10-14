var development = true; // in development mode!

/* MODEL */

var	players    = 0;
var latestTurn;
var playerTurn = 1;
var board      = {
	column1: [null, null, null, null, null, null,null],
	column2: [null, null, null, null, null, null,null],
	column3: [null, null, null, null, null, null,null],
	column4: [null, null, null, null, null, null,null],
	column5: [null, null, null, null, null, null,null],
	column6: [null, null, null, null, null, null,null],
	column7: [null, null, null, null, null, null,null]
};
var scoreP1    = 0;
var scoreP2    = 0;

var blue   = {'backgroundColor':'rgb(29,242,255)','color':'rgb(29,242,255)'}
var orange = {'backgroundColor': "#FF781D"}




	//CHECK FOR COLUMN WIN!


	function winClm () {
	var currentColumn = board.column1;
	var pieceCounter = 0;	 
	
	for(var i = 0; i <= board.column1.length; i++){
		if(board.column1[i] === 'p1'){
			pieceCounter +=1;
			console.log(pieceCounter,board.column1[i],i);
		}
			else {
				pieceCounter = 0;
				console.log(pieceCounter);

			}

		if (pieceCounter === 4) {
			scoreP1++;
			return true;
		}
	} 
}


// 	function winColumn () {
// 	var pieceCounter = 0;
// 	for(var i = 0; i <= board.column1.length ; i++){
// 		for(var j = 0; j < 4; j++){
// 			if(board.column1[[i]+1] === 'p1'){
// 				alert("P1 WINS!") 
// 			}
// 		}
// 	}
// }
// winColumn();



//  var getColumnDown = function () {
// // //parseInt(latestTurn[0][latestTurn[0].length-1])
// var changeY = latestTurn[0];
// var checkDown = board[latestTurn[0]][latestTurn[1]];
// 	for(var i = latestTurn[1] + 1, j = 0; j < 3; i--, j++){
// 		if (board[latestTurn[0]][changeY + 1] === null) checkDown += "__";
//  			checkDown += board[latestTurn[0]][i+1]
//  }
// return checkDown;
//  } //
	

/* ENSURE DOM LOADED */
$(document).ready(function() {
	/* CACHE DOM REFERENCES */
	$board_game = $('tbody tr td');
	$columns    = $('#hover-row');
	$droppableBoxes = $('.drop');
	
	/* SET UP GAME */
	//var board = document.getElementById('board');
	if (!development) {
		var playerOne = prompt("Welcome to Kinect4! \nPlayer 1, Please enter your name:");

		if (playerOne !=null) {
			playerOne === playerOne;
			console.log(playerOne);
			players++;
		}

		var playerTwo =	prompt("Welcome to Kinect4! \nPlayer 2, Please enter your name:");
			
		if (playerTwo !=null) {
		    playerTwo === playerTwo
			console.log(playerTwo)
		}

		var player1_Box = document.getElementById('player1');
		var player2_Box = document.getElementById('player2');

		var $player1_Box = $(player1_Box);
			$player1_Box.html(playerOne + "\nScore: " + scoreP1).css({'text-align': 'center', 'font-weight': 'bold','font-size': '30px'});
			


		var $player2_Box = $(player2_Box);
			$player2_Box.html(playerTwo + "\nScore: " + scoreP2).css({'text-align': 'center', 'font-weight': 'bold','font-size': '30px'});
	} else {
	playerOne = 'Gev';
	playerTwo = 'Veg';
	 }
	///////////////





	/* ADD EVENT LISTENERS */
	$droppableBoxes.on('click', function(event) {
		var currentPlayersName;
		if (playerTurn === 1) {
			currentPlayersName = playerOne;
		} else {
			currentPlayersName = playerTwo;
		}

		console.log('Hi ' + currentPlayersName + '!');

		// drop a box
		// x get the column to drop in
		// x find the last free spot in the column
		// put that player's piece in that spot
		var dropColumn  = event.target.id;
		var modelColumn = board[dropColumn];

		var freeSpot = 6;


		for (var i = 0; i < modelColumn.length ; i++) {
			if (modelColumn[i] !== null) {
				freeSpot = i - 1;
				//latestTurn = [dropColumn,freeSpot];
				//console.log(latestTurn);
			    break;
			}
		};

		console.log(freeSpot);

		// check if column is full
		if (freeSpot === 0) {
			// TODO: DO SOMETHING!
			alert("column is full!")
		} else {
			modelColumn[freeSpot] = "p" + playerTurn;
		}

		// switch turns
		if (playerTurn === 1) {
			playerTurn = 2;
		} else {
			playerTurn = 1;
		}

		// re-render!

		render();
		// checkColumn();
	});




// 		function check_winner(player) { 
//   if (board_check[0] === "X" && board_check[1] === "X" && board_check[2] === "X" ||
//       board_check[3] === "X" && board_check[4] === "X" && board_check[5] === "X" ||
//       board_check[6] === "X" && board_check[7] === "X" && board_check[8] === "X" ||
//       board_check[1] === "X" && board_check[4] === "X" && board_check[7] === "X" ||
//       board_check[2] === "X" && board_check[5] === "X" && board_check[8] === "X" ||
//       board_check[2] === "X" && board_check[4] === "X" && board_check[6] === "X" ||
//       board_check[0] === "X" && board_check[4] === "X" && board_check[8] === "X" ||
//       board_check[0] === "X" && board_check[3] === "X" && board_check[6] === "X") {

//   	alert("X wins!");
//     resetboard();
//   }

//   if (board_check[0] === "O" && board_check[1] === "O" && board_check[2] === "O" ||
//       board_check[3] === "O" && board_check[4] === "O" && board_check[5] === "O" ||
//       board_check[6] === "O" && board_check[7] === "O" && board_check[8] === "O" ||
//       board_check[1] === "O" && board_check[4] === "O" && board_check[7] === "O" ||
//       board_check[2] === "O" && board_check[5] === "O" && board_check[8] === "O" ||
//       board_check[2] === "O" && board_check[4] === "O" && board_check[6] === "O" ||
//       board_check[0] === "O" && board_check[4] === "O" && board_check[8] === "O" ||
//       board_check[0] === "O" && board_check[3] === "O" && board_check[6] === "O") {

//     alert("O wins!");
//     resetboard();
//   }
// }



	// var hover_piece = document.getElementById('hover_row');
	// var $hover_piece = $(hover_piece);


	// $hover_piece.mouseover
	// 	(function() {
	// 		$(player1_Box).append($player1_Box); });


	// 	$('#hover_row #col1').on('click',function(){
	// 	$('tbody tr:nth-child(6) td:nth-child(1)')
	// 	.css('backgroundColor','#1DF2FF').addClass('filled');
	// 	playerTurn++;
	// 	$('#hover_row #col1').on('click',function(){
	// 	$('tbody tr:nth-child(6) td:nth-child(1)')
	// 	.css('backgroundColor','#1DF2FF').addClass('filled');


	// })});

	// function player_drop() {
	//   var $board_game = $('tbody tr td');
	//   var $cell_count = $board_game.length;
	//   var $column1 = $('#hover_row #col1')


	//   $column1.on('click',function(){
	//   	if (playerTurn %2 === 0) {
	//  	  $board_game.eq($cell_count-7).css(blue).text("x")
	 
	//       playerTurn++;
	//     } else {
	//  	  $board_game.eq($cell_count-14).css(orange);
	//   	  playerTurn--;
	//     }
	//   });
	// }

	// player_drop();

	/* RENDER */
	render = function() {
		// correctly display hover colors by player
		if (playerTurn === 1) {
			$columns.addClass('p1')
			        .removeClass('p2');
		} else {
			$columns.addClass('p2')
			        .removeClass('p1');
		}

		var $domBox,
		    modelBox;
		
		// correctly display boxes based on model

		// loop over the column properties in the model
		for (var columnName in board) {

		  // for each column, loop over the cells/rows in the column
		  for (var i = 0; i < board[columnName].length; i++) {
		  	// console.log(columnName, i, " -> " + board[columnName][i]);

		  	// get the value of the cell from the model
		  	modelBox = board[columnName][i]
		  	$domBox = $('[data-row="' + i + '"] td:nth-child(' + columnName.slice(-1) + ')');
		  	$domBox.addClass(modelBox);
		  	$domBox.addClass("owner");
		  };
		}
	};

	/* NOW INITIALIZE THE PAGE */
	render();
});


	


