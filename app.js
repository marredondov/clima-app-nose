const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

// clima.getClima(41, 45)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err))

const getInfo = async(dir) => {
    try {
        const LugarLatLng = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(LugarLatLng.lat, LugarLatLng.lng);
        return `El clima de ${dir} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${dir}`;
    }

    // const LugarLatLng = await lugar.getLugarLatLng(argv.direccion);
    // console.log(LugarLatLng.direccion);
    // if (LugarLatLng.direccion) {
    //     const temp = await clima.getClima(LugarLatLng.lat, LugarLatLng.lng);
    //     return `El clima de ${dir} es de ${temp}`;
    // } else {
    //     return `No se pudo determinar el clima de ${dir}`;
    // }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(`ERROR: ${err}`));