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
                'Apache 2.0',
                'Boost Software Licence 1.0',
                'BSD 3-Clause License',
                'CC0',
                'Attribution 4.0 International',
                'Eclipse Public License 1.0',
                'GNU GPL v3',
                'GNU AGPL v3',
                'GNU LGPL v3',
                'GNU FDL v1.3',
                'IBM Public License Version 1.0',
                'ISC License',
                'MIT',
                'Mozilla Public License 2.0'
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

        switch(license){
            case "Apache 2.0":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";        
            break;
            case "Boost Software Licence 1.0":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";        
            break;
            case "BSD 3-Clause License":
            licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";        
            break;                 
            case "CC0":
            licenseBadge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";        
            break;
            case "Attribution 4.0 International":
            licenseBadge = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";        
            break;
            case "Eclipse Public License 1.0":
            licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";        
            break;
            case "GNU GPL v3":
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";        
            break;
            case "GNU AGPL v3":
            licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";        
            break;
            case "GNU LGPL v3":
            licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";        
            break;                 
            case "GNU FDL v1.3":
            licenseBadge = "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";        
            break;
            case "ISC License":
            licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";        
            break;
            case "IBM Public License Version 1.0":
            licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";        
            break;
            case "MIT":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";        
            break;
            case "Mozilla Public License 2.0":
            licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";        
            break;
            }

let newReadMe = 
`# ${title} 
${licenseBadge}  

## Description
${description}

## Table of Contents

1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage Directions](#UsageDirections)
4. [License](#License)
5. [Contributing](#Contributing)
6. [Questions](#Questions)


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