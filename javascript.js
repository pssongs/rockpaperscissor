let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')

let getComputerChoice = () => {
    let choices = ["rock", "paper", "scissor"]
    return choices[Math.floor(Math.random() * choices.length)]
}

let disableButtons = () => {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

let game = (playerSelection) => {
    computerSelection = getComputerChoice()
    let result = ""
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result 
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        game(button.value)
    })
})

