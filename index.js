// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// # < Your - Project - Title >
// Description of the project
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests

// TODO: Create an array of questions for user input
// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How did you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What are the GitHub usernames of the Contributors?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What are email addresses of the Contributors?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Successfully wrote: ' + fileName);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        // console.log(data);
        // Better way to SEARCH for a property as opposed to TARGETING a property 
        // console.log(data["license"]); 
        writeToFile('TEST_README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();