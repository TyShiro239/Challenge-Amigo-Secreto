let nomeDosAmigos = [];
let numeroAleatorio = parseInt(Math.random() * nomes.length + 1 );



function adicionarAmigo() {
    let nome = document.querySelector("input").value;
    if ((nome.trim()).length !== 0){
        nomeDosAmigos.push(nome);
        nome.innerHTML = ""
        limparCampo()
    }else{
        alert("Por favor, insira um nome válido.");
        limparCampo()
    }
    console.log(nomeDosAmigos);
}


function sortearAmigo(){

}


function exibirLista() {
    var ul = document.getElementById('listaAmigos')
    var li = document.createElement('li')
}

function limparCampo(){
    nome = document.querySelector("input");
    nome.value = ""
}

function passarMensagem() {
    // Seleciona o elemento <ul> pelo id
    const listaAmigos = document.getElementById("listaAmigos");

    // Cria um novo item <li> com a mensagem
    const item = document.createElement("li");
    item.textContent = nome;

    // Adiciona o item à lista <ul>
    listaAmigos.appendChild(item);
}