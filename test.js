const Ayoayo = require('./Ayoayo');

// Create a new game
const game = new Ayoayo();

// Create players
const player1 = game.createPlayer("Jensen");
const player2 = game.createPlayer("Brian");

// Play some moves
console.log(game.playGame(1, 3));
game.playGame(1, 1);
game.playGame(2, 3);
game.playGame(2, 4);
game.playGame(1, 2);
game.playGame(2, 2);
game.playGame(1, 1);

// Print the current board state
game.printBoard();

// Check the winner
console.log(game.returnWinner()); 