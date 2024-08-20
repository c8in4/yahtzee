import './style.css'
import { ResetDice, RollDice } from './domController';

ResetDice()

const rollDiceButton = document.querySelector('#rollButton')
rollDiceButton.addEventListener('click', RollDice)

const resetDiceButton = document.querySelector('#resetButton')
resetDiceButton.addEventListener('click', ResetDice)