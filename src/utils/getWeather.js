const axios = require("axios");
const config = require("../../config.json");
const apiKey = config.weatherApiKey;
const locationApi = require("./getLocation");

const getWeather = async() => {
  
  try {
        const locationInfo = await locationApi.currentLocation();
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInfo.latitude},${locationInfo.longtitude}&aqi=yes&lang=ko`;
        const response = await axios.get(apiUrl)
        const weahter = await response.data.current.condition.text;
        return weahter;

      } catch(err) {
        console.log("Error >>", err);
      }

}

module.exports = { getWeather }
