// expose.js

window.addEventListener('DOMContentLoaded', init);

const selectSound = document.getElementById('horn-select');
selectSound.addEventListener('change', (event) => {
  const audio = document.querySelector('.hidden');
  audio.src = `assets/audio/${event.target.value}.mp3`;
  const image = document.querySelector('section > img');
  image.src = `assets/images/${event.target.value}.svg`;
  console.log(event.target.value);
  console.log(selectSound);
});

const inputVolume = document.querySelector("[type='range']");
inputVolume.addEventListener('input', (event) => {
  const audio = document.querySelector('.hidden');
  audio.volume = event.target.value/100;
  const image = document.querySelector('div > img');
  let level = 0;
  if (event.target.value < 33) {
    level = 1;
  } else if (event.target.value < 67) {
    level = 2;
  } else {
    level = 3;
  }
  image.src = `assets/icons/volume-level-${level}.svg`;
});


function init() {
  // assuming this is the right spot to put this:


}