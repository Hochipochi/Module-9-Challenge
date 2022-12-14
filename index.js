// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'input project name',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Describe your project'
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'How do you install your project?'
    },
    {
        type: 'list',
        name: 'licenseType',
        message: 'Choose a License Type:',
        choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0', 'None']
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Describe how this project would be used'
    },
    {
        type: 'input',
        name: 'projectContribution',
        message: 'Who receives credit for this project?'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Include instructions to test your project'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
        ];

// TODO: Create a function to write README file
function writeToFile(markdown) {
    fs.writeFile("README.md", markdown, (err) => 
    err ? console.log(err) : console.log('Success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const markdown = generateMarkdown(response)
        writeToFile(markdown)
    })
}

// Function call to initialize app
init();