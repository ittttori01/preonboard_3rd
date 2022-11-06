const axios = require("axios");
const url = "https://extreme-ip-lookup.com/json";
const geoIp = require("geoip-lite");

const currentLocation = async() => {

    try {
        const response = await axios.get(url);
        const currentIp = await response.data.query;
        const geo = await geoIp.lookup(currentIp);
        const location = {
            latitude : geo.ll[0],
            longtitude : geo.ll[1]
        } 

        return location
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {currentLocation}