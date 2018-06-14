const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            console.log(err);
        //else console.log('Se ha guardado correctamente');
    });
}

cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }
    //console.log(listadoPorHacer);
}
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}
const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    console.log(descripcion);
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
let borrar = (descripcion) => {
    cargarDB();
    let listadoTemp = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === listadoTemp.length) {
        return false
    } else {
        listadoPorHacer = listadoTemp;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
}