/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/diceClass.js":
/*!**************************!*\
  !*** ./src/diceClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dice: () => (/* binding */ Dice)\n/* harmony export */ });\nclass Dice {\n  constructor(sides){\n    this._sides = sides\n    this._keepDice = false\n  }\n\n  switchKeepDice() {\n    this._keepDice = !this._keepDice\n  }\n\n  rollDice() {\n    if (this._keepDice) return \n    else return randomDiceNumber(this._sides)\n  }\n}\n\nfunction randomDiceNumber(numberOfSides) {\n  return Math.floor(Math.random() * numberOfSides) + 1\n}\n\n//# sourceURL=webpack://yahtzee/./src/diceClass.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _playRoundLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playRoundLogic */ \"./src/playRoundLogic.js\");\n\n\nconsole.log('yahtzee array: ' + _playRoundLogic__WEBPACK_IMPORTED_MODULE_0__.yahtzeeDice)\n\n\nconst keeperDice = []\n\nkeeperDice.push(+_playRoundLogic__WEBPACK_IMPORTED_MODULE_0__.yahtzeeDice.splice(3,1))\nkeeperDice.push(+_playRoundLogic__WEBPACK_IMPORTED_MODULE_0__.yahtzeeDice.splice(0,1))\n\nconsole.log('yahtzee array: ' + _playRoundLogic__WEBPACK_IMPORTED_MODULE_0__.yahtzeeDice)\n\nconsole.log(keeperDice)\nconsole.log(keeperDice.sort())\n\n\n// Dice test ###############################\n// console.log('-- START OF DICE TEST --')\n// import { Dice } from \"./diceClass\";\n\n// const dice = new Dice(6)\n\n// console.log('first roll: ' + dice.rollDice())\n// dice.switchKeepDice()\n// console.log('second roll: ' + dice.rollDice())\n// dice.switchKeepDice()\n// console.log('third roll: ' + dice.rollDice())\n// #########################################\n\n\n//# sourceURL=webpack://yahtzee/./src/index.js?");

/***/ }),

/***/ "./src/playRoundLogic.js":
/*!*******************************!*\
  !*** ./src/playRoundLogic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   yahtzeeDice: () => (/* binding */ yahtzeeDice)\n/* harmony export */ });\n/* harmony import */ var _diceClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diceClass */ \"./src/diceClass.js\");\n\n\nlet yahtzeeDice = []\nlet keeperDice = []\n\nlet numberOfDiceToRoll = 5 - keeperDice.length\n\nyahtzeeDice = keeperDice\n\nfor (let i = 0; i < numberOfDiceToRoll; i++) {\n  const dice = new _diceClass__WEBPACK_IMPORTED_MODULE_0__.Dice(6)\n  yahtzeeDice.push(dice.rollDice())\n}\n\n\n\n\n//# sourceURL=webpack://yahtzee/./src/playRoundLogic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;