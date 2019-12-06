//externos
//   const fs = require('express');
//nosotros mismos lo esxcribimos 
//   const fs = require('./fs');


const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}