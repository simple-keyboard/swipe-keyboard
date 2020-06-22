/*!
 * 
 *   swipe-keyboard v2.1.86
 *   https://github.com/hodgef/swipe-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.SimpleKeyboardSwipe=n():e.SimpleKeyboardSwipe=n()}(window,(function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1),a=t(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1},i=(o(a,r),a.locals?a.locals:{});e.exports=i},function(e,n,t){"use strict";var o,a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function s(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},o=[],a=0;a<e.length;a++){var r=e[a],c=n.base?r[0]+n.base:r[0],u=t[c]||0,l="".concat(c," ").concat(u);t[c]=u+1;var d=s(l),v={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(i[d].references++,i[d].updater(v)):i.push({identifier:l,updater:h(v,n),references:1}),o.push(l)}return o}function u(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function v(e,n,t,o){var a=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var r=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(r,i[n]):e.appendChild(r)}}function f(e,n,t){var o=t.css,a=t.media,r=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function h(e,n){var t,o,a;if(n.singleton){var r=m++;t=p||(p=u(n)),o=v.bind(null,t,r,!1),a=v.bind(null,t,r,!0)}else t=u(n),o=f.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var a=s(t[o]);i[a].references--}for(var r=c(e,n),u=0;u<t.length;u++){var l=s(t[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=r}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,".keyboardContainer {\n  position: relative;\n}\n\n.keyboardContainer .swipeCanvasElement {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  z-index: 999;\n  user-select: none;\n}\n\n.simple-keyboard.hg-theme-default.module-simplekeyboardswipe .hg-button {\n  height: 60px;\n}\n\n.simple-keyboard.module-simplekeyboardswipe .hg-button span {\n  pointer-events: none;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var a=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([a]).join("\n")}var i,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";t.r(n);t(0);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a=function e(){var n=this;(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")})(this,e),o(this,"init",(function(e,t,o){n.canvasW=t,n.canvasH=o;var a=document.createElement("canvas");a.className="swipeCanvasElement",a.width=t,a.height=o,e.insertAdjacentElement("beforebegin",a),n.canvas=document.querySelector(".swipeCanvasElement"),n.ctx=n.canvas.getContext("2d")})),o(this,"clear",(function(){n.ctx.clearRect(0,0,n.canvasW,n.canvasH)})),o(this,"draw",(function(e,t,o,a){n.ctx.beginPath(),n.ctx.moveTo(e,t),n.ctx.lineTo(o,a),n.ctx.strokeStyle="rgba(10, 103, 115, 0.9)",n.ctx.lineWidth=3,n.ctx.stroke(),n.ctx.closePath()}))};n.default=function e(){(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")})(this,e),function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(this,"init",(function(e){e.registerModule("swipe",(function(n){n.Canvas=a,n.init=function(){n.canvasHandler=new n.Canvas,n.initVars(),n.canvasHandler.init(e.keyboardDOM,n.canvasW,n.canvasH),n.initEvents()},n.initVars=function(){var t=e.keyboardDOMClass;e.keyboardDOM=document.querySelector(".".concat(t)),n.canvasW=e.keyboardDOM.offsetWidth,n.canvasH=e.keyboardDOM.offsetHeight,n.isMouseClicked=!1,n.isMouseInCanvas=!1,n.prevX=0,n.currX=0,n.prevY=0,n.currY=0,n.lastButton="",n.swipeTolerance=30,n.stoppedTime=50,n.repeatResetTime=200},n.initEvents=function(){n.canvasHandler.canvas.addEventListener("mousemove",(function(e){n.onMouseMove(e)}),!1),n.canvasHandler.canvas.addEventListener("mousedown",(function(e){n.onMouseDown(e)}),!1),n.canvasHandler.canvas.addEventListener("mouseup",(function(){n.onMouseUp()}),!1),n.canvasHandler.canvas.addEventListener("mouseout",(function(){n.onMouseOut()}),!1),n.canvasHandler.canvas.addEventListener("mouseenter",(function(e){n.onMouseEnter(e)}),!1),document.addEventListener("touchstart",n.touchHandler,!0),document.addEventListener("touchmove",n.touchHandler,!0),document.addEventListener("touchend",n.touchHandler,!0),document.addEventListener("touchcancel",n.touchHandler,!0)},n.onMouseDown=function(e){n.swipeStart=!0,n.isMouseClicked=!0,n.isMouseInCanvas=!0,n.updateCurrentPosition(e),n.canvasHandler.canvas.classList.add("swipe-mousedown"),n.canvasHandler.canvas.classList.remove("swipe-mouseup"),n.isMouseHold=!0,n.holdTimeout=setTimeout((function(){n.isMouseHold&&n.handleInteraction(e),clearTimeout(n.holdTimeout)}),500)},n.onMouseUp=function(){n.isMouseHold=!1,n.swipeStart=!1,n.canvasHandler.clear(),n.isMouseClicked=!1,n.canvasHandler.canvas.classList.add("swipe-mouseup"),n.canvasHandler.canvas.classList.remove("swipe-mousedown"),n.canvasHandler.canvas.classList.remove("swipe-mouseenter"),n.canvasHandler.canvas.classList.remove("swipe-mousemove")},n.onMouseEnter=function(){n.swipeStart=!1,n.isMouseClicked=!1,n.canvasHandler.clear(),n.isMouseInCanvas=!0,n.canvasHandler.canvas.classList.add("swipe-mouseenter"),n.canvasHandler.canvas.classList.remove("swipe-mouseout")},n.onMouseOut=function(){n.swipeStart=!1,n.canvasHandler.clear(),n.isMouseInCanvas=!1,n.canvasHandler.canvas.classList.add("swipe-mouseout"),n.canvasHandler.canvas.classList.remove("swipe-mouseenter"),n.canvasHandler.canvas.classList.remove("swipe-mousemove")},n.onMouseMove=function(e){n.isMouseHold=!1,n.isMouseClicked&&n.isMouseInCanvas&&(clearTimeout(n.mouseStopped),n.mouseStopped=!1,n.updateCurrentPosition(e),n.canvasHandler.draw(n.prevX,n.prevY,n.currX,n.currY),n.mouseStopped=setTimeout((function(){n.mouseStopped=!0,n.handleInteraction(e)}),n.stoppedTime)),n.canvasHandler.canvas.classList.add("swipe-mousemove")},n.updateCurrentPosition=function(e){var t=n.canvasHandler.canvas.getBoundingClientRect();n.prevX=n.currX,n.prevY=n.currY,n.currX=e.clientX-t.left,n.currY=e.clientY-t.top,n.getMouseDirection(e)},n.getMouseDirection=function(e){var t,o;n.enforceTolerance(n.prevX,n.currX)&&(t=n.prevX<n.currX?"right":"left"),n.enforceTolerance(n.prevX,n.currX)&&(o=n.prevY<n.currY?"down":"up"),(o!==n.yDirection||t!==n.xDirection)&&(t&&(n.xDirection=t),o&&(n.yDirection=o),n.swipeStart&&(n.handleInteraction(e),n.swipeStart=!1))},n.handleInteraction=function(e){n.canvasHandler.canvas.style.display="none";var t=document.elementFromPoint(e.clientX,e.clientY);if(t){var o=t.getAttribute("data-skbtn");if(o&&(n.lastButton!==o||n.isMouseHold)&&t.onclick)if(!n.isMouseHold||(o.includes("{")||o.includes("}"))&&"{bksp}"!==o&&"{space}"!==o){clearTimeout(n.holdInteractionTimeout),t.onclick(),n.lastButton=o;var a=setTimeout((function(){clearTimeout(a),n.lastButton=""}),n.repeatResetTime)}else n.holdInteractionTimeout=setTimeout((function(){t.onclick(),n.handleInteraction(e)}),100);n.canvasHandler.canvas.style.display="block"}},n.enforceTolerance=function(e,t,o){o=o||n.swipeTolerance;var a=Math.abs(e-t);return!!(a>o||0===a)},n.throttle=function(e,n){var t=!1;t||(e(),t=!0,setTimeout((function(){t=!1}),n))},n.touchHandler=function(e){var t=e.changedTouches[0],o="";switch(e.type){case"touchstart":o="mousedown";break;case"touchmove":o="mousemove";break;case"touchend":o="mouseup";break;default:return}var a=document.createEvent("MouseEvent");a.initMouseEvent(o,!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null),n.canvasHandler.canvas.dispatchEvent(a),e.preventDefault()},n.init()}))}))}}])}));