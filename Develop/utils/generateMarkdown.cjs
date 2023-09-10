// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
      return "![!No Lisence]";
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  if (license in licenseLinks) {
    const licenseURL = licenseLinks[license];
    return `[License](${licenseURL})`;
  } else {
    return ""; // Return an empty string for unknown licenses
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

function renderLicenseSection(license) {}
const licenseText = renderLicenseSection("");
console.log(licenseText);

// TODO: Create a function to generate markdown for README
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

## Questions
For additional questions, contact ${
    data.email
  } or visit [GitHub](https://github.com/${data.githubUsername}).
`;
}

module.exports = generateMarkdown;
