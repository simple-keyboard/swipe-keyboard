import Keyboard from 'simple-keyboard';
import SimpleKeyboardSwipe from '../src/index';

test('Runs without crashing', () => {
  const containerDiv = document.createElement('div');
  containerDiv.className = "keyboardContainer";

  const keyboardDiv = document.createElement('div');
  keyboardDiv.className = "simple-keyboard";

  containerDiv.appendChild(keyboardDiv);
  document.body.appendChild(containerDiv);

  new Keyboard({
    debug: true,
    onChange: input => input,
    onKeyPress: button => button,
    useMouseEvents: true,
    modules: [
      SimpleKeyboardSwipe
    ]
  });
});