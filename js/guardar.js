import { tablaEstatica } from './analizar.js'
const botonGuardar = document.querySelector('#guardar');

const formatearSalida = (tabla) => {
    const tablaFormato = tabla.map(({item, tipo}) => {
        return `${item} --> ${tipo}`;
    })
    let salida = null;
    if(tablaFormato.length > 0){
        salida = tablaFormato.reduce((prev, cad) => {
            return prev + '\n' + cad;
        })
    }
    return salida;
}

const exportarArchivo = (contenidoArchivo, nombreArchivo) => {
    const a = document.createElement('a');
    const blob = new Blob([contenidoArchivo], {type: "text/plain;charset=utf-8"});
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = nombreArchivo;
    a.click();
    window.URL.revokeObjectURL(url);
}

const manejadorGuardar = (e) => {
    e.preventDefault();
    const salida = formatearSalida(tablaEstatica);
    if (salida === null){
        alert('Intente analizar algo primero');
    }else{
        exportarArchivo(salida, "resultados.txt");
    }
    
}

botonGuardar.addEventListener('click', manejadorGuardar);