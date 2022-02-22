
const $botonDeTiempo = document.querySelector('#calcular-tiempo');

$botonDeTiempo.onclick = function(){
    const $segundosVideo = document.querySelectorAll('.segundos');
    const $minutosVideo = document.querySelectorAll('.minutos');
    const $horasVideo = document.querySelectorAll('.horas');
    
    const segundosArr = Array.from($segundosVideo);
    const minutosArr = Array.from($minutosVideo);
    const horasArr = Array.from($horasVideo);
 
    const minutosEnHora = 60;
    let totalSegundos = 0;
    let totalMinutos = 0;
    let totalHoras = 0;

    
  
    for (let i = 0; i < segundosArr.length; i++){
        totalSegundos = totalSegundos + Number(segundosArr[i].value);
        
    }
    
    
    while (totalSegundos >= minutosEnHora){
        totalMinutos ++;
        totalSegundos = totalSegundos - minutosEnHora; 
    }
    

    for (let i = 0; i < minutosArr.length; i++){
        totalMinutos += Number(minutosArr[i].value);
    }
 
    while (totalMinutos >= minutosEnHora){
        totalHoras ++;
        totalMinutos = totalMinutos - minutosEnHora; 
    }


    for (let i = 0; i < horasArr.length; i++){
        totalHoras += Number(horasArr[i].value);
    }
    
    
    console.log(totalHoras)
    console.log(totalMinutos)
    console.log(totalSegundos)

    

    
    
    document.querySelector('#total-videos').innerText = `El tiempo total de videos es de ${totalHoras} : ${totalMinutos} : ${totalSegundos}`

    return false;

}
