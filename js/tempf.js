var synth = window.speechSynthesis;
var voices = [];
 

function over(xy){
    synth.cancel(); //for only once
    var toSpeak = new SpeechSynthesisUtterance(xy);
    voices = synth.getVoices();
    toSpeak.voice=voices[4];
    toSpeak.lang = 'es';
    toSpeak.rate=0.8;
     synth.speak(toSpeak);
        };

function out(){
    synth.cancel();
        };
 
