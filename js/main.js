//var development = true; // in development mode!

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
var lastTurn   = [];
var blue       = {'backgroundColor':'rgb(29,242,255)','color':'rgb(29,242,255)'}
var orange     = {'backgroundColor': "#FF781D"}




	//CHECK FOR COLUMN WIN


function winClm (player) {

	var pieceCounter = 0;	 
	//for (var j=0; j<6; j++)
	for (var j=0; j<= 6;j++){

		for(var i = 0; i <= 6; i++){
			
		if(board['column' + (j+1)][i] === player){
		
		pieceCounter +=1;
			//console.log(board.column[j],[i]);
		}
			
			else{
				pieceCounter = 0;
				//console.log(pieceCounter,board.column1[i],i);		
			}

			if (pieceCounter === 4) {
			// MAKE SURE TO ADD SCORE BOARD! scoreP1++;
			return true;
			
				
			}
		
		} 
	
	}
		return false;


}

	// CHECK FOR ROW WIN

function winRow (player) {

	var pieceCounterRow = 0;

	for (var i = 6; i > 0; i--){

		for (var j=0; j <= 6;j++){
			//console.log([j]);
		if(board["column" + (j+1)][i] === player) {		
			
			pieceCounterRow +=1;
			
		}
			
			else {
				pieceCounterRow = 0;
				//console.log(pieceCounter,board.column1[i],i);		
			}

			if (pieceCounterRow === 4) {
			
			// MAKE SURE TO ADD SCORE BOARD!
			return true;
			
			
			}
		} 
	}
			return false;
}


	// CHECK FOR DIAGONAL WIN - BOTTOM LEFT TO TOP RIGHT AXIS

 function winDiagonalBottomLeftTopRight () {

	var BottomLeftTopRight = '';
	var y = parseInt(lastTurn[0].slice(-1));
	var x = parseInt(lastTurn[1]);
	console.log(x,y)
	while(x < 6 && y > 1){
	
		y = y-1;
		x = x+1;

	}
	console.log(x,y);

	while(y < 8 && x > 0) {
		
		if (board["column" + y][x] === null) {
			BottomLeftTopRight += " ____ ";
		}
		
		else {
			BottomLeftTopRight += board["column" + y][x];
		}
		
		y=y+1;
		x=x-1;
		console.log(x,y,lastTurn);
	}
	console.log(BottomLeftTopRight);
		if (BottomLeftTopRight.indexOf('p1p1p1p1') > -1) {
			return "p1 wins";
		}

		else if (BottomLeftTopRight.indexOf('p2p2p2p2') > -1){
			return "p2 wins";
		}

		else {
		return false;
		}
	
 }

 // CHECK FOR DIAGONAL WIN - BOTTOM RIGHT TO TOP LEFT AXIS

 function winDiagonalBottomRightTopLeft (){	

 	var BottomRightTopLeft = '';
 	var y = parseInt(lastTurn[0].slice(-1));
	var x = parseInt(lastTurn[1]);
	console.log(x,y);
	while (x > 1 && y > 1){ 	
			
		y= y-1;
		x= x-1;
	}
	console.log(x,y);
	while (x < 6 && y < 8){
		if (board["column" + y][x] === null) {
			BottomRightTopLeft += " ____ ";
		}
		else {
			BottomRightTopLeft += board["column" + y][x];
		}
		y=y+1;
		x=x+1;
	}
	console.log(x,y, BottomRightTopLeft);
	
	if (BottomRightTopLeft.indexOf('p1p1p1p1') > -1) {
		return "p1 wins";
	}

	else if (BottomRightTopLeft.indexOf('p2p2p2p2') > -1){
		return "p2 wins";
	}
	else{
	return false;
	}
}


	// CHECK HOW PLAYER WON

function getWinner () {

 if(winClm || winRow || winDiagonalBottomRightTopLeft || winDiagonalBottomLeftTopRight){
 	alert("you Win!");
 }


}	


function reset () {
	
}

/* ENSURE DOM LOADED */
$(document).ready(function() {
	/* CACHE DOM REFERENCES */
	$board_game = $('tbody tr td');
	$columns    = $('#hover-row');
	$droppableBoxes = $('.drop');
	
	/* SET UP GAME */
	//var board = document.getElementById('board');
	//if (!development) {
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
			$player1_Box.html(playerOne + "<br>" + "\nScore: " + scoreP1).css({'text-align': 'center', 'font-weight': 'bold','font-size': '30px'});
			


		var $player2_Box = $(player2_Box);
			$player2_Box.html(playerTwo + "<br>"+ "\nScore: " + scoreP2).css({'text-align': 'center', 'font-weight': 'bold','font-size': '30px'});
	//} else {
	//playerOne = 'Gev';
	//playerTwo = 'Veg';
	//}
	///////////////





	/* ADD EVENT LISTENERS */
	$droppableBoxes.on('click', function(event) {
		var currentPlayersName;
		if (playerTurn === 1) {
			currentPlayersName = playerOne;
		} else {
			currentPlayersName = playerTwo;
		}

		//console.log('Hi ' + currentPlayersName + '!');

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
				//console.log(modelColumn,)
				lastTurn = [dropColumn,freeSpot];
				//latestTurn = [dropColumn,freeSpot];
				//console.log(latestTurn);
			    break;
			}
				lastTurn = [dropColumn,freeSpot];
		};

		//console.log(lastTurn);
		//console.log(freeSpot);

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
		
	});


	
	
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
		  	//console.log(columnName, i, " -> " + board[columnName][i]);
		  	//console.log(board[columnName].length)
		  	
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




