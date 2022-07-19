const playerSelection = document.createElement('h1')
const computerSelection = document.createElement('h1')
const resultSelection = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(playerSelection, computerSelection, resultSelection)

const choices = ['rock','paper','scissors']
let playerSelect
let computerSelect

const handleClick = (e) => {
    playerSelect = e.target.id
    playerSelection.innerHTML ='player select: ' + playerSelect
    generateComputerSelect()
    getResult()
}

const generateComputerSelect = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerSelect = randomChoice
    computerSelection.innerHTML = 'computer select: ' + randomChoice
}

for (let i =0; i < choices.length; i=i+1) {
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResult = () => {
    switch (playerSelect + computerSelect) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultSelection.innerHTML = "YOU WIN!"
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultSelection.innerHTML = "You Lose! Paper beats Rock!"
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
        resultSelection.innerHTML = "ITS A DRAW!"
        break    
    }
}