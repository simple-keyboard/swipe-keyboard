import 'simple-keyboard';
import KeyboardSwipe from '../lib/components/Swipe';
import '../lib/components/Swipe.css';

import 'simple-keyboard/build/css/index.css';
import './css/App.css';

/**
 * Available layouts
 * https://github.com/hodgef/simple-keyboard-layouts/tree/master/src/lib/layouts
 */
//import layout from '../lib/layouts/japanese';

class App {
  constructor(){
    document.addEventListener('DOMContentLoaded', this.onDOMLoaded);

    this.layoutName = "default";
  }

  onDOMLoaded = async () => {
    this.keyboard = new KeyboardSwipe({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      newLineOnEnter: true
    });

    /**
     * Adding preview (demo only)
     */
    document.querySelector('.keyboardContainer').insertAdjacentHTML('beforebegin', `
    <div class="simple-keyboard-preview">
      <textarea class="input"></textarea>
    </div>
    `);

    document.querySelector(".input").addEventListener("input", event => {
      this.keyboard.setInput(event.target.value);
    });
  
    console.log(this.keyboard);
  }

  handleShiftButton = () => {
    let layoutName = this.layoutName;
    let shiftToggle = this.layoutName = layoutName === "default" ? "shift" : "default";
  
    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  }

  onChange = input => {
    document.querySelector('.input').value = input;
  }

  onKeyPress = button => {
    console.log("Button pressed", button);
  
      /**
       * Shift functionality
       */
      if(button === "{lock}" || button === "{shift}")
        this.handleShiftButton();
  }

}

export default App;