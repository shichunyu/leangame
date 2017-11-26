function createGame() {
  	// Create Game Object & set the game number object
	gameCollection.push(new Game());
	gameCollection[gameCollection.length-1].number = gameCollection.length;

  	// Create new Stats Object in Game Stats Array
  	currentGame = gameCollection[gameCollection.length-1];
  	currentGame.stats.push(new Day);

	  	// Debug
	  	console.log(gameCollection[0].stats);
	  	console.log('Number of Days in First Game Stats:' + gameCollection[0].stats.length);
	  	console.log('Number of Games:' + gameCollection.length);

	// Update UI Stats
	updateUIStats();

	dayNow = gameCollection[gameCollection.length-1].day;
};

function newDayUpdate() {
	refreshLists();
};

// Onload Function
$(function() {
  // Script check
  console.log("script is running");

  	// Hide Extra Buttons
  	$('#rollButton').hide();
  	$('#endTurn').hide();
  	$('#organize').hide();

  	// Start Game On-Click
  	$('#submitNames').click(function() {

		// Assign Num of Cards Per Player
		numCardsDesiredPer = $('#numCardsDesired').val();
		Number(numCardsDesiredPer);
		numPlayers = $('#numPlayersDesired').val();
		Number(numPlayers);

		// Create Game
		createGame();

		// Remove Start Game Button
	  	$('#startGame').remove();

		// Set Up Board
		generateInitialBacklog();
		generateSwimlanes();
		refreshLists();

		// Show Next Day Button
		$('#endTurn').show();

  	});

  	// Roll the Dice
 	 $('#rollButton').click(function() {

	  	function rollDice() {
			var randomNum = Math.floor(Math.random() * 6) + 1;
			console.log(randomNum);
			rollResult = randomNum;
		
				// Debug
				console.log('rolled a: ' + rollResult);
		};

		rollDice();
  	});

	// Replace Roll Modal Text
	$('#rollModal').on('shown.bs.modal', function(){
		$('span.rollAmount').append(rollResult);
	});

	// Replace Roll Modal Text
	$('#endTurnModal').on('shown.bs.modal', function(){
	  	$('#contentInsert').append(contentCollection[dayNow]);
	});

	// Organize Button
	$('#organize').click(function(){
		organizeCards();
		$('#rollButton').show();
		$('#organize').hide();
	});
});

// Start New Day On-Click
$(document).on('click', '#startDay', function(){
	$('#rollButton').hide();
	$('#endTurn').hide();
	$('#organize').show();

	newDayUpdate();
	generateUrgent();
	generateUrgent();
	generateFixed();
});