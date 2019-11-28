window.addEventListener('load', () => {
    player.start();
    alterarCorTituloCard();
});

function alterarCorTituloCard(){
    let tituloCard = document.querySelector('#player h4');
    var cores = ['red', 'blue', 'black', 'green', 'yellow', 'orange', 'purple', 'skyblue'];
    var contador = 0;
    setInterval(() => {
        tituloCard.style.color = cores[contador];
        contador++;
        if (contador > cores.length) {
            contador = 0;
        }
    }, 3500);
}