const fs = require("fs");
const inquirer = require('inquirer');

let installationArray;
let usageArray;
let contributionArray;
let testArray;
let finalInstallationDirections
let finalUsageDirections;
let finalContributions;
let finalTest;
let licenseBadge;

console.log('Welcome to the README generator. To create a formatted README file to include in your GitHub Project, please answer the following prompts:')

function makeList(array, string, final){
    array = string.split('.');
    for (let i = 0; i < array.length; i++){
        if(final !== "contribute"){
            array[i] = (i + 1) + ". " + array[i].trim() + '\n';
        } else {
            array[i] = "* " + array[i].trim() + '\n';
        }
        if(array[i].length < 5){
            array.splice(i, 1);
            i--;
        }
    }
    if(final === "install"){
        finalInstallationDirections = array.join('');
    } else if(final === "usage"){
        finalUsageDirections = array.join('');
    } else if(final === "contribute"){
        finalContributions = array.join('');
    } else{
        finalTest = array.join('');
    }
        
    


}

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
            message: "List ways you would like others to contribute to your project, making sure to separate each item with a period.",
            name: "contributions"
        },
        {
            type: "input",
            message: "List ways your app should be tested, making sure to separate each item with a period.",
            name: "test"
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
                "Apache 2.0",
                "ISC",
                "Boost 1.0",
                "The Unlicense",
                "Mozilla Public License",
            ]
        }
    ])
    .then(answers => {
        let { title } = answers;
        let { description } = answers;
        let { installation } = answers;
        let { usage } = answers;
        let { contributions } = answers;
        let { test } = answers;
        let { username } = answers;
        let { email } = answers;
        let { license } = answers;


        makeList(installationArray, installation, "install");
        makeList(usageArray, usage, "usage");
        makeList(contributionArray, contributions, "contribute");
        makeList(testArray, test, "testing");
        licenseBadge = `[![License: ${license}](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-yellow.svg)](https://opensource.org/licenses/${license.replace(" ", "-")})`


let newReadMe = 
`# ${title} 
${licenseBadge}  

## Description
${description}

## Table of Contents
1. [Title](#Title)
2. [Description](#Description)
3. [Installation](#Installation)
4. [Usage Directions](#UsageDirections)
5. [License](#License)
6. [Contributing](#Contributing)
7. [Questions](#Questions)


## Installation
${finalInstallationDirections}

## Usage Directions
${finalUsageDirections}

## License 
This app uses ${license}

## Contributing 
Here is how you can contribute: 
${finalContributions}  
  
## Testing  
${finalTest}

## Questions
GitHub Profile: [${username}](https://github.com/${username})  
Email: ${email}  

Please feel free to contact me via email or through my GitHub profile if you have any questions.

`

        fs.writeFile('generated-readme.md', newReadMe, (err) => {
            if (err) throw err;
            console.log('SAVED');
        })

    }).catch((err) => {
        console.log(err);
    })