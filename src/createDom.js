import Dice0 from './black_dice/dice0.png'

const testDiceArray = [1, 2, 3, 4, 5]

const mainElement = document.querySelector('main')

const diceDiv = document.createElement('div')
diceDiv.classList.add('diceDiv')

testDiceArray.forEach(dice => {
  const diceImg = document.createElement('img')
  diceImg.src = Dice0
  diceDiv.appendChild(diceImg)
})



mainElement.append(diceDiv)