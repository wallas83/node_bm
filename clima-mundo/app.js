const axios = require('axios');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
//console.log(argv.direccion);

const encodedUrl = encodeURI(argv.direccion);
console.log(encodedUrl);


const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
});

instance.get()
    .then(
        resp => {
            console.log(resp.data.Results[0]);
        })
    .catch(err => {
        console.log('ERROR!!!!!', err);
    });