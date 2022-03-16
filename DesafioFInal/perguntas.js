function init(){

    let respostas = {
        pergunta: 1,
        resposta: 3,
    }
    let perguntaAtual = 0;
    let perguntas = document.getElementsByClassName("perguntas");
    perguntas[perguntaAtual].style.display = "block";
    function escrevePergunta(){
        perguntas[perguntaAtual].style.display = "block";
        if(perguntaAtual == 5) return;
        perguntas[perguntaAtual].addEventListener("click", ()=>{
            perguntas[perguntaAtual].style.display = "none";
            perguntaAtual++;
            escrevePergunta();           
        });
    }
    escrevePergunta();
/*     function resposta(){
        let respostaCorreta = respostas.resposta;
        let idResposta =document.getElementById(resposta.resposta);
        if()
        return;
    }*/
} 
window.addEventListener("load", init)