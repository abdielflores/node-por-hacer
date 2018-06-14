const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como compleado o pendiente la tarea'
}
const optCrear = {
    descripcion
}
const optActualizar = {
    descripcion,
    completado,
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optCrear)
    .command('actualizar', 'Actualiza el estado compleado de una tarea', optActualizar)
    .command('borrar', 'Borra un elemento', optCrear)
    .help()
    .argv;

module.exports = {
    argv
}