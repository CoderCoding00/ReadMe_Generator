const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "motivation",
    message: "What was your motivation?",
  },
  {
    type: "input",
    name: "problem",
    message: "What problem does it solve?",
  },
  {
    type: "input",
    name: "installation",
    message: "How did you install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your project?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide tests for your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license for your project",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "username",
    message: "What are the GitHub usernames of the Contributors?",
  },
  {
    type: "input",
    name: "email",
    message: "What are email addresses of the Contributors?",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully wrote: " + fileName);
  });
}

// Fnction to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("TEST_README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
