
const axios = require("axios");

async function getRawWeather(loc) {
    try {
        const resp = await axios.get(`https://www.metaweather.com/api/location/search/?query=${loc}`);


        if (!resp.data[0]) throw "Invalid location";

        const resp2 = await axios.get(`https://www.metaweather.com/api/location/${resp.data[0]["woeid"]}/`);

        return resp2;
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = getRawWeather;