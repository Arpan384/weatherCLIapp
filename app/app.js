#!/usr/bin/env node

//to import something from use 'require'

const help = require("./cmd/help");
const today = require("./cmd/today");
const forecast = require("./cmd/forecast");
const version = require("./cmd/version");

//parse cli arguments
const minimist = require("minimist")
const input = process.argv.slice(2);
const parsedInput = minimist(input);

// console.log(parsedInput)

const location = parsedInput["l"] || parsedInput["location"];
// const location = input[1];

const cmd = parsedInput["_"][0];
// const cmd = input[0];

if (cmd == "today") {
    today(location);
}
else if (cmd == "help" || cmd==undefined) {
    help();
}
else if (cmd == "version") {
    version();
}
else if (cmd == "forecast") {
    forecast(location)
}
else {
    console.log("Invalid command")
}