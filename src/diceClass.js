export class Dice {
  constructor(sides){
    this._sides = sides
    this._keepDice = false
  }

  switchKeepDice() {
    this._keepDice = !this._keepDice
  }

  rollDice() {
    if (this._keepDice) return 
    else return getRandomDiceNumber(this._sides)
  }
}

function getRandomDiceNumber(numberOfSides) {
  return Math.floor(Math.random() * numberOfSides) + 1
}