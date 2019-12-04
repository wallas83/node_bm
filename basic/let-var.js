/// el var cambia en todo el transcurso del programa o hasta que deje de utilizarce la variable
/// let solo se usa en su scope
var nombre = 'wolverine';

if (true) {
    var nombre = wallas;
    // crachea porque nombre no puede ser modificado
    // let nombre = 'magneto';
}
console.log(nombre);