/*app's constants*/
 var winMap = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [8, 3, 2],
        [1, 4, 7],
        [6, 5, 0], 
        [0, 4, 8], 
        [6, 4, 2]
    ];
/*----- app's state (variables) -----*/
var input, turn, i, ticker, winner;
/*----- cached element references -----*/
var board = [];
/*----- event listeners ------*/
document.querySelector('table')
    .addEventListener('click', handleClick);
document.getElementById('restart')
    .addEventListener('onclick', button);
/*----- functions ------*/
initialize();
function initialize() {
    board = [
    NaN, NaN, NaN, 
    NaN, NaN, NaN, 
    NaN, NaN, NaN
    ];
    i = 0;
    winner = NaN;
};


//credit to jons winlogic
function check() {
    for (var q = 0; q < 8; q++) {
        let win = winMap[q],
            [a, b, c] = win;
        (board[a] === board[b]) && (board[a] === board[c]) ?  winner = ticker : null;
    }
};


function handleClick(evt) {
    input = event.target;
    if (input.textContent) {
        return;
    } else {
        ticker = (i % 2 === 0 ? 1 : -1);
        board[input.id] = ticker;
        check();
        i++; 
        render();
    }
};

function render() {
   input.textContent = ticker > 0 ? 'x' : 'o';
   if (winner) {
    document.querySelector('h2').innerHTML = `${input.textContent}!!!!`;

   }
};

function button() {
    initialize();
}