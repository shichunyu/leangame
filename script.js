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
		numPlayers = $('#numPlayersDesired').val();

		// Create Game
		createGame();

		  	// Debug
			console.log('numCardsDesired: ' + numCardsDesired);

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