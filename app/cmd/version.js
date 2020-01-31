// const pjson = require("../package.json");

const fs = require("fs");

function getVersion(){
    // console.log(pjson.version)
    const obj = fs.readFileSync("../package.json");
    console.log("v"+JSON.parse(obj).version);
}

module.exports = getVersion