# 🎮 Ayoayo Game Implementation

A text-based implementation of the traditional Ayoayo game, a Mancala-style board game originating from West Africa. This project provides a complete implementation of the game rules with a simple text-based interface.

## 📋 Table of Contents
- [Game Overview](#game-overview)
- [Game Rules](#game-rules)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## 🎲 Game Overview

Ayoayo is a strategic two-player board game where players compete to collect the most seeds in their store. The game combines elements of strategy and chance, making it both challenging and engaging.

### Key Features
- ✨ Full implementation of traditional Ayoayo rules
- 🎯 Text-based interface for easy gameplay
- 🔄 Special rules implementation
- ✅ Comprehensive error handling
- 📊 Game state tracking
- 🏆 Winner determination

## 📜 Game Rules

### Basic Rules
1. **Setup**
   - Each player has 6 pits and 1 store
   - Each pit starts with 4 seeds
   - Players sit on opposite sides of the board

2. **Gameplay**
   - Players take turns picking up all seeds from one of their pits
   - Seeds are distributed counter-clockwise, one seed per pit
   - When passing your own store, add one seed to it
   - Players can only choose pits on their side of the board

### Special Rules
1. **Extra Turn Rule**
   - If the last seed lands in your store, you get another turn
   - This can lead to multiple consecutive turns

2. **Capture Rule**
   - If the last seed lands in one of your empty pits
   - You capture all seeds from the opposite pit
   - Captured seeds go to your store

### Game End Conditions
- The game ends when one player has no seeds in their pits
- The other player collects remaining seeds in their store
- The player with the most seeds in their store wins
- In case of a tie, the game is declared a draw

## 💻 Installation

### Prerequisites
- Node.js (version 12 or higher)
- npm (comes with Node.js)

### Setup Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ayoayo.git
   cd ayoayo
   ```

2. No additional dependencies required

## 🎮 Usage

### Basic Game Setup
```javascript
const Ayoayo = require('./Ayoayo');

// Create a new game instance
const game = new Ayoayo();

// Create players
const player1 = game.createPlayer("Alice");
const player2 = game.createPlayer("Bob");
```

### Making Moves
```javascript
// Player 1 makes a move from pit 3
game.playGame(1, 3);

// Player 2 makes a move from pit 4
game.playGame(2, 4);

// Print current board state
game.printBoard();

// Check game status
console.log(game.returnWinner());
```

## 📝 Examples

### Example Game Session
```javascript
const game = new Ayoayo();
const player1 = game.createPlayer("Jensen");
const player2 = game.createPlayer("Brian");

// Play a sequence of moves
game.playGame(1, 3);
game.playGame(1, 1);
game.playGame(2, 3);
game.playGame(2, 4);
game.playGame(1, 2);
game.playGame(2, 2);
game.playGame(1, 1);

// Print final board state
game.printBoard();
```

### Example Output
```
player1:
store: 2
[ 0, 0, 3, 7, 7, 6 ]
player2:
store: 3
[ 4, 0, 1, 1, 7, 7 ]
Game has not ended
```

## 📁 Project Structure

```
.
├── Ayoayo.js      # Main game implementation
├── test.js        # Example game play
├── reflection.txt # Development process documentation
└── README.md      # Project documentation
```

## 🛠️ Development

### Code Organization
- `Player` class: Manages player state and moves
- `Ayoayo` class: Implements game logic and rules
- Modular design for easy maintenance and extension

### Best Practices
- Clean, maintainable code structure
- Comprehensive error handling
- Clear game state management
- Accurate implementation of game rules
- Well-documented code with comments

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE) for educational purposes.

## 🙏 Acknowledgments

- Based on the traditional Ayoayo game from West Africa
- Inspired by the rich cultural heritage of board games
- Special thanks to all contributors and testers

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the existing issues
2. Create a new issue with a detailed description
3. Include steps to reproduce the problem 