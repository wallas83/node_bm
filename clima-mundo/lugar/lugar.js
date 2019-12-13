const axios = require('axios');

const getLugarLatlng = async(dir) => {


    const encodedUrl = encodeURI(dir);
    //console.log(encodedUrl);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,

    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para la direccion ${dir}`);

    }
    const data = resp.data.Resuls[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatlng
}