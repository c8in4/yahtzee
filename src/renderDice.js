import Dice0 from './black_dice/dice0.png'
import Dice1 from './black_dice/dice1.png'
import Dice2 from './black_dice/dice2.png'
import Dice3 from './black_dice/dice3.png'
import Dice4 from './black_dice/dice4.png'
import Dice5 from './black_dice/dice5.png'
import Dice6 from './black_dice/dice6.png'

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

const RenderDice = (yahtzeeDice) => {
  const diceDiv = document.querySelector('.diceDiv')
  diceDiv.innerHTML = ''

  yahtzeeDice.forEach((dice, index) => {
    dice.rollDice()
    const diceValue = dice.value
    
    const diceImg = document.createElement('img')
    diceImg.addEventListener('click', () => { dice.switchKeepDice() })
    diceImg.src = getDiceImg(diceValue)
    diceImg.dataset.index = index
    diceDiv.appendChild(diceImg)
  })

  console.log(yahtzeeDice)
}

export { RenderDice }
