import { entradaCodigo } from './helpers/codigo.js'

const botonAbrir = document.querySelector('#abrir');

const abrirArchivo = (e) => {
    const archivo = e.target.files[0];
    if(!archivo){
        return;
    }
    const lector = new FileReader();
    lector.onload = (e) => {
        const contenido = e.target.result;
        entradaCodigo.value = contenido;
    }
    lector.readAsText(archivo);
}

const manejadorAbrir = (e) => {
    abrirArchivo(e);
    console.log('abrir')
    botonAbrir.value = null;
}

botonAbrir.addEventListener('change', manejadorAbrir);