function init(){

    let respostas = [
        {
            pergunta: document.getElementById("pergunta1"),
            resposta: 3,
            corpResp: document.getElementById("1"),
        },
        {
            pergunta: document.getElementById("pergunta2"),
            resposta: 3,
            corpResp: document.getElementById("2"),
        },
        {
            pergunta: document.getElementById("pergunta3"),
            resposta: 3,
        }
    ]
    let perguntaAtual = 0;
    let perguntas = document.getElementsByClassName("perguntas");
    let resp = document.getElementsByClassName("resp");
    debugger
    function escrevePergunta(){
        debugger
        respostas[perguntaAtual].pergunta.style.display = "block";
        if(perguntaAtual == 5) return;
        respostas[perguntaAtual].corpResp.addEventListener("click",()=>{
            respostas[perguntaAtual].pergunta.style.display = "none";
            perguntaAtual++;
            escrevePergunta();   
        });
    }
    debugger
    escrevePergunta();
    //let element = perguntas[perguntaAtual].TagName("tbody");
    //element.addEventListener("click", proxima)
           
/*     function resposta(){
        let respostaCorreta = respostas.resposta;
        let idResposta =document.getElementById(resposta.resposta);
        if()
        return;
    }*/
} 
window.addEventListener("load", init)