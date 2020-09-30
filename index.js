var fs = require("fs");
var inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            message: "Is the app working?",
            name: "test"
        },
        {
            type: "list",
            message: "How cool is this super-sweet app?",
            name: "Cool",
            choices: [
                "Incredibly modern and cool",
                "Only a little modern and cool",
                "Complete garbage"
            ]
        }
    ])
    .then(answers => {
        console.log(answers);
    })