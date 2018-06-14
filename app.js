const argv = require('./config/yargs').argv;
const porhacer = require('./por-hacer/por-hacer');
const color = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log('Crear por hacer ', tarea);
        break;
    case 'listar':
        let listado = porhacer.getListado();
        console.log('Mostrar todas las tareas');
        //console.log(listado);
        for (let tarea of listado) {
            console.log(color.green('============= Por hacer ================='));
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log(color.green('========================================='));
        }
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        let estatus = porhacer.actualizar(argv.descripcion, argv.completado);
        if (estatus) {
            console.log('Se ha actualizado correctamente');
        } else {
            console.log('No se ha podido actualizar');
        }
        break;
    case 'borrar':
        console.log('Borrar tarea');
        let borrado = porhacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}