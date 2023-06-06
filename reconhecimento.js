let chute=document.querySelector('#chute')
let valorTela=0
const SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang='pt-Br'
recognition.start()

recognition.addEventListener('result',onSpeak)
function onSpeak(e){
    valorTela = e.results[0][0]["transcript"]
    chute.innerHTML=`<span class="box">${valorTela}</span>`
    
    verificar()
}


recognition.addEventListener('end', ()=>recognition.start())