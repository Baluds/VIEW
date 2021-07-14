var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var cats = [ 'men' , 'women' , 'computer' ,'home' , 'contact' ];
var grammar = '#JSGF V1.0; grammar cats; public <color> = ' + cats.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.continuous = true;


 function searg () {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {

  var cat = event.results[0][0].transcript;
  console.log('Value is ');
  console.log(cat);
  if(cat=='home')
  {
      cat='index';
  }
  if(cat=='man')
  {
      cat='men';
  }
  location.href= cat + '.html';
  console.log('Confidence: ' + event.results[0][0].confidence);
}


recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
}

recognition.onerror = function(event) {
}

