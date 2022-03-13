function init(){
    let Perguntas = [{
            pergunta: "fasfblabsjflsfjaçsf",
            Opcoes: [
                {resposta:  "kfamgkldfm", result:false },
                {resposta:  "kfamgkldfdsaffm", result:false },
                {resposta:  "kfamgfsadfkldfm", result:true },
                {resposta:  "kfamgkasdfasdfcsldfm", result:false },
                {resposta:  "gcdsaekldfm", result:false },
            ],
        }
    ]
    function createH1Title(){
        let divPergunta = document.getElementById("pergunta");
        let title = document.createElement("h1");
        divPergunta.appendChild(title);
        title.id = "tituloPergunta";
    }
    createH1Title();
    escrevePergunta();
    function escrevePergunta(){
        let tituloPergunta = document.getElementById("tituloPergunta");
        tituloPergunta.innerText = Perguntas[0].pergunta;
        document.getElementById("opcoes").innerText = Perguntas[0].Opcoes[4].resposta
    }

    function resposta(){
    return;
    }
}
window.addEventListener("load", init)