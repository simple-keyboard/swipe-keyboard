let Keyboard = window.SimpleKeyboard.default;
let swipe = window.SimpleKeyboardSwipe.default;

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  useMouseEvents: true,
  modules: [swipe]
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}
