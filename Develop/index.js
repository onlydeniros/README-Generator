// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generatePage = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'nameTitle',
            message: 'What is the title name for the project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description?',
            validate: descripInput => {
                if (descripInput) {
                    return true;
                } else {
                    console.log('Please enter a title')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Describe the installation instructions?',

        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information for project',

        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the appropriate license',
            choices: [
                "ISC",
                "Apache",
                "Academic",
                "GNU",
                "MIT",
                "Mozilla",
                "Open"
            ]

        },
        {
            type: 'input',
            name: 'test',
            message: 'Is there a test?',

        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who are the contributors of this projects?',

        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your Github username:',
            validate: githubName => {
                if (githubName) {
                    return true
                } else {
                    return false
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:'

        }
    ])
};

// TODO: Create a function to write README file
const writeFile = res => {
    fs.writeFile('Gen_README.md', res, err => {
        if (err) {
            console.log(err)
            return;
        } else {
            console.log('Your README has been successfully created!')
        }
    })

}

questions()
    .then(answers => {
        return generatePage(answers);
    })
    .then(res => {
        return writeFile(res);
    })
    .catch(err => {
        console.log(err)
    })


// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
var arr = ['apple', 'bannanas', 'peaches', 'strawberries']

const { apple, bannanas, ...rest } = arr

var newArr = [ ...arr, 'kiwi']