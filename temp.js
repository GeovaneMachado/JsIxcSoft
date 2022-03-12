function init(){
    function BoasVindas(){
        let divBemvindo = document.createElement('div');
        let ola = document.createElement("h1");
        document.body.appendChild(divBemvindo);
        divBemvindo.appendChild(ola);
        divBemvindo.style.display = 'inline-block';
        divBemvindo.style.width = '400px';
        divBemvindo.style.height = '200px';
        divBemvindo.style.textAlign = 'center';
        divBemvindo.style.backgroundColor = 'red';
        ola.innerText = 'Bem vindo!!';
        setTimeout(()=>{
            document.body.removeChild(divBemvindo);
            let paragrafo = document.getElementById('texto')
            paragrafo.style.visibility = 'visible'
        },3000)
    }
    BoasVindas();
    function tempo(){
        let time = Date.now();
        var temp = setInterval(()=>{
            let tempoAtual = Date.now();
            let elapsedTime = Math.floor((tempoAtual - time))/1000;
            time += 0.01;
            document.getElementById('tempo').innerText = elapsedTime.toFixed(2);
        }, 10);
        let btn = document.getElementById('parar');
        btn.addEventListener('click', ()=>{clearInterval(temp)});
    }


    let iniciar = document.getElementById('iniciar');
    iniciar.addEventListener('click', tempo);
    
}

window.addEventListener('load', init);