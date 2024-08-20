import Dice0 from './black_dice/dice0.png'
import Dice1 from './black_dice/dice1.png'
import Dice2 from './black_dice/dice2.png'
import Dice3 from './black_dice/dice3.png'
import Dice4 from './black_dice/dice4.png'
import Dice5 from './black_dice/dice5.png'
import Dice6 from './black_dice/dice6.png'

import { yahtzeeDice } from './yahtzeeDice'

function getDiceImg(number) {
  switch (number) {
    case 1:
      return Dice1
    case 2:
      return Dice2
    case 3:
      return Dice3
    case 4:
      return Dice4
    case 5:
      return Dice5
    case 6:
      return Dice6
    default:
      return Dice0
  }
}

const diceDiv = document.querySelector('.diceDiv')

///////////////////////////
// to put into a seperate function??
let rollsPerTurn = 3
const rollsLeftSpan = document.querySelector('#rollsLeft')
///////////////////////////

diceDiv.addEventListener('click', (e) => {
  const dice = e.target
  const index = dice.dataset.index
  if (index && dice.src != Dice0) yahtzeeDice[index].switchKeepDice()
  RenderDice()
})

const RollDice = () => {
  if (rollsPerTurn > 0) {
    for (let i = 0; i < 5; i++) {

      yahtzeeDice.forEach(dice => {
        dice.rollDice()
      })
      RenderDice()

    }
    rollsPerTurn--
    RenderDice()
  }
}

const ResetDice = () => {
  yahtzeeDice.forEach(dice => {
    dice.value = 0
    dice.keepDiceState = false
  })
  rollsPerTurn = 3
  RenderDice()
}

const RenderDice = () => {
  diceDiv.innerHTML = ''
  yahtzeeDice.forEach((dice, index) => {
    const diceImg = document.createElement('img')
    diceImg.src = getDiceImg(dice.value)
    diceImg.dataset.index = index
    if (dice.keepDiceState) diceImg.classList.add('keepDice')
    diceDiv.appendChild(diceImg)
  })
  rollsLeftSpan.textContent = rollsPerTurn
}

export { RenderDice, RollDice, ResetDice }
