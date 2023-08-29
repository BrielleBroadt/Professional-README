// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter the title of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL', 'None'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(__dirname, fileName);

    fs.writeFile(filePath, data, err => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('File "${fileName}" has been successfully written.');
        }
        
    });
}     
        
        


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const readmeContent = `
# ${answers.projectTitle}

${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is covered under the ${answers.license} license. ${renderLicenseLink(answers.license)}

## Questions
For additional questions, contact ${answers.email} or visit [GitHub](https://github.com/${answers.githubUsername}).
`;

            // Write README content to file
            const fileName = 'README.md';
            writeToFile(fileName, readmeContent);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
    }

// Function call to initialize app
init();