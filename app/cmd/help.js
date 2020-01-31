const chalk = require("chalk")

const help = () =>{
    console.log(`${chalk.redBright(`weather [command]
    <options>`)}

    \t`
    +chalk.yellow("today")+`....................`+chalk.magentaBright("show weather for today")+"\n\t"
    +chalk.yellow("forecast")+`.................`+chalk.magentaBright("show 5-day weather forecast")+"\n\t"
    +chalk.yellow("version")+`..................`+chalk.magentaBright("show package version")+"\n\t"
    +chalk.yellow("help")+`.....................`+chalk.magentaBright("show help menu for a command")+"\n"
    );
}

//to export something and increase it's scope
module.exports = help;