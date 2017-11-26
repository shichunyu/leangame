// Generate Initial Backlog
function generateInitialBacklog() {
var c = 0; // counter to avoid inside loop overwriting cards

	// Generate Cards for numPlayers
	for (var i=0; i<numPlayers; i++) {
		 

		for (var j=0; j<numCardsDesiredPer; j++) {
			var a = c+j; // increase counter every time loop completes

			backlogCollection[a] = new Card();
			backlogCollection[a].owner = i+1;
			backlogCollection[a].id = lastCardID;
			lastCardID++;

		};

		c = c + Number(numCardsDesiredPer);

	};

		// Debug
		console.log('Initial Backlog Generated');
		console.log(backlogCollection);
};

// Generate the number of swimlanes based on the number of players
function generateSwimlanes() {

	// Create swimlanes
	for (i=0; i<numPlayers; i++) {
		var a = i+1;
		var b = i+2


		$('')

		$('#bigColumn2').append(swimlanesCode);
		$('#bigColumn2 > div:nth-child('+b+')').attr('id','player_'+a+'swimlane');
	
		// Create columns in swimlanes
		for (j=0; j<stages.length; j++) {
			var x = j+1

			$('#player_'+a+'swimlane').append(swimlanesStagesCode);
			$('#player_'+a+'swimlane div:nth-child('+x+')').attr('id','player_'+a+stages[j]);

			if (j>0) {
				$('#player_'+a+'swimlane div:nth-child('+x+')').addClass('border_left_dashed');
			};
		};
	};

	// Add colors
	$('#bigColumn2 > div:nth-child(odd)').addClass('white');
	$('#bigColumn2 > div:nth-child(even)').addClass('blue');

	// Limit height of backlog
	var swimlanesHeight = numPlayers * 300;
	var totalHeight = swimlanesHeight - numPlayers;
	$('#backlog').css({"max-height": totalHeight + 'px'});
};

function generateUrgent() {

	// Generate Object
	backlogCollection.push(new Card());
	lastCardID++;

	backlogCollection[backlogCollection.length-1].id = lastCardID;
	backlogCollection[backlogCollection.length-1].priority = 'urgent';

		// Debug
		console.log('backlog length: ' + backlogCollection.length);
		console.log(backlogCollection);
		console.log('urgent card below');
		console.log(backlogCollection[backlogCollection.length-1]);

};

function generateFixed() {

	// Generate Object
	backlogCollection.push(new Card());
	lastCardID++;

	backlogCollection[backlogCollection.length-1].id = lastCardID;
	backlogCollection[backlogCollection.length-1].priority = 'fixed';

		// Debug
		console.log('backlogCollection length: ' + backlogCollection.length);
		console.log(backlogCollection);

};