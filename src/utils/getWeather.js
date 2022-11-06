const axios = require("axios");
const config = require("../../config.json");
const apiKey = config.weatherApiKey;
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Seoul&aqi=yes&lang=ko`;

const getWeather = async() => {

    try {
        const response = await axios.get(apiUrl)
        const weahter = await response.data.current.condition.text;
        return weahter;

      } catch(err) {
        console.log("Error >>", err);
      }

}

module.exports = { getWeather }
