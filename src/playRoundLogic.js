import { Dice } from './diceClass';

let yahtzeeDice = []
let keeperDice = []

let numberOfDiceToRoll = 5 - keeperDice.length

yahtzeeDice = keeperDice

for (let i = 0; i < numberOfDiceToRoll; i++) {
  const dice = new Dice(6)
  yahtzeeDice.push(dice.rollDice())
}

export { yahtzeeDice }
