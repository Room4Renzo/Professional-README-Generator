import fs from "fs";
import inquirer from "inquirer";

// array of questions for user
const questions = [
    { type: "input", name: "title", message: "What is the title of your project?" },
    { type: "input", name: "description", message: "Please provide a description of your project." },
    { type: "input", name: "installation", message: "Please provide installation instructions." },
    { type: "input", name: "usage", message: "Please provide usage information." },
    { type: "input", name: "contribution", message: "Please provide contribution guidelines." },
    { type: "input", name: "test", message: "Please provide test instructions." },
    { type: "list", name: "license", message: "Please select a license.", choices: ["MIT", "Apache", "GPL", "BSD", "None"] },
    { type: "input", name: "github", message: "Please provide your GitHub username." },
    { type: "input", name: "email", message: "Please provide your email address." },
];

inquirer
    .prompt(questions)
    .then((answers) => {
        const { title, description, installation, usage, contribution, test, license, github, email } = answers;
        writeToFile(`README.md`, answers);
    });


// function to write README file
function writeToFile(fileName, answers) {

    let licenseBadge = ``;

    switch (answers.license) {

        case `MIT`: licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            break;

        case `apache`: licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
            break;

        case `GPL`: licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
            break;

        case `BSD`: licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`

        default: licenseBadge = ``
    }

    let data =
        `# ${answers.title}
    ## Description
    ${answers.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
    ${answers.installation}
    ## Usage
    ${answers.usage}
    ## License
    ${answers.license} ${licenseBadge}
    ## Contributing
    ${answers.contribution}
    ## Tests
    ${answers.test}
    ## Questions
    If you have any questions, please contact me at ${answers.email}.
    You can find more of my work at [${answers.github}]`;


    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );

};
