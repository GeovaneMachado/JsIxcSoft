function init(){
    let Perguntas = [{
            id: 1,
            pergunta: "fasfblabsjflsfjaçsf",
            Opcoes: [
                {resposta:  "kfamgkldfm", result:false },
                {resposta:  "kfamgkldfdsaffm", result:false },
                {resposta:  "kfamgfsadfkldfm", result:true },
                {resposta:  "kfamgkasdfasdfcsldfm", result:false },
                {resposta:  "gcdsaekldfm", result:false },
            ],
            respondeu: false,
        },
        {
            id: 2,
            pergunta: "fasfblabsjflsfjaçsf",
            Opcoes: [
                {resposta:  "kfamgkldfm", result:false },
                {resposta:  "kfamgkldfdsaffm", result:false },
                {resposta:  "kfamgfsadfkldfm", result:true },
                {resposta:  "kfamgkasdfasdfcsldfm", result:false },
                {resposta:  "gcdsaekldfm", result:false },
            ],
            respondeu: false,
        },
        {
            id: 3,
            pergunta: "fasfblabsjflsfjaçsf",
            Opcoes: [
                {resposta:  "kfamgkldfm", result:false },
                {resposta:  "kfamgkldfdsaffm", result:false },
                {resposta:  "kfamgfsadfkldfm", result:true },
                {resposta:  "kfamgkasdfasdfcsldfm", result:false },
                {resposta:  "gcdsaekldfm", result:false },
            ],
            respondeu: false,
        },
        {
            id: 4,
            pergunta: "fasfblabsjflsfjaçsf",
            Opcoes: [
                {resposta:  "kfamgkldfm", result:false },
                {resposta:  "kfamgkldfdsaffm", result:false },
                {resposta:  "kfamgfsadfkldfm", result:true },
                {resposta:  "kfamgkasdfasdfcsldfm", result:false },
                {resposta:  "gcdsaekldfm", result:false },
            ],
            respondeu: false,
        },
        {
            id: 5,
            pergunta: "fasfblabsjflsfjaçsf",
            Opcoes: [
                {resposta:  "kfamgkldfm", result:false },
                {resposta:  "kfamgkldfdsaffm", result:false },
                {resposta:  "kfamgfsadfkldfm", result:true },
                {resposta:  "kfamgkasdfasdfcsldfm", result:false },
                {resposta:  "gcdsaekldfm", result:false },
            ],
            respondeu: false,
        }
    ]

    escrevePergunta();
    function escrevePergunta(){
        let tituloPergunta = document.getElementById("tituloPergunta");
        let perguntaAtual = 0;
        tituloPergunta.innerText = Perguntas[perguntaAtual].pergunta;
        let item = document.createElement('li');
        let lista = document.getElementById("Opcoes");
        for(let i= 0;i < Perguntas[perguntaAtual].Opcoes.length; i++){
            item.innerText = Perguntas[perguntaAtual].Opcoes[i].resposta
            lista.appendChild(item);
        }
    }

    function resposta(){
    return;
    }
}
window.addEventListener("load", init)