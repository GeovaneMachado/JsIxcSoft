function Quiz(){
    let respostas = [
        {
            pergunta: document.getElementById("pergunta1"),
            resposta: 3,
            fieldRespostas: document.getElementsByClassName("resposta1"),
        },
        {
            pergunta: document.getElementById("pergunta2"),
            resposta: 4,
            fieldRespostas: document.getElementsByClassName("resposta2"),
        },
        {
            pergunta: document.getElementById("pergunta3"),
            resposta: 2,
            fieldRespostas: document.getElementsByClassName("resposta3")
        },
        {
            pergunta: document.getElementById("pergunta4"),
            resposta: 1,
            fieldRespostas: document.getElementsByClassName("resposta4")
        },
        {
            pergunta: document.getElementById("pergunta5"),
            resposta: 2,
            fieldRespostas: document.getElementsByClassName("resposta5")
        }
    ]
    let perguntaAtual = 0;
    let numeroPerguntas = document.getElementsByClassName("numeroPergunta");
    let resp = document.getElementsByClassName("resp");

    function proximaPergunta(){
        //verificaResposta(this.id);
        respostas[perguntaAtual].pergunta.style.display = "none";
        perguntaAtual++;
        if(perguntaAtual == 5){
            ranking();
            return;
        }
        renderizarPerguntas();  
    }
    function ranking(){
        let rank = document.getElementById("ranking");
        numeroPerguntas[5].style.backgroundColor ="yellow"
        rank.style.display = "block"
    }
    function renderizarPerguntas(){
        respostas[perguntaAtual].pergunta.style.display = "block";
        
        for(let i=0; i<respostas[perguntaAtual].fieldRespostas.length; i++){
           // console.log(respostas[perguntaAtual].fieldRespostas[i]);
            respostas[perguntaAtual].fieldRespostas[i].addEventListener("click", ()=>{
                console.log(respostas[perguntaAtual].fieldRespostas[i]);
                verificaResposta(respostas[perguntaAtual].fieldRespostas[i]);
                proximaPergunta();
            });
        }
    }
    function verificaResposta(respostaSelecionada){
        console.log(respostaSelecionada)
        Number(respostaSelecionada);
        if(respostaSelecionada.id == respostas[perguntaAtual].resposta){
            numeroPerguntas[perguntaAtual].style.backgroundColor = "green"
        }
        else{
            numeroPerguntas[perguntaAtual].style.backgroundColor = "red"
        }
    }
    renderizarPerguntas();
} 
