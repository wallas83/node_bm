const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/por-hacer');
let comando = argv._[0];
const colors = require('colors');

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('====== Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('========================='.green);
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log('borrado', borrado);
        break;
    default:
        console.log('Comando no es reconocido')
}