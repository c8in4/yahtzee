import { yahtzeeDice } from "./playRoundLogic";

console.log('yahtzee array: ' + yahtzeeDice)


const keeperDice = []

keeperDice.push(+yahtzeeDice.splice(3,1))
keeperDice.push(+yahtzeeDice.splice(0,1))

console.log('yahtzee array: ' + yahtzeeDice)

console.log(keeperDice)
console.log(keeperDice.sort())


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
