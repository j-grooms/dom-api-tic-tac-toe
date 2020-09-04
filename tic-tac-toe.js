// counter even x odd o
// divs have unique ids
//event listeners on each div (click)
//For the "X" player, use the image found at https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg.
// For the "O" player, use the image found at https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg.
// When the player clicks an empty square, then it is filled with that player's symbol.
// When the player clicks a square that already contains a symbol, the game does nothing.
// The first click results in an "X". After that, the symbols "O" and "X" alternate with each click per the rules of tic-tac-toe.
// each square should not have click counted more than one time.
// const square0 = document.getElementById('square-0')
// const square1 = document.getElementById('square-1')
// const square2 = document.getElementById('square-2')
// const square3 = document.getElementById('square-3')
// const square4 = document.getElementById('square-4')
// const square5 = document.getElementById('square-5')
// const square6 = document.getElementById('square-6')
// const square7 = document.getElementById('square-7')
// const square8 = document.getElementById('square-8')
// let winner = squareValue[0, 1, 2] || [3, 4, 5] || [6, 7, 8] || [0, 3 ,6] || [1, 4, 7] || [2, 5, 8] || [0, 4, 8] || [2, 4, 6]

window.addEventListener("DOMContentLoaded", event => {
    const board = document.getElementById('tic-tac-toe-board')
    let counter = 0;
    let squareValue = ['', '', '', '', '', '', '', '', ''];
    const reset = document.getElementById('new-game')
    // status.innerText = gameStatus;
    let gameStatus = '';
    const giveUp = document.getElementById('give-up');
    giveUp.disabled = false
    const turn = document.createElement('h2')
        document.body.appendChild(turn)





    giveUp.addEventListener('click', (event) => {
        giveUp.disabled = true;
        reset.disabled = false;
        if (checkXTurn()) {
            gameStatus = 'O wins!'
        document.getElementById("game-status").innerHTML = gameStatus;

        } else {
            gameStatus = 'X wins!'
        document.getElementById("game-status").innerHTML = gameStatus;
        }
    })
    reset.addEventListener('click', (event) => {
        for (let i = 0; i <= 8; i++) {
            // const element = array[i];
            document.getElementById(`square-${[i]}`).innerHTML = ''
        }
        gameStatus = ''
        turn.innerHTML = "X's Turn";
        document.getElementById("game-status").innerHTML = gameStatus;
        squareValue = ["", "", "", "", "", "", "", "", ""];
        reset.disabled = true;
        counter = 0
        giveUp.disabled = false
        })
    function checkGameStatus() {
        if (checkWinner() === 'x'){
            gameStatus += 'X wins!'
            reset.disabled = false
        }
        else if (checkWinner() === 'o') {
            gameStatus += 'O wins!'
            reset.disabled = false;
        }
        else if (counter === 9) {
            gameStatus += 'No winner!'
            reset.disabled = false;
        }
        document.getElementById('game-status').innerHTML = gameStatus;
}

    board.addEventListener('click', (event) => {

        if (!event.target.id.startsWith('square-')) return;
        if (gameStatus !== '') return;
        if (event.target.innerHTML === '') {

            let isXTurn = checkXTurn();
            if (isXTurn) {
                turn.innerHTML = "O's Turn"
                let x = document.createElement('img')
                x.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')
                event.target.appendChild(x)
                squareValue[event.target.id.slice(event.target.id.length -1)] = 'x'
                counter++


            } else {
                turn.innerHTML = "X's Turn";
                let o = document.createElement('img')
                o.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')
                event.target.appendChild(o)
                squareValue[event.target.id.slice(event.target.id.length -1)] = 'o'
                counter++
            }
        } else {
            console.log('pick another square')
        }
        console.log(squareValue)
        checkGameStatus();
    })

    function checkXTurn() {

        return counter % 2 === 0

    }

    function checkWinner() {
        if (squareValue[0] === squareValue[1] && squareValue[1] === squareValue[2] && squareValue[2] !== '') {
            return squareValue[0]
          }
        if (squareValue[3] === squareValue[4] && squareValue[4] === squareValue[5] && squareValue[5] !== '') {
            return squareValue[3];
          }
        if (squareValue[6] === squareValue[7] && squareValue[7] === squareValue[8] && squareValue[8] !== '') {
            return squareValue[6];
          }
        if (squareValue[0] === squareValue[3] && squareValue[3] === squareValue[6] && squareValue[6] !== '') {
            return squareValue[0];
          }
        if (squareValue[1] === squareValue[4] && squareValue[4] === squareValue[7] && squareValue[7] !== '') {
            return squareValue[1];
          }
        if (squareValue[2] === squareValue[5] && squareValue[5] === squareValue[8] && squareValue[8] !== '') {
            return squareValue[2];
          }
        if (squareValue[0] === squareValue[4] && squareValue[4] === squareValue[8] && squareValue[8] !== '') {
            return squareValue[0];
          }
        if (squareValue[2] === squareValue[4] && squareValue[4] === squareValue[6] && squareValue[6] !== '') {
            return squareValue[2];
          }
    }
})
