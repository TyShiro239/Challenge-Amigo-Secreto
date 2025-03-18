let nomeDosAmigos = [];
//let numeroAleatorio = Math.floor(Math.random() * nomeDosAmigos.length);



function adicionarAmigo() {
    let nome = document.querySelector("input").value;
    if ((nome.trim()).length !== 0){
        nomeDosAmigos.push(nome);
        nome.innerHTML = ""
        
        limparCampo();

        listaDeAmigos();
    
    }else{
        alert("Por favor, insira um nome válido.");
        limparCampo();
    }
    console.log(nomeDosAmigos);
}


//function sortearAmigo(){}


function limparCampo(){
    nome = document.querySelector("input");
    nome.value = "";
}

function listaDeAmigos(){
    listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    nomeDosAmigos.forEach(nome =>{
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

