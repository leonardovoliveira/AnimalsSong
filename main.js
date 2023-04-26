function tocaSom(id){
    document.querySelector(id).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let i = 0;

while(i < listaTeclas.length) {
    
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const id = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(id);
    }
    i++;
}