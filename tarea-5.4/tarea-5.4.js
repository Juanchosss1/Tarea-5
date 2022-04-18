const $numeros = document.querySelectorAll(".numeros");





function obtenerNumeroMenor(){
    let numeroMenor = Number($numeros[0].innerText);
    for (let i = 0; i < $numeros.length; i++){
        if(Number($numeros[i].innerText) < numeroMenor){
            numeroMenor = Number($numeros[i].innerText);
        }
    }
    return numeroMenor;
}

function obtenerNumeroMayor(){
    let numeroMayor = Number($numeros[0].innerText);
    for (i = 0; i < $numeros.length; i++){
        if(Number($numeros[i].innerText) > numeroMayor){
            numeroMayor = Number($numeros[i].innerText);
        }
    }
    return numeroMayor
}

function calcularPromedio(){
    let suma = 0;
    for (let i = 0; i < $numeros.length; i++){
        suma = suma + Number($numeros[i].innerText);
    }
    
    let promedio = suma / $numeros.length;
    
    return promedio;
}

let arrayNumeros = [];

for(let i = 0; i < $numeros.length; i++){
    arrayNumeros.push(Number($numeros[i].innerText))
}





function verificarNumeroMasRepetido(){

    let contadorActual = 0
    let contador = 0
    let numeroFrecuente = 0;

    for (i = 0; i < arrayNumeros.length; i++){
        for ( j = i + 1; j < arrayNumeros.length; j++){
                if (arrayNumeros[i] === arrayNumeros[j]){
                    contadorActual++;
                    if (contadorActual > contador) {
                        
                        numeroFrecuente = arrayNumeros[i];
                        contador = contadorActual;
                    }
                }
            }
        contadorActual = 0;
        } 
    
 return numeroFrecuente;
}






document.querySelector('#numero-mas-pequeño').textContent = `El numero menor es: ${obtenerNumeroMenor()}`;
document.querySelector('#numero-mas-grande').textContent = `El numero mayor es: ${obtenerNumeroMayor()}`;
document.querySelector('#numeros-promedio').textContent = `El promedio de los numeros es: ${calcularPromedio()}`;
document.querySelector('#numero-mas-repetido').textContent =`El numero más repetido es: ${verificarNumeroMasRepetido()}`;
