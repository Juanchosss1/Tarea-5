const $botonDeNombre = document.querySelector('#enviar-nombre');

$botonDeNombre.onclick = function(){
    const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = document.querySelector('#edad-usuario').value;
    const nombreCompletoUsuario = `${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario}`;

    const informacionDelUsuario = document.createElement('p');

    const nodoPagina = document.querySelector('body');
    const parrafo = document.createElement('p');
    const textoParrafo = document.createTextNode(`Hola ${nombreCompletoUsuario}, asique tenes ${edadUsuario} años, sos un viejo!`);
    parrafo.appendChild(textoParrafo);
    nodoPagina.appendChild(parrafo);
    

    let titulo = document.querySelector('h1');

    titulo.textContent = ('Bienvenido ' + nombreCompletoUsuario + '!')
    parrafo.appendChild()


    return false    


}

