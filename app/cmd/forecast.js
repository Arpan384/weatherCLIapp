
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


async function forecast(loc) {
    try {
        const spinner = ora(figlet.textSync("  Loading.....",options))
        spinner.start();

        if(!loc){
            loc = await getLocation();
            if(!loc)return;
        }

        const resp2 = await getRawWeather(loc);
        if (!resp2) return;

        spinner.stop();

        var arr = resp2.data.consolidated_weather;
        console.log(chalk.redBright(`Whether conditions in ${loc} :`))
        for (let i = 0; i < arr.length; i++) {
            let min_ = Math.floor(Math.round(arr[i].min_temp)/10) == 0 ;
            min_ = min_? ` ${Math.round(arr[i].min_temp)}` : `${Math.round(arr[i].min_temp)}`;
            
            let max_ = Math.floor(Math.round(arr[i].max_temp)/10) == 0 ;
            max_ = max_? ` ${Math.round(arr[i].max_temp)}` : `${Math.round(arr[i].max_temp)}`;
            console.log(chalk.yellowBright(`${arr[i].applicable_date}`)+`   |   max: ${max_}°C  |  min: ${min_}°C  |  ${arr[i].weather_state_name}`);
        }
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = forecast;