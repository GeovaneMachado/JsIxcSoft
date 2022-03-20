function Quiz(){
    let respostas = [
        {
            pergunta: document.getElementById("pergunta1"),
            resposta: 3,
            fieldRespostas: document.getElementsByClassName("resposta1"),
            pontos: 100,
        },
        {
            pergunta: document.getElementById("pergunta2"),
            resposta: 4,
            fieldRespostas: document.getElementsByClassName("resposta2"),
            pontos: 100,
        },
        {
            pergunta: document.getElementById("pergunta3"),
            resposta: 2,
            fieldRespostas: document.getElementsByClassName("resposta3"),
            pontos: 100,
        },
        {
            pergunta: document.getElementById("pergunta4"),
            resposta: 1,
            fieldRespostas: document.getElementsByClassName("resposta4"),
            pontos: 100,
        },
        {
            pergunta: document.getElementById("pergunta5"),
            resposta: 2,
            fieldRespostas: document.getElementsByClassName("resposta5"),
            pontos: 100,
        }
    ]


    let perguntaAtual = 0;
    let numeroPerguntas = document.getElementsByClassName("numeroPergunta");

    function proximaPergunta(){
        respostas[perguntaAtual].pergunta.style.display = "none";
        perguntaAtual++;
        if(perguntaAtual == 5){
            ranking();
            return;
        }
        renderizarPerguntas();  
    }
    function ranking(){
        updateUser(pontuacao);
        let rank = document.getElementById("ranking");
        numeroPerguntas[5].style.backgroundColor ="yellow";
        rank.style.display = "block";
    }
    let pontuacao = 0;
    function renderizarPerguntas(){
        respostas[perguntaAtual].pergunta.style.display = "block";
        diminuindoPontos = setInterval(()=>{
            respostas[perguntaAtual].pontos -= 1;
        }, 1000);   
        for(let i=0; i<respostas[perguntaAtual].fieldRespostas.length; i++){
            respostas[perguntaAtual].fieldRespostas[i].addEventListener("click", ()=>{
                clearInterval(diminuindoPontos)
                console.log(respostas[perguntaAtual].fieldRespostas[i]);
                verificaResposta(respostas[perguntaAtual].fieldRespostas[i]);
                proximaPergunta();
            });
        }
    }



    function verificaResposta(respostaSelecionada){
        if(respostaSelecionada.id == respostas[perguntaAtual].resposta){
            numeroPerguntas[perguntaAtual].style.backgroundColor = "green";
            pontuacao += respostas[perguntaAtual].pontos;
        }
        else{
            numeroPerguntas[perguntaAtual].style.backgroundColor = "red";
        }
    }
    renderizarPerguntas();

    function createRanking(i){
        let table = document.getElementById("ranking");
        let tr = document.createElement("tr");
        let tdPos = document.createElement("td");
        let tdNome= document.createElement("td");
        let tdPontos= document.createElement("td");
        tdPos.style.maxWidth = "80px";
        tdPontos.style.maxWidth = "100px";
        table.appendChild(tr);
        tr.appendChild(tdPos);
        tr.appendChild(tdNome);
        tr.appendChild(tdPontos);
        tdPos.innerText = i + 1;   
        tdNome.innerText = user[i].nome;   
        tdPontos.innerText = user[i].pontos;   
    }

    let user = [];

    function sortUser(a, b){
        if(a.pontos > b.pontos){
            return -1;
        }
        if(a.pontos < b.pontos){
            return 1;
        }
        return 0;
    }
    function updateUser(ponts){
        user = localStorage.getItem("usuario")
        user = JSON.parse(user);
        user[user.length-1].pontos = ponts;
        user.sort(sortUser);
        console.log(user)
        for(let i = 0; i<user.length; i++){
            if(i > 4){
                return;
            }
            createRanking(i);
        }
        localStorage.setItem("usuario", JSON.stringify(user));
    }
    
} 
