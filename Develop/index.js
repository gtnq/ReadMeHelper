// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'How would you like to call your project?',
        validate : title => {
            if (title){
                return true
            } else {
                console.log('please give me something')
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please explain somethinga bout your project',
        validate : description => {
            if (description) {
                return true
            } else {
                console.log('please somehow describe your project')
            }
        }

    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
    fs.writeFile(filename, data, err => {
        if (err) {
            console.log(err)
        }
    })
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
