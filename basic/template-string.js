let nombre = 'deadpool';
let real = 'Wade Winston';

// console.log(nombre + '' + real);
// console.log(`${ nombre} ${real}`);

let nombreCompleto = nombre + ' ' + real;

let nombreTemplate = `${ nombre } ${real}`;

console.log(nombreCompleto === nombreTemplate);