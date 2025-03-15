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


function limparCampo(){
    nome = document.querySelector("input");
    nome.value = ""
}
