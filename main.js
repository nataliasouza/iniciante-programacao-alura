function tocarSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contator = 0;

while(contator < listaDeTeclas.length){
    listaDeTeclas[contator].onclick = tocarSom();
    contator = contator + 1;

    console.log(contator);
}
