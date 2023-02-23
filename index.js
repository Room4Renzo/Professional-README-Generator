import fs from "fs";
import path from "path";
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
        answers = [title, description, installation, usage, contribution, test, license, github, email];
    });

    const title = process.argv[2];
    const description = process.argv[3];
    const installation = process.argv[4];
    const usage = process.argv[5];
    const contribution = process.argv[6];
    const test = process.argv[7];
    const license = process.argv[8];
    const github = process.argv[9];
    const email = process.argv[10];


// function to write README file
function writeToFile(fileName, data) {

    fileName = "README.md";
    data =
        `# ${title}
    ## Description
    ${description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ## License
    ${license}
    ## Contributing
    ${contribution}
    ## Tests
    ${test}
    ## Questions
    If you have any questions, please contact me at ${email}. You can find more of my work at [${github}]`;


    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );



};

// function to initialize program
function init() {

};

// function call to initialize program
init();
