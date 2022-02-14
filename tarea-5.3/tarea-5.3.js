const $botonDeTiempo = document.querySelector('#calcular-tiempo');

$botonDeTiempo.onclick = function(){
    const $segundosVideo = Number(document.querySelector('#segundos-video').value);
    const $minutosVideo = Number(document.querySelector('#minutos-video').value);
    const $horasVideo = Number(document.querySelector('#horas-video').value);
    
    
    console.log($segundosVideo, $minutosVideo, $horasVideo)

    return false;

}