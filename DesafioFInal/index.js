function init(){
    let body = document.body;
    let divMain = document.getElementById('divIniciar');
    let bemVindo = document.getElementById('bemVindo');
    let iniciar = document.getElementById('init');
    function createFieldUser(){
        let inputUser = document.getElementsByClassName('nameUser');

        inputUser.style.display[0] = "block";
        
        
    } 
    iniciar.addEventListener('click', ()=>{
        divMain.removeChild(bemVindo);
        createFieldUser();
    })

}

window.addEventListener("load", init);