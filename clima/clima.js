//802a25e07be2cbae2292fbd0e7e46bf5 Api-key openwheater
const axios = require('axios');

const getClima = async(lat,lng) =>{

  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=802a25e07be2cbae2292fbd0e7e46bf5`);
  if(resp.status === 400)
    throw new Error (`Las medidas lat= ${lat} y lon= ${lng} no son correctas`);

  let temperatura = resp.data.main.temp;

  return {
      temperatura
  }
}

module.exports = {
  getClima
}
