function init(){

    let respostas = {
        
    }
    function escrevePergunta(){
        let Perguntas = document.getElementsByClassName("perguntas");
        let resposta = document.getElementsByClassName("respostaPergunta1");
        for(let i=0; i<Perguntas.length; i++){
            Perguntas[i].style.display ='block';
            for(let j=0; j<resposta.length; j++){
                resposta[2].addEventListener("click", ()=>{
                    let numeroPergunta = document.getElementsByClassName("numeroPergunta");
                    numeroPergunta[0].style.backgroundColor = "green";
                    Perguntas[i].style.display ='none';
                })
            }
        }
            
    }
    escrevePergunta()
 
    function resposta(){
        return;
    }
}
window.addEventListener("load", init)