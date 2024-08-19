export class Dice {

  value

  constructor(sides) {
    this._sides = sides
    this.keepDiceState = false
  }

  switchKeepDice() {
    this.keepDiceState = !this.keepDiceState
  }

  rollDice() {
    this.value = this.keepDiceState
      ? this.value
      : this._getRandomDiceNumber()
  }

  _getRandomDiceNumber() {
    return Math.floor(Math.random() * this._sides) + 1
  }
}