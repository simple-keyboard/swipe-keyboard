<h1><a href="https://github.com/hodgef/simple-keyboard" title="simple-keyboard repository"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/simplekeyboard-avatar.png" width="50" align="left"></a> swipe-keyboard</h1>

  <a href="https://simple-keyboard-swipe-demo.glitch.me/" title="simple-keyboard repository" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/swipe-keyboard.gif" width="100%"></a>
  <blockquote>Swipe to type module for simple-keyboard (non-predictive)</blockquote>
  
## Installation

### npm

`npm install simple-keyboard swipe-keyboard --save`

### zip file (self-hosted)

[Click here to download the latest release (zip format).](https://github.com/hodgef/swipe-keyboard/zipball/master)

> Want to use a CDN instead of self-host? Scroll down to the "Usage with CDN" instructions below.

## Usage with npm


````js
import Keyboard from 'simple-keyboard';
import swipe from 'swipe-keyboard';

// CSS
import 'simple-keyboard/build/css/index.css';
import 'swipe-keyboard/build/css/index.css';

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  modules: [
    swipe
  ]
});

function onChange(input){
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button){
  console.log("Button pressed", button);
}
````

### html

````html
<input class="input" />
<div class="keyboardContainer">
  <div class="simple-keyboard"></div>
</div>
````

<a href="https://codesandbox.io/s/93jxmkqo7o" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>

## Usage with CDN

### html

````html
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/css/index.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swipe-keyboard@latest/build/css/index.css">
</head>

<body>
  <input class="input" />
  <div class="keyboardContainer">
    <div class="simple-keyboard"></div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/index.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swipe-keyboard@latest/build/index.min.js"></script>
  <script src="src/index.js"></script>
</body>

</html>
````

### js (index.js)

````js
let Keyboard = window.SimpleKeyboard.default;
let swipe = window.SimpleKeyboardSwipe.default;

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  modules: [
    swipe
  ]
});

function onChange(input){
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button){
  console.log("Button pressed", button);
}
````

<a href="https://simple-keyboard-swipe-demo.glitch.me/" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>

# Options and Customization

> To fully customize your virtual keyboard, check out the main simple-keyboard repository:

<a href="https://github.com/hodgef/simple-keyboard" title="simple-keyboard repository"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/simplekeyboard-banner3x.png" align="center"></a>
