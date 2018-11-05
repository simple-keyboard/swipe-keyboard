import Keyboard from 'simple-keyboard';

it('Keyboard renders without crashing', () => {
  const div = document.createElement('div');
  
  div.className += "simple-keyboard";
  document.body.appendChild(div);

  console.log(document.body.innerHTML);

  let keyboard = new Keyboard({
    debug: true,
    onChange: input => input,
    onKeyPress: button => button,
    newLineOnEnter: true
  });
});