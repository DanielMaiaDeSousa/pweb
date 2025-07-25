function number() {
    var arg = prompt('Digite um valor: ');
    var texto = '';
    for (let index = 1; index <= arg; index++) {
        texto = texto + ' ' + index
    }
    addTexto(texto);
}

function addTexto(texto) {
    document.getElementById('divText').innerHTML = texto;
}

function cls() {
    document.getElementById('divText').innerHTML = '';
}