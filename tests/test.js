import Keyboard from 'simple-keyboard';
import SimpleKeyboardSwipe from '../src/index';

test('Runs without crashing', () => {
  const div = document.createElement('div');
  
  div.className = "simple-keyboard";
  document.body.appendChild(div);

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