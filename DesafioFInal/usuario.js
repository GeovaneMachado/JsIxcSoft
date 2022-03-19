function usuario(){
    let body = document.body;
    let divIniciar = document.getElementById('divIniciar');
    let bemVindo = document.getElementById('bemVindo');
    let btnIniciar = document.getElementById('btnIniciar');
    let btnCadastrar = document.getElementById('cadastro');
    btnCadastrar.style.margin = "8px 50px 20px 100px";
 
    function createFieldUser(){
        let inputUser = document.getElementsByClassName('mostraCampoUsuario');
        divIniciar.removeChild(btnIniciar);
        for(let i=0; i<inputUser.length;i++)
        {
            inputUser[i].style.display = "block";
        }
        
    } 

    let user = localStorage.getItem("usuario")
    if(user == null){
        user = [];
    }
    else{
        user = JSON.parse(user);
    }
    
    

    btnIniciar.addEventListener('click', ()=>{
        divIniciar.removeChild(bemVindo);
        createFieldUser();
    })

    function createUser(){
        let nameUser = document.getElementById('nameUser');
        if(nameUser.value == ''){
            alert('Digite o nome do usuario');
            createFieldUser();
        }
        let newUser = {
            nome: nameUser.value,
            pontos: 500,
            ranking: 1
        }
        return newUser;
    }

    function initPerguntas(){
        body.removeChild(divIniciar);
        let divPerguntas = document.getElementById('Perguntas');
        divPerguntas.style.display = 'block';
    }

    btnCadastrar.addEventListener('click', function(){
        let newUser = createUser();
        user.push(newUser);
        localStorage.setItem('usuario', JSON.stringify(user));
        initPerguntas();     
    });
    function showUser(){
        let table = document.getElementById("ranking");
        for(let i = 0; i<user.length; i++){
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            table.appendChild(tr);
            tr.appendChild(td)
            td.innerText = user[i].nome;   
        }
    }
    showUser();
}