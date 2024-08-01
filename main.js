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
            board[i].push(Cell());
        }
    }
    
    // This will be used to call the board
    const getBoard = () => board;

    const availableSquares = (column, player) => {
        const emptySquares = board.filter((row) => row[column].getValue() === '').map(row => row[column]);

        if (!availableSquares.length) return;

        board[availableSquares][column][row].addIcon(player);
    }

    const generateBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
    };

    return {getBoard, availableSquares, generateBoard};
}

function Cell() {
    let value = '';

    const addIcon = (player) => {
        value = player;
    };

    const getValue = () => value;

    return {addIcon, getValue};
}

// Game Controller for how game will play out
function gameController(playerOneName = 'Player One', playerTwoName = 'Player Two') {
// Calls grid where game is played one
    const board = boardGame();

    // Creates players
    const players = [
        {
            name: playerOneName,
            icon: 'X',
            isActive: true
        },
        {
            name: playerTwoName,
            icon: 'O',
            isActive: false
        }
    ];

    // Checks to see which player is the active one
    const findActivePlayer = (players) => {
        return players.find(player => player.isActive);
    }

    const switchTurn = (players) => {
        let currentIndex = players.findIndex(player => player.isActive);

        players[currentIndex].isActive = false;

        let nextIndex = (currentIndex + 1) % players.length;

        players[nextIndex].isActive = true;
    }

    let activePlayer = findActivePlayer(players);
    if (activePlayer) {
        const status = document.querySelector('.player-title');
        status.textContent = 'It is: ' + activePlayer + 's ' + 'turn.';
        console.log('It is: ' + activePlayer + 's' + ' turn');
    } else {
        console.log('No players right now');
    }

    const newRound = () => {
        board.generateBoard();
        console.log(`${findActivePlayer().name}s turn.`);
    };

    const playRound = (column) => {
        console.log(`Placing ${findActivePlayer().icon}`);
        board.availableSquares(column, findActivePlayer().icon);

        switchTurn();
        newRound();
    }

    newRound();

    return {playRound, findActivePlayer};

}

const game = gameController();
