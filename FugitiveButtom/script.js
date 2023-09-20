
//functionsToDoTheMagic

botao.addEventListener('click', function() {
    // Gere uma cor aleatória para o botão
    var novaCor = gerarCorAleatoria();

    // Define a cor de fundo do botão para a nova cor
    botao.style.backgroundColor = novaCor;
});


//noBottun Function
function escape() {

    var nButton = document.getElementById("noButton");
    nButton.style.position = 'absolute';
    nButton.style.top = positionGen(10,90);
    nButton.style.left = positionGen(10,90);
    

}

function positionGen(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

//yesButton Function

function yesDate (){

    alert("That's not gonna happen, I'm afraid to pretty girls")

}