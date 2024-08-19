import './style.css'
import { RenderDice, RollDice } from './domController';

RenderDice()

const rollDiceButton = document.querySelector('#rollButton')
rollDiceButton.addEventListener('click', () => {
  RollDice()
})
