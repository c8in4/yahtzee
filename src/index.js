import './style.css'
import './createDom'

import { Dice } from './diceClass';
import { RenderDice } from './createDom';

const yahtzeeDice = []
const rolledDice = []
const keeperDice = []

for (let i = 0; i < 5; i++) {
  const dice = new Dice(6)
  yahtzeeDice.push(dice)
}

yahtzeeDice.forEach(dice => {
  rolledDice.push(dice.rollDice())
})

console.log(rolledDice)

RenderDice(rolledDice)

// Dice test ###############################
// console.log('-- START OF DICE TEST --')
// import { Dice } from "./diceClass";

// const dice = new Dice(6)

// console.log('first roll: ' + dice.rollDice())
// dice.switchKeepDice()
// console.log('second roll: ' + dice.rollDice())
// dice.switchKeepDice()
// console.log('third roll: ' + dice.rollDice())
// #########################################
