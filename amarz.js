function init(){
/*     function Dados(){
        let name = document.getElementById('nome');
        let idade = document.getElementById('idade');
        localStorage.setItem("nome", name.value);
        localStorage.setItem("idade", idade.value);
        name.value = '';
        idade.value = '';
    }*/


    let enter = document.getElementById("enter");
    let mostrar = document.getElementById("mostrar");


   /* enter.addEventListener('click', Dados);
    mostrar.addEventListener("click", ()=>{
        let name = localStorage.getItem("nome");
        let idade = localStorage.getItem("idade");
        let par = document.getElementById("mostra");
        if(name == null || idade == null){
            return;
        }
        par.innerText = "nome: " + name + " idade: " + idade;
    }) */
    function Dados(){
        let user ={
            nome: document.getElementById('nome').value,
            idade : document.getElementById('idade').value
        }
        localStorage.setItem("user", JSON.stringify(user));
        user.nome.value = '';
        user.idade.value = '';
    }
    enter.addEventListener('click', Dados);
    mostrar.addEventListener("click", ()=>{
        let user = localStorage.getItem("user");
        JSON.parse(user);
        let par = document.getElementById("mostra");
        if(user.nome == null || user.idade == null){
            return;
        }
        par.innerText = "nome: " + user.nome + " idade: " + user.idade;
    })
}



window.addEventListener('load', init);