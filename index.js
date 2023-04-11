// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
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

    },
    {
        type: 'confirm',
        name: 'confirmInstallment',
        message: 'Any Installment process?',
    },
    {
        type: 'input',
        name: 'installment',
        message: 'Your Installment process',
        when : ({confirmInstallment}) => {
            if (confirmInstallment) {
                return true
            } else {
                return false
            }
        }

    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Any usage explaination?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Your Installment process',
        when : ({confirmUsage}) => {
            if (confirmUsage) {
                return true
            } else {
                return false
            }
        }

    },
    {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Any helpers involved?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List Your helper here',
        when : ({confirmCredits}) => {
            if (confirmCredits) {
                return true
            } else {
                return false
            }
        }

    },
    {
        type: 'input',
        name: 'username',
        message: 'whats your github username',
        validate : username => {
            if (username) {
                return true
            } else {
                console.log('say None if you dont have one~')
            }
        }

    },
    {
        type: 'input',
        name: 'emailaddress',
        message: 'Whats your email address',
        validate : emailaddress => {
            if (emailaddress) {
                return true
            } else {
                console.log('can use your school email xD')
            }
        }

    },
    {
        type: 'confirm',
        name: 'confirmlisense',
        message: 'Wanna use any lisence?',
    },
    {
        type: 'input',
        name: 'lisense',
        message: 'Tell me ',
        when : ({confirmlisense}) => {
            if (confirmlisense) {
                return true
            } else {
                return false
            }
        }

    },


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}.md`, data, err => {
        if (err) {
            console.log(err)
        }
    })
}
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(data => {return data})}

// Function call to initialize app
init()
.then(userdaya => {
    console.log(userdaya)
    return generateMarkdown(userdaya)
}).then (text => {
    console.log(text)
    writeToFile('README', text)})
