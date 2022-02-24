// Variables
let choices = {
    's': 's',
    'r': 'r',
    'p': 'p',
}

let user_choice = choices.r
let bot_choice = choices.p

let userScore = 0
let botScore = 0
let winner = 'none'

let userScoreBoard = document.getElementById('user1')
let botScoreBoard = document.getElementById('user2')
let winnerBoard = document.getElementById('winner')


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
