import { Dice } from './diceClass';

const yahtzeeDice = []

for (let i = 0; i < 5; i++) {
  const dice = new Dice(6)
  yahtzeeDice.push(dice)
}

export { yahtzeeDice }