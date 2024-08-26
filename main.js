(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),a=n(314),c=n.n(a)()(o());c.push([e.id,":root {\n  --black-clr: #000000;\n  --accent-clr: #ff0000;\n  --grey-clr: #727171;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nbody {\n  margin: 0;\n  height: 100dvh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  justify-items: center;\n}\n\n.infoDiv {\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.diceDiv {\n  margin: 1rem auto;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: center;\n}\n\n.diceDiv img {\n  border-radius: 10%;\n  width: clamp(32px, 15%, 150px);\n}\n\n.diceDiv img:hover {\n  background-color: red;\n}\n\n.buttonDiv {\n  margin: 1rem;\n  display: flex;\n  justify-content: center;\n}\n\nbutton {\n  padding: 1em 2em;\n  border-radius: 1rem;\n  background-color: var(--black-clr);\n  color: var(--accent-clr);\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\nbutton + button {\n  margin-left: 1rem;\n}\n\n.keepDice {\n  background-color: var(--grey-clr);\n  opacity: 0.5;\n}\n\nbutton:hover {\n  outline: red solid 0.1rem;\n}\n",""]);const i=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:v,references:1})}c.push(d)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},206:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var r=n(72),o=n.n(r),a=n(206),c=n.n(a),i=n(659),s=n.n(i),u=n(56),l=n.n(u),d=n(540),p=n.n(d),f=n(113),v=n.n(f),m=n(208),h={};h.styleTagTransform=v(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),o()(m.A,h),m.A&&m.A.locals&&m.A.locals;const g=n.p+"0a94ae07e2d9dbd6107f.png",b=n.p+"730eff2b8e1063bdc6dc.png",y=n.p+"05c28d0b947ac7fd5b03.png",x=n.p+"0939c384a6a7b5aa0eaf.png",w=n.p+"58fc42c8d0d0fad02932.png",D=n.p+"64e5ade44b189e48c796.png",S=n.p+"c834426c64eb5e285b37.png";class k{value;constructor(e){this._sides=e,this.keepDiceState=!1}switchKeepDice(){this.keepDiceState=!this.keepDiceState}rollDice(){this.value=this.keepDiceState?this.value:this._getRandomDiceNumber()}_getRandomDiceNumber(){return Math.floor(Math.random()*this._sides)+1}}const E=[];for(let e=0;e<5;e++){const e=new k(6);E.push(e)}const T=document.querySelector(".diceDiv");T.addEventListener("click",(e=>{const t=e.target,n=t.dataset.index;n&&t.src!=g&&E[n].switchKeepDice(),C()}));let A=3;const M=()=>{E.forEach((e=>{e.value=0,e.keepDiceState=!1})),A=3,C()},C=()=>{T.innerHTML="";const e=document.querySelector("#rollsLeft");E.forEach(((e,t)=>{const n=document.createElement("img");n.src=function(e){switch(e){case 1:return b;case 2:return y;case 3:return x;case 4:return w;case 5:return D;case 6:return S;default:return g}}(e.value),n.dataset.index=t,e.keepDiceState&&n.classList.add("keepDice"),T.appendChild(n)})),e.textContent=A};M(),document.querySelector("#rollButton").addEventListener("click",(()=>{A>0&&(function(){const e=setInterval((()=>{E.forEach((e=>{e.rollDice()})),C(),setTimeout((()=>{clearInterval(e)}),750)}),150)}(),A--)})),document.querySelector("#resetButton").addEventListener("click",M)})();