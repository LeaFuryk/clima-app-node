//AIzaSyAmfsB2ZeyqK0-FZr5bpW2aHSTuyYVd-CQ Api-key google
//802a25e07be2cbae2292fbd0e7e46bf5 Api-key openwheater
const argv = require('./config/yargs').argv;
const lugar = require ('./lugar/lugar');
const clima = require ('./clima/clima');

let getInfo = async (direccion) => {
  try{
    let coors = await lugar.getLugarLatLng(direccion);
    let temp  = await clima.getClima(coors.lat,coors.lng);

    return `El clima en ${coors.direccion} es de: ${temp.temperatura} grados`;
  }catch(err){
    return (`No se pudo determinar el clima en: ${direccion}`);
  }
}

getInfo(argv.direccion)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err))
