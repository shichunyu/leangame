function moveBacklog() {

// Are there urgent cards in backlog? If yes, add card to Dev WIP

	function urgentMoveBacklog(){

	//find if there are urgent cards
		function filterUrgent(card) {
			return card.priority == 'urgent';
		}

		var	urgentCards = []
		urgentCards = backlogCollection.filter(filterUrgent);

			// Debug
			console.log('urgentCards below:');
			console.log(urgentCards);

		// if urgent cards exist, add to dev WIP and remove from backlog	
		if (urgentCards.length != 0) {
			$.merge(devWIPCollection,urgentCards);

				// Debug
				console.log('devWIPCollection below:');
				console.log(devWIPCollection);

			backlogCollection = $.grep(backlogCollection,function(n, i){
				return n.priority == 'urgent';
			}, true);

				// Debug
				console.log('backlogCollection below:');
				console.log(backlogCollection);
		};
	};

	// Is DevWIP empty? If yes, add card from backlog of highest priority
	function noUrgentMoveBacklog(){
		if (devWIPCollection.length==0) {
			devWIPCollection.push(backlogCollection.shift());

			// Debug
			console.log('devWIPCollection ran');
			console.log(devWIPCollection[0]);
			console.log('id: ' + devWIPCollection[0].id);

		} else if (qaWIPCollection.length==0 && devDoneCollection!= 0) {
			qaWIPCollection.push(devDoneCollection.splice(0,1));
			console.log('qaWIPCollection ran');
			console.log(devWIPCollection);
		};
	};

	// execute functions in order
	urgentMoveBacklog();
	noUrgentMoveBacklog();

	// refresh list after all changes are made
	refreshLists();
};

function triageDev() {
	// switch (devWIPCollection.length) {
	// 	case != 0: 
	// 		triageDev();
	// 		break;
	// 	case  == 0: 
	// 		triageBacklog();
	// 		break;
	// };
};	

function moveDevDone() {
	// switch (devDoneCollection.length) {
	// 	case != 0:
	// 	 	var tempArray = devDoneCollection.concat(qaWIPCollection);
	// 	 	qaWIPCollection = tempArray;
	// 		break;
	// 	case  == 0: 
	// 		break;
	// };
};

function organizeCards() {
	moveDevDone(); //First check if there are any cards that needs to be moved to QA WIP
	moveBacklog(); // Next check if there are cards that needs to be moved to Dev WIP
};


