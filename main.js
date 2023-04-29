function tocaSom(id){
    document.querySelector(id).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let i= 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const id = `#som_${instrumento}`;
    
    tecla.onclick = function (){
        tocaSom(id);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
            tecla.onkeyup = function(){
                tecla.classList.remove('ativa');
        }
    }
}
}