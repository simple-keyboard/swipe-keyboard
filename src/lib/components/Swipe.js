import './Swipe.css';
import Canvas from '../components/Canvas';

class SimpleKeyboardSwipe {
  init = (keyboard) => {
    keyboard.registerModule(
      "swipe",
      (module) => {
        module.initVars = () => {
          let keyboardDOMClass = keyboard.keyboardDOMClass;
      
          keyboard.keyboardDOM = document.querySelector(`.${keyboardDOMClass}`);
          module.canvasW = keyboard.keyboardDOM.offsetWidth;
          module.canvasH = keyboard.keyboardDOM.offsetHeight;
          module.isMouseClicked = false
          module.isMouseInCanvas = false
          module.prevX = 0;
          module.currX = 0;
          module.prevY = 0;
          module.currY = 0;
          module.lastButton = '';
          module.swipeTolerance = 30;
          module.stoppedTime = 50;
          module.repeatResetTime = 200;
        }
      
        module.initEvents = () => {
          module.canvasHandler.canvas.addEventListener("mousemove", (e) => {
            module.onMouseMove(e);
          }, false);
          module.canvasHandler.canvas.addEventListener("mousedown", (e) => {
            module.onMouseDown(e);
          }, false);
          module.canvasHandler.canvas.addEventListener("mouseup", (e) => {
            module.onMouseUp();
          }, false);
          module.canvasHandler.canvas.addEventListener("mouseout", (e) => {
            module.onMouseOut();
          }, false);
          module.canvasHandler.canvas.addEventListener("mouseenter", (e) => {
            module.onMouseEnter(e);
          }, false);

          document.addEventListener("touchstart", module.touchHandler, true);
          document.addEventListener("touchmove", module.touchHandler, true);
          document.addEventListener("touchend", module.touchHandler, true);
          document.addEventListener("touchcancel", module.touchHandler, true);  
        }
      
        module.onMouseDown = (e) => {
          module.swipeStart = true;
          module.isMouseClicked = true;
          module.isMouseInCanvas = true;
          module.updateCurrentPosition(e);
          module.canvasHandler.canvas.classList.add("swipe-mousedown");
          module.canvasHandler.canvas.classList.remove("swipe-mouseup");

          module.isMouseHold = true;
          module.holdTimeout = setTimeout(function() {
            if(module.isMouseHold){
              module.handleInteraction(e);
            }
            clearTimeout(module.holdTimeout);
          }, 500);
        }
        
        module.onMouseUp = () => {
          module.isMouseHold = false;
          module.swipeStart = false;
          module.canvasHandler.clear();
          module.isMouseClicked = false;
          module.canvasHandler.canvas.classList.add("swipe-mouseup");
          module.canvasHandler.canvas.classList.remove("swipe-mousedown");
          module.canvasHandler.canvas.classList.remove("swipe-mouseenter");
          module.canvasHandler.canvas.classList.remove("swipe-mousemove");
        }
        
        module.onMouseEnter = (e) => {
          module.swipeStart = false;
          module.isMouseClicked = false;
          module.canvasHandler.clear();
          module.isMouseInCanvas = true;
          module.canvasHandler.canvas.classList.add("swipe-mouseenter");
          module.canvasHandler.canvas.classList.remove("swipe-mouseout");
        }
        
        module.onMouseOut = () => {
          module.swipeStart = false;
          module.canvasHandler.clear();
          module.isMouseInCanvas = false;
          module.canvasHandler.canvas.classList.add("swipe-mouseout");
          module.canvasHandler.canvas.classList.remove("swipe-mouseenter");
          module.canvasHandler.canvas.classList.remove("swipe-mousemove");
        }
      
        module.onMouseMove = (e) => {
          module.isMouseHold = false;

          if (module.isMouseClicked && module.isMouseInCanvas) {
            clearTimeout(module.mouseStopped);
            module.mouseStopped = false;
      
            module.updateCurrentPosition(e)
            module.canvasHandler.draw(
              module.prevX,
              module.prevY,
              module.currX,
              module.currY
            );
      
            module.mouseStopped = setTimeout(() => {
              module.mouseStopped = true;
              module.handleInteraction(e);
            }, module.stoppedTime);
          }

          module.canvasHandler.canvas.classList.add("swipe-mousemove");
        }
      
        module.updateCurrentPosition = (e) => {
          var rect = module.canvasHandler.canvas.getBoundingClientRect();
      
          module.prevX = module.currX
          module.prevY = module.currY
          module.currX = e.clientX - rect.left
          module.currY = e.clientY - rect.top


          module.getMouseDirection(e);
        }

        module.getMouseDirection = (e) => {
          let stagingX;
          let stagingY;
      
          //deal with the horizontal case
          if(module.enforceTolerance(module.prevX, module.currX)){
            if (module.prevX < module.currX) {
              stagingX = "right";
            } else {
              stagingX = "left";
            }
          }
          
       
          //deal with the vertical case
          if(module.enforceTolerance(module.prevX, module.currX)){
            if (module.prevY < module.currY) {
              stagingY = "down";
            } else {
              stagingY = "up";
            }
          }

          if(
            stagingY !== module.yDirection || stagingX !== module.xDirection
            ){
            
            if(stagingX)
              module.xDirection = stagingX;

            if(stagingY)
              module.yDirection = stagingY;

            if(
              // For now, tracking only includes swipeStart and wait time
              //(stagingX || stagingY) &&
              module.swipeStart
            ){
              module.handleInteraction(e);
              module.swipeStart = false;
            }

          }
        }

        module.handleInteraction = (e) => {
          module.canvasHandler.canvas.style.display = "none";

          let element = document.elementFromPoint(e.clientX, e.clientY);

          if(element){
            let label = element.getAttribute("data-skbtn");

            if(
              label &&
              (module.lastButton !== label || module.isMouseHold) &&
              element.onclick
            ){
              if(
                module.isMouseHold &&
                (
                  (!label.includes("{") && !label.includes("}")) ||
                  label === "{bksp}" ||
                  label === "{space}"
                )
              ){
                module.holdInteractionTimeout = setTimeout(() => {
                  element.onclick();
                  module.handleInteraction(e);
                }, 100);
              } else{
                clearTimeout(module.holdInteractionTimeout);
                element.onclick();
                module.lastButton = label;

                let lastButtonTimeout = setTimeout(() => {
                  clearTimeout(lastButtonTimeout);
                  module.lastButton = '';
                }, module.repeatResetTime);
              }
            }

            module.canvasHandler.canvas.style.display = "block";
          }
        }

        module.enforceTolerance = (n1, n2, tolerance) => {
          tolerance = tolerance || module.swipeTolerance;

          let numAbs = Math.abs(n1 - n2);

          if(numAbs > tolerance || numAbs === 0){
            return true;
          } else {
            return false;
          }
        }

        module.throttle = (callback, limit) => {
          var wait = false;
          if (!wait) {
              callback();
              wait = true;
              setTimeout(function () {
                  wait = false;
              }, limit);
          }
        }

        module.touchHandler = (event) => {
          var touches = event.changedTouches,
            first = touches[0],
            type = "";

          switch (event.type) {
            case "touchstart":
              type = "mousedown";
              break;
            case "touchmove":
              type = "mousemove";
              break;
            case "touchend":
              type = "mouseup";
              break;
            default:
              return;
          }

          var simulatedEvent = document.createEvent("MouseEvent");
          simulatedEvent.initMouseEvent(
            type, true, true, window, 1,
            first.screenX, first.screenY,
            first.clientX, first.clientY, false,
            false, false, false, 0 , null
          );

          module.canvasHandler.canvas.dispatchEvent(simulatedEvent);
          event.preventDefault();
        }

        module.canvasHandler = new Canvas();
        module.initVars();
        module.canvasHandler.init(keyboard.keyboardDOM, module.canvasW, module.canvasH);
        module.initEvents();
      }
    )
  }
}

export default SimpleKeyboardSwipe;
