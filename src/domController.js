import Dice0 from "./black_dice/dice0.png"
import Dice1 from "./black_dice/dice1.png"
import Dice2 from "./black_dice/dice2.png"
import Dice3 from "./black_dice/dice3.png"
import Dice4 from "./black_dice/dice4.png"
import Dice5 from "./black_dice/dice5.png"
import Dice6 from "./black_dice/dice6.png"

import { yahtzeeDice } from "./yahtzeeDice"

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
function diceRollAnimation() {
  const diceRollAnimation = setInterval(() => {
    yahtzeeDice.forEach((dice) => {
      dice.rollDice()
    })
    RenderDice()
    setTimeout(() => {
      clearInterval(diceRollAnimation)
    }, 750)
  }, 150)
}

const diceDiv = document.querySelector(".diceDiv")
diceDiv.addEventListener("click", (e) => {
  const dice = e.target
  const index = dice.dataset.index
  if (index && dice.src != Dice0) yahtzeeDice[index].switchKeepDice()
  RenderDice()
})

let numberOfRollsLeft = 3

const RollDice = () => {
  if (numberOfRollsLeft > 0) {
    diceRollAnimation()
    numberOfRollsLeft--
  }
}

const ResetDice = () => {
  yahtzeeDice.forEach((dice) => {
    dice.value = 0
    dice.keepDiceState = false
  })
  numberOfRollsLeft = 3
  RenderDice()
}

const RenderDice = () => {
  diceDiv.innerHTML = ""
  const rollsLeftSpan = document.querySelector("#rollsLeft")
  yahtzeeDice.forEach((dice, index) => {
    const diceImg = document.createElement("img")
    diceImg.src = getDiceImg(dice.value)
    diceImg.dataset.index = index
    if (dice.keepDiceState) diceImg.classList.add("keepDice")
    diceDiv.appendChild(diceImg)
  })
  rollsLeftSpan.textContent = numberOfRollsLeft
}

export { RollDice, ResetDice }
