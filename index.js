var fs = require("fs");
var inquirer = require('inquirer');

console.log('Welcome to the README generator. To create a formatted README file to include in your GitHub Project, please answer the following prompts:')


inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Write a brief description of our project.",
            name: "desription"
        },
        {
            type: "number",
            message: "How many steps does a user have to take to install your project?",
            name: "installationSteps"

        },
        {
            type: "input",
            message: "Write steps on how a user installs your project, making sure to separate each step with a period.",
            name: "installationInstructions"
        },
        {
            type: "input",
            message: "Provide instrutions for use, making sure to separate each step with a period.",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter your GitHub username",
            name: "username"
        },
        {
            type: "input",
            message: "Enter your email",
            name: "email"
        },
        {
            type: "list",
            message: "What license does your project use?",
            name: "license",
            choices: [
                "MIT",
                "GNU GPLv3",
                "GNU LGPLv3",
                "GNU AGPLv3",
                "Apache",
                "ISC",
                "Boost Software",
                "The Unlicense",
                "Mozilla Public License"
            ]
        }
    ])
    .then(answers => {
        const { title } = answers;
        const { description } = answers;
        const { installationSteps } = answers;
        const { installationInstructions } = answers;
        const { usage } = answers;
        const { username } = answers;
        const { email } = answers;
        const { license } = answers;

        console.log(title);
        console.log(description);
        console.log(installationSteps);
        console.log(installationInstructions);
        console.log(usage);
        console.log(username);
        console.log(email);
        console.log(license);



    })