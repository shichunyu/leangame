// Game Prototype
function Game(number, day, players, turn, stats) {
	this.number = 0;
	this.day = 0;
	this.players = [],
	this.turn = 0;
	this.stats = [];
};

// Player Prototype
function Player(name) {
	this.name = null;
};

//Day Prototype
function Day(totalCards, devWorkCards, devDoneCards, qaWorkCards, doneCards) {
    this.totalCards = 0;
    this.devWorkCards = 0;
    this.devDoneCards = 0;
    this.qaWorkCards = 0;
    this.doneCards = 0;
};

//Card Prototype
function Card(id, owner, stageDevWork, stageTestWork, touchPoints, blocked, startDate, endDate, priority) {
    this.id = null;
    this.owner = null;
    this.stageDevWork = 0;
    this.stageTestWork = 0;
    this.touchPoints = 0;
    this.blocked = false;
    this.startDate = null;
    this.endDate = null;
    this.priority = 'normal';
};