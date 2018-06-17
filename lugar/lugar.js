//AIzaSyAmfsB2ZeyqK0-FZr5bpW2aHSTuyYVd-CQ Api-key
const axios = require('axios');


const getLugarLatLng = async(direccion) =>{

  let encodeUrl = encodeURI(direccion);

  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyAmfsB2ZeyqK0-FZr5bpW2aHSTuyYVd-CQ`)

  if (resp.data.status === "ZERO_RESULTS"){
    throw new Error ('No hay resultados para la ciudad: ',direccion);
  }

  let coors = resp.data.results[0].geometry.location;
  let address = resp.data.results[0].formatted_address;

  return {
    direccion: address,
    lat: coors.lat,
    lng: coors.lng
  }
}

module.exports = {
  getLugarLatLng
}
