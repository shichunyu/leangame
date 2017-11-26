// Objects
var	lists = [backlogCollection, devWIPCollection, devDoneCollection, qaWIPCollection, doneCollection];
var stages = ['devWIP','devDone','QAWIP','done'];

// Collections
var gameCollection = []; // Collection of ongoing games
var backlogCollection = []; // Collection of all cards in backlog
var devWIPCollection = []; // Collection of all cards in devWIP
var devDoneCollection = []; // etc.
var qaWIPCollection = [];
var doneCollection = [];

// Global Counters
var numPlayers = null;
var numCardsDesiredPer = null;
var rollResult = null;
var lastCardID = 1;