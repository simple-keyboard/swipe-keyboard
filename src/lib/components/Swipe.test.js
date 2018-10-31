import 'simple-keyboard';
import KeyboardSwipe from './Swipe';


it('Keyboard renders without crashing', () => {
  const div = document.createElement('div');
  
  div.className += "simple-keyboard";
  document.body.appendChild(div);

  let keyboard = new KeyboardSwipe({
    debug: true,
    onChange: input => input,
    onKeyPress: button => button,
    newLineOnEnter: true
  });
});