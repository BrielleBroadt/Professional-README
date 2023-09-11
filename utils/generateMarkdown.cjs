// function to retrun license badge including option for none
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![!MIT License](https://img.shields.io/badge/license-MIT-blue.svg)";

      break;
    case "Apache 2.0":
      return "![!Apache 2.0 Lisence](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;

    case "GPL":
      return "![!GPL lisence](https://img.shields.io/badge/License-GPL%20v3.0-blue.svg)";
      break;
    case "None":
      return "";
    default:
      break;
  }
}

// Function that returns license link and option for none
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";

      break;
    case "Apache 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
      break;

    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0.html";
      break;
    case "None":
      return "";
    default:
      break;
  }
}
// function that creates generate markdown for the read me 
function generateMarkdown(data) {
  return `#
  # ${data.projectTitle}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseBadge(data.license)} 
${renderLicenseLink(data.license)}

## Questions
For additional questions, contact ${
    data.email
  } or visit [GitHub](https://github.com/${data.githubUsername}).
`;
}

module.exports = generateMarkdown;
