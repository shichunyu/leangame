function createGame() {
  	// Create Game Object
	gameCollection.push(new Game());
	gameCollection[gameCollection.length-1].number = gameCollection.length;

  	// Create new Stat Object in Game Stats Array
  	currentGame = gameCollection[gameCollection.length-1];
  	currentGame.stats.push(new Day);

	  	// Debug
	  	console.log(gameCollection[0].stats);
	  	console.log('Number of Days in First Game Stats:' + gameCollection[0].stats.length);
	  	console.log('Number of Games:' + gameCollection.length);

	// Update UI Stats
	updateUIStats();
};

function newDayUpdate() {
	refreshLists();
};