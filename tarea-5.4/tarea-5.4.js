const $botonCalcular = document.querySelector("button");

function obtenerNumeroMenor(arrayDeNumeros){
    let numeroMenor = arrayDeNumeros[0];
    for (let i = 0; i <= arrayDeNumeros.lenght; i++){
        if(arrayDeNumeros[i] < numeroMenor){
            numeroMenor = arrayDeNumeros[i];
        }
    }
    return numeroMenor;
}

function obtenerNumeroMayor(arrayDeNumeros){
    let numeroMayor = arrayDeNumeros[0];
    for (i = 0; i <= arrayDeNumeros.lenght; i++){
        if( arrayDeNumeros[i] > numeroMayor){
            numeroMayor = arrayDeNumeros[i];
        }
    }
    return numeroMayor
}

function calcularPromedio(arrayDeNumeros){
    let promedio = arrayDeNumeros[0];
    for (i = 0; i <= arrayDeNumeros.lenght; i++){
        promedio += arrayDeNumeros[i];
    }
    return promedio/arrayDeNumeros.lenght;
}

function numeroMasRepetido(arrayDeNumeros){

}
const arrayDeNumeros = [];

$botonCalcular.onclick = function(){
    const $nodeListValores = document.querySelectorAll("numero");
    
    for (let i = 0; i <= $nodeListValores.lenght; i++) {
        arrayDeNumeros.push(Number($nodeListValores[i].textContent))     
    }
    
    
}


document.querySelector('#numero-mas-pequeño').textContent = obtenerNumeroMenor(arrayDeNumeros);
document.querySelector('#numero-mas-grande').textContent = obtenerNumeroMayor(arrayDeNumeros);
document.querySelector('#numeros-promedio').textContent = Math.floor(calcularPromedio(arrayDeNumeros));
document.querySelector('#numero-mas-repetido').textContent = obtenerNumeroMasRepetido(arrayDeNumeros);
