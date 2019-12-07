const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'actualizar':
        console.log('Actualzia la lista ');
        break;
    case 'listar':
        console.log('Muestra todas las tareas por hacer');
        break;
    default:
        console.log('Comando no es reconocido')
}