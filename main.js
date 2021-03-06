
//gameOver false unless changed by rules
var gameOver = false;
//state counting moves
var state = 0;
// console.log(state);
function gameRules() {
    var moveText = document.getElementById('move');
    //if nothing and not game over
    if (this.innerText == '' && gameOver == false) {
        //state div 2 put x and change
        //even vs odd state
        if (state % 2 == 0) {
            this.innerText = 'X';
            moveText.innerHTML = "O's Move";
            //if not put o and change
        } else {
            this.innerText = 'O';
            moveText.innerHTML = "X's Move";
        }
        state++;
        // console.log("rules running")
    }
    var winData = [[0,3,6],[0,1,2],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
    //win data length add
    for (let i = 0; i < winData.length; i++) {
        var place1 = document.getElementById(winData[i][0]);
        var place2 = document.getElementById(winData[i][1]);
        var place3 = document.getElementById(winData[i][2]);
        //if 3 places are x, wins
        if (place1.innerText === place2.innerText && place2.innerText === place3.innerText && place1.innerText === 'X') {
            //if met display winner
            moveText.innerHTML = 'X wins!';
            //change game over
            gameOver = true;
        }
        //if 3 places are o, wins
        if (place1.innerText === place2.innerText && place2.innerText === place3.innerText && place1.innerText === 'O') {
            //if met display winner
            moveText.innerHTML = 'O wins!';
            //change game over
            gameOver = true;
        }
        // console.log("for loop")
    }
    //state >= 9 (board full) and game isnt over tie
    if (state >= 9 && gameOver == false) {
        moveText.innerHTML = 'Tie!';
        // console.log("tie check")
    }
}
//build element setup
function buildElement(elementType, classes, id, text) {
    var element = document.createElement(elementType);
    element.className = classes;
    element.id = id;
    element.innerHTML = text;
    return element;
}
//init func
function init() {
    //set state
    state = 0;
    //build title
    var title = buildElement('h1', 'text-center', 'title', 'Tic-Tac-Toe');
    //build move
    var move = buildElement('h4', 'text-center mt-2', 'move', "X's Move");
    //append them
    title.appendChild(move);
    body.appendChild(title);
    // build div, cont, board, empty string
    var gameBoard = buildElement('div', 'container', 'board', '');
    var square = 0;
    // for loop to build row
    for (let i = 0; i < 3; i++) {
        var rowOne = buildElement('div', 'row border-top border-bottom border-dark mx-auto', 'boardRow', '');
        // for loop to build cols
        for (var z = 0; z < 3; z++) {
            var colOne = buildElement('div', 'col-4 bg-light text-center border-right border-dark display-3 border-left pt-4', square, '');
            square++;
            //click listener
            colOne.addEventListener('click', gameRules);
            rowOne.appendChild(colOne);
        }
        gameBoard.appendChild(rowOne);
    }
    //build
    var buttonRow = buildElement('div', 'row', '', '');
    var buttonCol = buildElement('div', 'col-6 text-center mx-auto', 'button', '');
    var restartButton = buildElement('button', 'btn-dark my-5 mx-auto', 'restart', 'Restart Game');
    //add and append
    restartButton.addEventListener('click', restartGame);
    buttonCol.appendChild(restartButton);
    buttonRow.appendChild(buttonCol);
    gameBoard.appendChild(buttonRow);
    body.appendChild(gameBoard);
    // console.log("init")
}

//restart state, reset body, run init, restart gameOver
function restartGame() {
    state = 0;
    body.innerHTML = '';
    init();
    gameOver = false;
}



