export class Dice {
  constructor(sides){
    this._sides = sides
    this.keepDice = false
  }

  switchKeepDice() {
    this.keepDice = !this.keepDice
  }

  rollDice() {
    if (this.keepDice) return 
    else return getRandomDiceNumber(this._sides)
  }
}

function getRandomDiceNumber(numberOfSides) {
  return Math.floor(Math.random() * numberOfSides) + 1
}