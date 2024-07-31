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

// This gives players their name and score
// Along with also keeping track of how many players were created
function createPlayer(name) {
    const userName = name;
    let hasBeenCalledTwice = false;
    let counter = 0;
    const icon = ['X', 'O'];
  
    // Loop to keep track how many times function has been called
    // Along with assigning letter, either X or O
    for (let i = 0; i < 3; i++) {
        counter++
        if (counter === 1) {
            icon[0];
            console.log('Player was created!');
        } else if (counter === 2) {
            icon[1];
            console.log('Player Was Created')
        } else if (counter >= 3) {
            console.log('Only two players can be created');
            hasBeenCalledTwice = true;
        }
    }

    // Player Score
    let userScore = 0;
    const getUserScore = () => userScore;
    const giveUserScore = () => userScore++;

    return {name, counter, icon, userName, getUserScore, giveUserScore};

}

const steven = createPlayer('steven');

steven.giveUserScore();

console.log({
    userName: steven.userName,
    userScore: steven.getUserScore(),
    counter: steven.counter,
    icon: steven.icon
});
// // Assigning players their respective value: X and O.
// function assignPlayerValue() {
//     return Player.map((player, index) => {
//         return {name: player, number: index + 1};
//     });
// }

// const playersWithValue = assignPlayerValue(Player);

// playersWithValue.forEach(player => {
//     const playerTitle = document.createElement('h1');
//     playerTitle.textContent = `It's ${player.name}'s turn.`;
//     // Append child to div here later
// });

// Game Controller for how game will play out
function gameController(playerOneName = createPlayer(), playerTwoName) {

}
