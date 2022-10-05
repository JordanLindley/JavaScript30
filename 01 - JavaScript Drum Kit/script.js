function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  if (!audio) return;; // stop the function from running altogether
  audio.currentTime = 0; // rewind to the start
  
  audio.play();
  key.classList.add('playing');
}

// create function to remove transition of CSS in .key
function removeTransition(event) {
  if (event.propertyName !== 'transform') return; // skip it if it's not a transform
  this.classList.remove('playing');
}

// add an event listener to each key, transition back to default CSS
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// select the keycode for the key pressed, run function playSound when pressed.
window.addEventListener('keydown', playSound)