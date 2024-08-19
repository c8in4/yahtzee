import './style.css'
import { RenderDice, ResetDice, RollDice } from './domController';

RenderDice()

const rollDiceButton = document.querySelector('#rollButton')
rollDiceButton.addEventListener('click', RollDice)

const resetDiceButton = document.querySelector('#resetButton')
resetDiceButton.addEventListener('click', ResetDice)