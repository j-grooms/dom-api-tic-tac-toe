// counter even x odd o
// divs have unique ids
//event listeners on each div (click)
//For the "X" player, use the image found at https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg.
// For the "O" player, use the image found at https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg.
// When the player clicks an empty square, then it is filled with that player's symbol.
// When the player clicks a square that already contains a symbol, the game does nothing.
// The first click results in an "X". After that, the symbols "O" and "X" alternate with each click per the rules of tic-tac-toe.

window.addEventListener("DOMContentLoaded", event => {
    const square0 = document.getElementById('square-0')
    const square1 = document.getElementById('square-1')
    const square2 = document.getElementById('square-2')
    const square3 = document.getElementById('square-3')
    const square4 = document.getElementById('square-4')
    const square5 = document.getElementById('square-5')
    const square6 = document.getElementById('square-6')
    const square7 = document.getElementById('square-7')
    const square8 = document.getElementById('square-8')
    let counter = 0;
    function checkTurn(counter) {
        if (num % 2 !== 0) {
            // use X
            let x = document.createElement('img')
            x.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg')
        } else {
            let o = document.createElement('img')
            o.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg')
        }
    }







})
