var synth = window.speechSynthesis;
var voices = [];
 

function over(xy){
    synth.cancel(); //for only once
    var toSpeak = new SpeechSynthesisUtterance(xy);
    voices = synth.getVoices();
    toSpeak.voice=voices[1];
    toSpeak.lang = 'es';
     synth.speak(toSpeak);
        };

function out(){
    synth.cancel();
        };
 
