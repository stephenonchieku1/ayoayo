class Player {
    constructor(name) {
        this.name = name;
        this.pits = Array(6).fill(4); // Each player starts with 6 pits, each containing 4 seeds
        this.store = 0; // Store for captured seeds
    }
}

class Ayoayo {
    constructor() {
        this.player1 = null;
        this.player2 = null;
        this.gameEnded = false;
    }

    createPlayer(name) {
        if (!this.player1) {
            this.player1 = new Player(name);
            return this.player1;
        } else if (!this.player2) {
            this.player2 = new Player(name);
            return this.player2;
        }
        return null;
    }

    printBoard() {
        console.log("player1:");
        console.log("store: " + this.player1.store);
        console.log(this.player1.pits);
        console.log("player2:");
        console.log("store: " + this.player2.store);
        console.log(this.player2.pits);
    }

    returnWinner() {
        if (!this.gameEnded) {
            return "Game has not ended";
        }

        if (this.player1.store > this.player2.store) {
            return `Winner is player 1: ${this.player1.name}`;
        } else if (this.player2.store > this.player1.store) {
            return `Winner is player 2: ${this.player2.name}`;
        } else {
            return "It's a tie";
        }
    }

    playGame(playerIndex, pitIndex) {
        if (this.gameEnded) {
            return "Game is ended";
        }

        if (pitIndex <= 0 || pitIndex > 6) {
            return "Invalid number for pit index";
        }

        const player = playerIndex === 1 ? this.player1 : this.player2;
        const opponent = playerIndex === 1 ? this.player2 : this.player1;
        const pit = pitIndex - 1; // Convert to 0-based index

        // Check if the pit is empty
        if (player.pits[pit] === 0) {
            return "Invalid move: pit is empty";
        }

        // Pick up seeds from the selected pit
        let seeds = player.pits[pit];
        player.pits[pit] = 0;
        let currentPit = pit;
        let currentPlayer = player;
        let lastPit = null;
        let lastPlayer = null;

        // Distribute seeds
        while (seeds > 0) {
            currentPit++;
            
            // If we've reached the end of the current player's pits
            if (currentPit >= 6) {
                // Add to store if it's the current player's turn
                if (currentPlayer === player) {
                    currentPlayer.store++;
                    seeds--;
                    lastPit = null;
                    lastPlayer = currentPlayer;
                }
                
                // Switch to opponent's pits
                currentPit = 0;
                currentPlayer = currentPlayer === player ? opponent : player;
            } else {
                currentPlayer.pits[currentPit]++;
                seeds--;
                lastPit = currentPit;
                lastPlayer = currentPlayer;
            }
        }

        // Check special rules
        let extraTurn = false;
        let capturedSeeds = false;

        // Special Rule 1: Last seed in store
        if (lastPit === null && lastPlayer === player) {
            extraTurn = true;
            console.log(`player ${playerIndex} take another turn`);
        }

        // Special Rule 2: Last seed in empty pit
        if (lastPit !== null && lastPlayer === player && player.pits[lastPit] === 1) {
            const oppositePit = 5 - lastPit;
            if (opponent.pits[oppositePit] > 0) {
                player.store += opponent.pits[oppositePit] + 1;
                opponent.pits[oppositePit] = 0;
                player.pits[lastPit] = 0;
                capturedSeeds = true;
            }
        }

        // Check if game has ended
        this.checkGameEnd();

        // Return current state
        return [
            ...this.player1.pits,
            this.player1.store,
            ...this.player2.pits,
            this.player2.store
        ];
    }

    checkGameEnd() {
        // Check if either player has no seeds in their pits
        const player1Empty = this.player1.pits.every(pit => pit === 0);
        const player2Empty = this.player2.pits.every(pit => pit === 0);

        if (player1Empty || player2Empty) {
            this.gameEnded = true;
            // Collect remaining seeds
            if (player1Empty) {
                this.player2.store += this.player2.pits.reduce((a, b) => a + b, 0);
                this.player2.pits.fill(0);
            } else {
                this.player1.store += this.player1.pits.reduce((a, b) => a + b, 0);
                this.player1.pits.fill(0);
            }
        }
    }
}

module.exports = Ayoayo; 