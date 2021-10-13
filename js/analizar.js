import { entradaCodigo } from './helpers/codigo.js'
import { tablaResultados, llenarTablaResultados } from './helpers/resultado.js'
import { lenguaje } from './helpers/lenguaje.js'
import { expresionesC, expresionesJS } from './helpers/expresiones.js'

export const botonAnalizar = document.querySelector('#analizar');
let codigo = '';
let tabla = [];
export let tablaEstatica = [];
let otrosTerminos = [];
let resultados = [];

export const reiniciarTablaEstatica = () =>{
    tablaEstatica = [];
    console.log(tablaEstatica);
}

const eliminarDuplicados = (arreglo) => {
    const unicos = [];
    arreglo.forEach((elemento) => {
        if (!unicos.includes(elemento)) {
            unicos.push(elemento);
        }
    });
    return unicos;
}

const buscar = (expersion) => {
    resultados = codigo.match(expersion);
    codigo = codigo.replace(expersion, ' ');
}

const agregar = (tipo) => {
    if (resultados) {
        resultados = eliminarDuplicados(resultados);
        resultados.forEach((item) => {
            const nuevoItem = { item, tipo };
            tabla.push(nuevoItem);
        })
    }
}

const agregarTerminos = (expresion, nombre) => {
    resultados = otrosTerminos.filter((item) => expresion.test(item));
    otrosTerminos = otrosTerminos.filter((item) => !expresion.test(item));
    agregar(nombre);
}

const analizarCadenasOperadoresSimbolos = (expresiones) => {
    expresiones.forEach((item) => {
        if (!item.isTermino) {
            buscar(item.expresion);
            agregar(item.nombre);
        }
    })
}

const analizarPalabrasIdentificadoresConstantes = (expresiones) => {
    expresiones.forEach((item) => {
        if (item.isTermino) {
            agregarTerminos(item.expresion, item.nombre);
        }
    })
}

const analizarNoValidos = () => {
    resultados = otrosTerminos.filter((item) => item.length > 0);
    agregar('No valido');
}

const analizarC = () => {
    analizarCadenasOperadoresSimbolos(expresionesC);
    otrosTerminos = codigo.split(/\s+/);
    analizarPalabrasIdentificadoresConstantes(expresionesC);
    analizarNoValidos();
}

const analizarJS = () => {
    analizarCadenasOperadoresSimbolos(expresionesJS);
    otrosTerminos = codigo.split(/\s+/);
    analizarPalabrasIdentificadoresConstantes(expresionesJS);
    analizarNoValidos();
}

const manejadorAnalizar = () => {
    codigo = entradaCodigo.value;
    tablaResultados.style.display = 'block';
    console.log(typeof lenguaje);
    if(lenguaje === '1'){
        analizarC();
    }else{
        analizarJS();
    }

    llenarTablaResultados(tabla);
    tablaEstatica = tabla;
    tabla = [];
}

botonAnalizar.addEventListener('click', manejadorAnalizar);