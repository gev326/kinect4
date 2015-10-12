/* MODEL */

var	players    = 0;
var playerTurn = 1;
var board      = [];

var blue   = {'backgroundColor':'rgb(29,242,255)','color':'rgb(29,242,255)'}
var orange = {'backgroundColor': "#FF781D"}


/* ENSURE DOM LOADED */
$(document).ready(function() {
	/* CACHE DOM REFERENCES */
	$board_game = $('tbody tr td');
	$columns    = $('#hover-row');
	
	//var board = document.getElementById('board');
	var playerOne = console.log("Welcome to Kinect4! \nPlayer 1, Please enter your name:");

	if (playerOne !=null) {
		playerOne === playerOne;
		console.log(playerOne);
		players++;
	}

	var playerTwo =	console.log("Welcome to Kinect4! \nPlayer 2, Please enter your name:");
		
	if (playerTwo !=null) {
	    playerTwo === playerTwo
		console.log(playerTwo)
	}

	var player1_Box = document.getElementById('player1');
	var player2_Box = document.getElementById('player2');

	var $player1_Box = $(player1_Box);
		$player1_Box.html(playerOne).css({'text-align': 'center', 'font-weight': 'bold','font-size': '30px'});


	var $player2_Box = $(player2_Box);
		$player2_Box.html(playerTwo).css({'text-align': 'center', 'font-weight': 'bold','font-size': '30px'});
	///////////////


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

	function player_drop() {
	  var $board_game = $('tbody tr td');
	  var $cell_count = $board_game.length;
	  var $column1 = $('#hover_row #col1')


	  $column1.on('click',function(){
	  	if (playerTurn %2 === 0) {
	 	  $board_game.eq($cell_count-7).css(blue).text("x")
	 
	      playerTurn++;
	    } else {
	 	  $board_game.eq($cell_count-14).css(orange);
	  	  playerTurn--;
	    }
	  });
	}

	player_drop();


	render = function() {
		// correctly display hover colors by player
		if (playerTurn === 1) {
			$columns.addClass('p1')
			        .removeClass('p2');
		} else {
			$columns.addClass('p2')
			        .removeClass('p1');
		}
	}

	/* NOW INITIALIZE THE PAGE */
	render();
});


