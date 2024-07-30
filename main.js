// This generates the board itself
// Where the game will be played on
function boardGame() {
    const rows = 3;
    const columns = 3;
    const board = [];

    // For loop that generates the squares
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            // Cell() will be defined later
            board[j].push(Cell());
        }
    }
}

// This will be used to call the board
const getBoard = () => board;