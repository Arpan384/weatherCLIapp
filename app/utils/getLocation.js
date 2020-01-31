const axios = require("axios");

async function getLocation() {
    try {
        // navigator.geolocation.getCurrentPosition((obj)=>{
        //     console.log(obj);
        // },(err)=>{
        //     console.log(err);
        // })

        const resp = await axios.get("http://ip-api.com/json/");
        return resp["data"]["city"]
    }
    catch (e) {
        console.log("Location not found")
    }
}

module.exports = getLocation;