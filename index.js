// const fs = require("fs");
// const path = require('path');
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";


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

// function to write README file
function writeToFile(fileName, data) {

};

// function to initialize program
function init() {

};

// function call to initialize program
init();
