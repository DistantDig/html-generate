const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

const questions = [
    {
        message: 'What is your name?',
        name: 'name',
        default: 'John'
    },
    {
        message: 'What is your location?',
        name: 'location',
        default: 'California'
    },
    {
        message: 'Write a bio.',
        name: 'bio',
        default: 'Biography here.'
    },
    {
        message: 'What is your LinkedIn URL?',
        name: 'linkdin',
        default: 'LinkedIn here.'
    },
    {
        message: 'What is your Github URL?',
        name: 'github',
        default: 'Github here.'
    }
];

// Function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML.generateHTML(data), (error) => {
        error ? console.error(error) : console.log('HTML generated successfully!');
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("index.html.new", data);
    });
}

// Function call to initialize app
init();