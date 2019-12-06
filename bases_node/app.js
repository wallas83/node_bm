//externos
//   const fs = require('express');
//nosotros mismos lo esxcribimos 
//   const fs = require('./fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');




const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch((err) => console.log(err));
        break;
    default:
        console.log('comando no reconocido');

}
//hace que tengas un parametro de entrada
//console.log(process.argv);
//let argv2 = process.argv;
//console.log(argv.base);
// let parametro = argv[2];
// let base = parametro.split('=')[1];