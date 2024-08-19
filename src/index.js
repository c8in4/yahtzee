import './style.css'
import { Dice } from './diceClass';
import { RenderDice } from './renderDice';

const yahtzeeDice = []

for (let i = 0; i < 5; i++) {
  const dice = new Dice(6)
  yahtzeeDice.push(dice)
}

const rollDiceButton = document.querySelector('#rollButton')
rollDiceButton.addEventListener('click', () => {
  RenderDice(yahtzeeDice)
})

RenderDice(yahtzeeDice)
