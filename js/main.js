// Variables
var user_choice;
let bot_choice = 'r';

let choices = ['r', 'p', 's']

let userScore = 0
let botScore = 0
let winner = 'none'

let userScoreBoard = document.getElementById('user1')
let botScoreBoard = document.getElementById('user2')

let winnerBoard = document.getElementById('winner')

let userResScreen = document.getElementById('resuser')
let botResScreen = document.getElementById('resbot')

let r = document.getElementById('btn1')
let p = document.getElementById('btn2')
let s = document.getElementById('btn3')



userScoreBoard.textContent = userScore
botScoreBoard.textContent = botScore
winnerBoard.textContent = winner


// User, Bot

// Main Logic
// s > p
// r > s 
// p > r

const check_winner = () => {
    if (user_choice == 's' & bot_choice == 'p') {
        winner = 'user'
    }
    else if (user_choice == 'r' & bot_choice == 'p') {
        winner = 'bot'
    }
    else if (user_choice == 's' & bot_choice == 'r') {
        winner = 'bot'
    }
    else if (user_choice == 'p' & bot_choice == 's') {
        winner = 'bot'
    }
    else if (user_choice == 'p' & bot_choice == 'r') {
        winner = 'user'
    }
    else if (user_choice == 'r' & bot_choice == 's') {
        winner = 'user'
    }
    else {
        winner = 'none'
    }
    return winner;
}

function update() {
    // console.log(user_choice);
    let randomNumber = Math.floor(Math.random() * 3)
    bot_choice = choices[randomNumber]
    userResScreen.innerText = user_choice
    botResScreen.innerText = bot_choice
    winner = check_winner()
    // console.log(winner);
    winnerBoard.innerText = winner
    if (winner == 'user') {
        console.log('USER IS WINER');
        userScore += 1
    }
    else if (winner == 'bot') {
        console.log('BOT IS WINER');
        botScore += 1
    }
    userScoreBoard.innerText = userScore
    botScoreBoard.innerText = botScore

}

// const updateScreen = () => {
//     console.log(user_choice);
// }


r.addEventListener('click', () =>{
    // console.log('R');
    user_choice = 'r';
    update()
})

p.addEventListener('click', () => { 
    // console.log('P');
    user_choice = 'p';
    update()
 })

s.addEventListener('click', () => {
    // console.log('S');
    user_choice = 's';
    update()
})