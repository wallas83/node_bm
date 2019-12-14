const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=c71cd78faeb697e2dbb9514f77ab0610&units=metric`)
    return resp.data.main.temp;
}
module.exports = {
    getClima
}