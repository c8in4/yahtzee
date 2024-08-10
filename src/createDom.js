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

const RenderDice = (yahtzeeDice = [1, 2, 3, 4, 5]) => {

  const mainElement = document.querySelector('main')

  const diceDiv = document.createElement('div')
  diceDiv.classList.add('diceDiv')

  yahtzeeDice.forEach(dice => {
    const diceImg = document.createElement('img')
    diceImg.src = getDiceImg(dice)

    diceImg.dataset.value = dice
    diceDiv.appendChild(diceImg)
  })


  mainElement.append(diceDiv)
}

export { RenderDice }
