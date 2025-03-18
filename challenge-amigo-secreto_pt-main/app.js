let nomeDosAmigos = [];



function adicionarAmigo() {
    let nome = document.querySelector("input").value;
    if ((nome.trim()).length !== 0){
        nomeDosAmigos.push(nome);
        
        limparCampo();

        listaDeAmigos();

        mensagemDeSorteio();
    
    }else{
        alert("Por favor, insira um nome válido.");
        limparCampo();
    }
    console.log(nomeDosAmigos);
}


function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    if (nomeDosAmigos.length > 0) {
        let amigoSorteado = `O amigo secreto sorteado é: ${nomeDosAmigos[Math.floor(Math.random() * nomeDosAmigos.length)]}`;
        const li = document.createElement("li");
        li.textContent = amigoSorteado;
        resultado.appendChild(li);
    } else {
        let mensagem = "Não há amigos na lista para sortear.";
        const li = document.createElement("li");
        li.textContent = mensagem;
        resultado.appendChild(li);
    }
}


function limparCampo(){
    nome = document.querySelector("input");
    nome.value = "";
}

function listaDeAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    nomeDosAmigos.forEach(nome =>{
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

