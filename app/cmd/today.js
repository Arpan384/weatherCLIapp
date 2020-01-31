const getRawWeather = require("../utils/getRawWeather");
const getLocation = require("../utils/getLocation");
const chalk = require("chalk")
const ora = require("ora")
const figlet = require("figlet")

var options = {
    // font: 'Bloody',
    // horizontalLayout: 'default',
    // verticalLayout: 'default'
}

async function today(loc) {
    try {
        const spinner = ora(figlet.textSync("  Loading.....",options))
        spinner.start();

        if(!loc){
            loc = await  getLocation();
            // console.log(loc)
            if(!loc)return;
        }

        const resp2 = await getRawWeather(loc);
        if (!resp2) return;

        spinner.stop();

        var temp = resp2.data.consolidated_weather[0]["the_temp"]
        console.log(chalk.redBright(`Current conditions in ${loc} are :`))
        console.log(`\t ${temp}°C -> ${resp2.data.consolidated_weather[0].weather_state_name}`);
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = today;