# Ayoayo Game Implementation

A text-based implementation of the traditional Ayoayo game, a Mancala-style board game originating from West Africa.

## Game Rules

Ayoayo is a two-player game where the objective is to collect as many seeds in your store as possible. The player with the most seeds in their store at the end of the game wins.

### Basic Rules:
- Each player has 6 pits and 1 store
- Each pit starts with 4 seeds
- Players take turns picking up all seeds from one of their pits
- Seeds are distributed counter-clockwise, one seed per pit
- When passing your own store, add one seed to it
- Players can only choose pits on their side of the board

### Special Rules:
1. If the last seed lands in your store, you get another turn
2. If the last seed lands in one of your empty pits, you capture all seeds from the opposite pit

### Game End:
- The game ends when one player has no seeds in their pits
- The other player collects remaining seeds in their store
- The player with the most seeds in their store wins

## Project Structure

```
.
├── Ayoayo.js      # Main game implementation
├── test.js        # Example game play
└── reflection.txt # Development process documentation
```

## Requirements

- Node.js (version 12 or higher)

## Installation

1. Clone this repository
2. Navigate to the project directory
3. No additional dependencies required

## How to Run

Run the example game:
```bash
node test.js
```

## Usage

### Creating a Game
```javascript
const Ayoayo = require('./Ayoayo');
const game = new Ayoayo();
```

### Creating Players
```javascript
const player1 = game.createPlayer("Player1Name");
const player2 = game.createPlayer("Player2Name");
```

### Playing the Game
```javascript
// Make a move: playerIndex (1 or 2), pitIndex (1-6)
game.playGame(1, 3);

// Print current board state
game.printBoard();

// Check game status
console.log(game.returnWinner());
```

## Output Format

The game provides text-based output showing:
- Current state of all pits
- Number of seeds in each player's store
- Game status and winner information

Example output:
```
player1:
store: 2
[ 0, 0, 3, 7, 7, 6 ]
player2:
store: 3
[ 4, 0, 1, 1, 7, 7 ]
Game has not ended
```

## Features

- Full implementation of Ayoayo game rules
- Text-based interface
- Error handling for invalid moves
- Special rules implementation
- Game state tracking
- Winner determination

## Development

The project was developed with a focus on:
- Clean, maintainable code
- Proper error handling
- Clear game state management
- Accurate implementation of game rules

## License

This project is open source and available for educational purposes.

## Acknowledgments

Based on the traditional Ayoayo game from West Africa. 