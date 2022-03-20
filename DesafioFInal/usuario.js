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
            pontos: 0,
        }
        
        for(let i= 0; i<user.length; i++){
            if(user[i].nome == newUser.nome){
                alert("Usuario já existe")
                nameUser.value = '';
                createFieldUser();
            }
        }
        return newUser;
    }

    function initPerguntas(){
       
        body.removeChild(divIniciar);
        let divPerguntas = document.getElementById('Perguntas');
        divPerguntas.style.display = 'block';
    }

    let user = localStorage.getItem("usuario");
    if(user == null){
        user = [];
    }
    else{
        user = JSON.parse(user);
    }
    console.log(user)
    btnCadastrar.addEventListener('click', function(){
        debugger;
        let newUser = createUser();
        user.push(newUser);
        localStorage.setItem('usuario', JSON.stringify(user));
        initPerguntas();     
       
    }); 


}