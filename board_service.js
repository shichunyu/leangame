function updateUIStats() {
	var backlogCollectionCount = backlogCollection.length;
	
	dayNow = gameCollection[gameCollection.length-1].day

	$('#gameNumberCounter').text(gameCollection[gameCollection.length-1].number);
	$('#totalCardsCounter').text(lastCardID-1);
	$('#dayNumberCounter').text(dayNow);
	$('#whoseTurn').text('player ' + gameCollection[gameCollection.length-1].turn + '\'s Turn');

	$('div#backlogTitle h3 span.replace').text(backlogCollection.length);
	$('div#devWIPTitle h3 span.replace').text(devWIPCollection.length);
	$('div#devDoneTitle h3 span.replace').text(devDoneCollection.length);
	$('div#qaWIPTitle h3 span.replace').text(qaWIPCollection.length);
	$('div#doneTitle h3 span.replace').text(doneCollection.length);
};

// empty lists
function emptyLists() {
	// empty backlog
	$('div#backlog').empty();
};


// Generate Cards
function refreshCards() {

	for (i=0; i<backlogCollection.length; i++) {
		var targetCard = backlogCollection[i];
		var cardNum = backlogCollection[i].id;
		$(cardCode).appendTo('div#backlog');
		$('#null').attr('id',cardNum);
		$('div#' + cardNum + ' span.owner').append('Player ' + targetCard.owner);
		$('div#' + cardNum + ' span.cardID').append(targetCard.id);

		switch (targetCard.priority) {
			case 'normal': 
				priorityClass = 'normalPriority';
				break;
			case 'urgent': 
				priorityClass = 'urgentPriority';
				break;
			case 'fixed date': 
				priorityClass = 'fixedDatePriority';
				break;
		};

		$('div#' + cardNum + ' span.priority').html(targetCard.priority).addClass(priorityClass);	
		
	};

	console.log('refreshCards ran');
};

function refreshLists() {

	emptyLists(); // clear out each list and re-generate all cards
	refreshCards(); // generate new cards based on updated list arrays
	updateUIStats(); // update numbers on the header

		// Debug
		console.log('refreshLists ran');
	
	// replace "0" in all cards with appropriate updated values
};