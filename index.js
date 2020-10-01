const fs = require("fs");
const inquirer = require('inquirer');

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
            name: "description"
        },
        {
            type: "input",
            message: "Write steps on how a user installs your project, making sure to separate each step with a period.",
            name: "installation"
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
        let { title } = answers;
        let { description } = answers;
        let { installation } = answers;
        let { usage } = answers;
        let { username } = answers;
        let { email } = answers;
        let { license } = answers;
        
        let installationArray = installation.split('.');
        for (let i = 0; i < installationArray.length; i++){
            installationArray[i] = (i + 1) + ". " + installationArray[i].trim() + `\n`;
        }
        let finalInstallationDirections = installationArray.join('');
        console.log(installationArray);

        let newReadMe = 
`# ${title} 

## Description
${description}

## Table of Contents
1. [Title](#Title)
2. [Description](#Description)
3. [Indtallation](#Installation)
4. [Usage Directions](#UsageDirections)
5. [License](#License)
6. [Contributing](#Contributing)
7. [Questions](#Questions)


## Installation
${finalInstallationDirections}

## Usage Directions
${usage}

## License 
${license}

## Contributing 

## Questions
GitHub Profile: ${username}  
Email: ${email}

`

        fs.writeFile('generated-readme.md', newReadMe, (err) => {
            if (err) throw err;
            console.log('SAVED');
        })

    }).catch((err) => {
        console.log(err);
    })