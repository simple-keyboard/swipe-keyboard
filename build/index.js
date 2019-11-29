/*!
 * 
 *   swipe-keyboard v2.0.37
 *   https://github.com/hodgef/swipe-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.SimpleKeyboardSwipe=n():e.SimpleKeyboardSwipe=n()}(window,(function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var a=t(1);"string"==typeof a&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};t(3)(a,o);a.locals&&(e.exports=a.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".keyboardContainer {\n  position: relative;\n}\n\n.keyboardContainer .swipeCanvasElement {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  z-index: 999;\n  user-select: none;\n}\n\n.simple-keyboard.hg-theme-default.module-simplekeyboardswipe .hg-button {\n  height: 60px;\n}\n\n.simple-keyboard.module-simplekeyboardswipe .hg-button span {\n  pointer-events: none;\n}\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var o=(s=a,i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(c," */")),r=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot).concat(e," */")}));return[t].concat(r).concat([o]).join("\n")}var s,i,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var s=0;s<e.length;s++){var i=e[s];null!=i[0]&&a[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="(".concat(i[2],") and (").concat(t,")")),n.push(i))}},n}},function(e,n,t){"use strict";var a,o={},r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},s=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function i(e,n){for(var t=[],a={},o=0;o<e.length;o++){var r=e[o],s=n.base?r[0]+n.base:r[0],i={css:r[1],media:r[2],sourceMap:r[3]};a[s]?a[s].parts.push(i):t.push(a[s]={id:s,parts:[i]})}return t}function c(e,n){for(var t=0;t<e.length;t++){var a=e[t],r=o[a.id],s=0;if(r){for(r.refs++;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(h(a.parts[s],n))}else{for(var i=[];s<a.parts.length;s++)i.push(h(a.parts[s],n));o[a.id]={id:a.id,refs:1,parts:i}}}}function u(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var a=t.nc;a&&(e.attributes.nonce=a)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function v(e,n,t,a){var o=t?"":a.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var r=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(r,s[n]):e.appendChild(r)}}function f(e,n,t){var a=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,m=0;function h(e,n){var t,a,o;if(n.singleton){var r=m++;t=p||(p=u(n)),a=v.bind(null,t,r,!1),o=v.bind(null,t,r,!0)}else t=u(n),a=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=i(e,n);return c(t,n),function(e){for(var a=[],r=0;r<t.length;r++){var s=t[r],u=o[s.id];u&&(u.refs--,a.push(u))}e&&c(i(e,n),n);for(var l=0;l<a.length;l++){var d=a[l];if(0===d.refs){for(var v=0;v<d.parts.length;v++)d.parts[v]();delete o[d.id]}}}}},function(e,n,t){"use strict";t.r(n);t(0);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=function e(){var n=this;(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")})(this,e),a(this,"init",(function(e,t,a){n.canvasW=t,n.canvasH=a;var o=document.createElement("canvas");o.className="swipeCanvasElement",o.width=t,o.height=a,e.insertAdjacentElement("beforebegin",o),n.canvas=document.querySelector(".swipeCanvasElement"),n.ctx=n.canvas.getContext("2d")})),a(this,"clear",(function(){n.ctx.clearRect(0,0,n.canvasW,n.canvasH)})),a(this,"draw",(function(e,t,a,o){n.ctx.beginPath(),n.ctx.moveTo(e,t),n.ctx.lineTo(a,o),n.ctx.strokeStyle="rgba(10, 103, 115, 0.9)",n.ctx.lineWidth=3,n.ctx.stroke(),n.ctx.closePath()}))};n.default=function e(){(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")})(this,e),function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(this,"init",(function(e){e.registerModule("swipe",(function(n){n.Canvas=o,n.init=function(){n.canvasHandler=new n.Canvas,n.initVars(),n.canvasHandler.init(e.keyboardDOM,n.canvasW,n.canvasH),n.initEvents()},n.initVars=function(){var t=e.keyboardDOMClass;e.keyboardDOM=document.querySelector(".".concat(t)),n.canvasW=e.keyboardDOM.offsetWidth,n.canvasH=e.keyboardDOM.offsetHeight,n.isMouseClicked=!1,n.isMouseInCanvas=!1,n.prevX=0,n.currX=0,n.prevY=0,n.currY=0,n.lastButton="",n.swipeTolerance=30,n.stoppedTime=50,n.repeatResetTime=200},n.initEvents=function(){n.canvasHandler.canvas.addEventListener("mousemove",(function(e){n.onMouseMove(e)}),!1),n.canvasHandler.canvas.addEventListener("mousedown",(function(e){n.onMouseDown(e)}),!1),n.canvasHandler.canvas.addEventListener("mouseup",(function(){n.onMouseUp()}),!1),n.canvasHandler.canvas.addEventListener("mouseout",(function(){n.onMouseOut()}),!1),n.canvasHandler.canvas.addEventListener("mouseenter",(function(e){n.onMouseEnter(e)}),!1),document.addEventListener("touchstart",n.touchHandler,!0),document.addEventListener("touchmove",n.touchHandler,!0),document.addEventListener("touchend",n.touchHandler,!0),document.addEventListener("touchcancel",n.touchHandler,!0)},n.onMouseDown=function(e){n.swipeStart=!0,n.isMouseClicked=!0,n.isMouseInCanvas=!0,n.updateCurrentPosition(e),n.canvasHandler.canvas.classList.add("swipe-mousedown"),n.canvasHandler.canvas.classList.remove("swipe-mouseup"),n.isMouseHold=!0,n.holdTimeout=setTimeout((function(){n.isMouseHold&&n.handleInteraction(e),clearTimeout(n.holdTimeout)}),500)},n.onMouseUp=function(){n.isMouseHold=!1,n.swipeStart=!1,n.canvasHandler.clear(),n.isMouseClicked=!1,n.canvasHandler.canvas.classList.add("swipe-mouseup"),n.canvasHandler.canvas.classList.remove("swipe-mousedown"),n.canvasHandler.canvas.classList.remove("swipe-mouseenter"),n.canvasHandler.canvas.classList.remove("swipe-mousemove")},n.onMouseEnter=function(){n.swipeStart=!1,n.isMouseClicked=!1,n.canvasHandler.clear(),n.isMouseInCanvas=!0,n.canvasHandler.canvas.classList.add("swipe-mouseenter"),n.canvasHandler.canvas.classList.remove("swipe-mouseout")},n.onMouseOut=function(){n.swipeStart=!1,n.canvasHandler.clear(),n.isMouseInCanvas=!1,n.canvasHandler.canvas.classList.add("swipe-mouseout"),n.canvasHandler.canvas.classList.remove("swipe-mouseenter"),n.canvasHandler.canvas.classList.remove("swipe-mousemove")},n.onMouseMove=function(e){n.isMouseHold=!1,n.isMouseClicked&&n.isMouseInCanvas&&(clearTimeout(n.mouseStopped),n.mouseStopped=!1,n.updateCurrentPosition(e),n.canvasHandler.draw(n.prevX,n.prevY,n.currX,n.currY),n.mouseStopped=setTimeout((function(){n.mouseStopped=!0,n.handleInteraction(e)}),n.stoppedTime)),n.canvasHandler.canvas.classList.add("swipe-mousemove")},n.updateCurrentPosition=function(e){var t=n.canvasHandler.canvas.getBoundingClientRect();n.prevX=n.currX,n.prevY=n.currY,n.currX=e.clientX-t.left,n.currY=e.clientY-t.top,n.getMouseDirection(e)},n.getMouseDirection=function(e){var t,a;n.enforceTolerance(n.prevX,n.currX)&&(t=n.prevX<n.currX?"right":"left"),n.enforceTolerance(n.prevX,n.currX)&&(a=n.prevY<n.currY?"down":"up"),(a!==n.yDirection||t!==n.xDirection)&&(t&&(n.xDirection=t),a&&(n.yDirection=a),n.swipeStart&&(n.handleInteraction(e),n.swipeStart=!1))},n.handleInteraction=function(e){n.canvasHandler.canvas.style.display="none";var t=document.elementFromPoint(e.clientX,e.clientY);if(t){var a=t.getAttribute("data-skbtn");if(a&&(n.lastButton!==a||n.isMouseHold)&&t.onclick)if(!n.isMouseHold||(a.includes("{")||a.includes("}"))&&"{bksp}"!==a&&"{space}"!==a){clearTimeout(n.holdInteractionTimeout),t.onclick(),n.lastButton=a;var o=setTimeout((function(){clearTimeout(o),n.lastButton=""}),n.repeatResetTime)}else n.holdInteractionTimeout=setTimeout((function(){t.onclick(),n.handleInteraction(e)}),100);n.canvasHandler.canvas.style.display="block"}},n.enforceTolerance=function(e,t,a){a=a||n.swipeTolerance;var o=Math.abs(e-t);return!!(o>a||0===o)},n.throttle=function(e,n){var t=!1;t||(e(),t=!0,setTimeout((function(){t=!1}),n))},n.touchHandler=function(e){var t=e.changedTouches[0],a="";switch(e.type){case"touchstart":a="mousedown";break;case"touchmove":a="mousemove";break;case"touchend":a="mouseup";break;default:return}var o=document.createEvent("MouseEvent");o.initMouseEvent(a,!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null),n.canvasHandler.canvas.dispatchEvent(o),e.preventDefault()},n.init()}))}))}}])}));