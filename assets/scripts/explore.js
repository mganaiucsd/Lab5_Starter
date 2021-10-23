// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  var inputTxt = document.getElementById('text-to-speak');
  var voiceSelect = document.getElementById('voice-select');
  var utterance = new SpeechSynthesisUtterance();
  var face = document.querySelector('img');
  var speak = document.querySelector('button');
  
  
  synth.addEventListener('voiceschanged', (event) => {
    var voices = synth.getVoices();
    for (var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.text = voices[i].name + ' (' + voices[i].lang + ')';
      option.value = i;
      voiceSelect.appendChild(option);
    }
  });
  
  voiceSelect.addEventListener('change', (event) => {
    utterance.voice = synth.getVoices()[event.target.value];
  });

  inputTxt.addEventListener('input', (event) => {
    utterance.text = event.target.value;
  });
  
  utterance.addEventListener('end', (event) => {
    face.setAttribute('src', 'assets/images/smiling.png');
  });

  speak.addEventListener('click', (event) => {
    if (utterance.text != ''){
      face.setAttribute('src', 'assets/images/smiling-open.png');
      synth.speak(utterance);
    }
  });
}

