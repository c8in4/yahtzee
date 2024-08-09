export class Dice {
  constructor(){
    this.sides = 6
  }

  rollDice() {
    return Math.floor(Math.random() * this.sides) + 1
  }
}