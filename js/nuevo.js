import { tablaResultados } from "./helpers/resultado.js";
import { entradaCodigo } from './helpers/codigo.js'
import { reiniciarTablaEstatica } from './analizar.js'

const botonNuevo = document.querySelector('#nuevo');


const manejadorNuevo = (e) => {
    e.preventDefault();
    reiniciarTablaEstatica();
    entradaCodigo.value = '';
    tablaResultados.style.display = 'none';
    
}

botonNuevo.addEventListener('click', manejadorNuevo);