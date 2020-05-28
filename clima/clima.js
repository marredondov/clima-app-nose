const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d8fd798f3158fa8ba70476e93d28887b&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}