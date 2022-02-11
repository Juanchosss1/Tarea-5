document.querySelector('#calcular-salario-anual').onclick = function(){
    const salarioMensual = Number(document.querySelector('#salario-mensual').value);
    const salarioAnual = calcularSalarioAnual(salarioMensual)

    document.querySelector('#salario-anual').value = salarioAnual;

    return false
}

function calcularSalarioAnual(salarioMensual){
    return salarioMensual * 12;
}