const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
//console.log(argv.direccion);

// lugar.getLugarLatlng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(err => console.log(err));

const getInfo = async(direccion) => {

    try {

        const lugarTem = await lugar.getLugarLatlng(direccion);
        const climaTem = await clima.getClima(lugarTem.lat, lugarTem.lng);
        const resp = `El clima de ${lugarTem.direccion} es de ${ climaTem }`
        return resp;
    } catch (error) {
        return "no de pudo determinar el clima", error;
    }



}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);