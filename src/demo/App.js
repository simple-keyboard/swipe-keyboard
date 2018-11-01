import Keyboard from 'simple-keyboard';
import '../lib/components/Swipe.css';
import swipe from '../lib/components/Swipe';

import 'simple-keyboard/build/css/index.css';
import './css/App.css';

class App {
  constructor(){
    document.addEventListener('DOMContentLoaded', this.onDOMLoaded);

    this.layoutName = "default";
  }

  onDOMLoaded = async () => {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      newLineOnEnter: true,
      modules: [
        swipe
      ]
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