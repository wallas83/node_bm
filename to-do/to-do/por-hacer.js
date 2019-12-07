const fs = require('fs');

let listadoPorHacer = [];



const cargarDB = () => {

        try {
            listadoPorHacer = require('../db/data.json');
            console.log(`al cargar la base de datos ${listadoPorHacer} asdasd`);
        } catch (error) {
            console.log('salio mal al cargar el archivo');
            listadoPorHacer = [];
        }

    }
    // const cargarDB = () => {

//     try {

//         listadoPorHacer = require('../db/data.json');

//     } catch (error) {
//         listadoPorHacer = [];
//     }

// }





const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });



}



module.exports = {
    crear
}