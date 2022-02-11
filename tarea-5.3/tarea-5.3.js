const $botonDeTiempo = document.querySelector('#calcular-tiempo');

$botonDeTiempo.onclick = function(){
    const totalSegundos = document.querySelectorAll('segundos-video').value;

    console.log(totalSegundos);
    return false;

}