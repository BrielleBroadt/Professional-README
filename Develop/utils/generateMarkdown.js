// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return 'mom'; 
}
}
const licenseBadges = {
  'MIT': 'https://img.shields.io/badge/license-MIT-blue.svg',
  'Apache 2.0': 'https://img.shields.io/badge/license-Apache%202.0-blue.svg',
};
if (license in licenseBadges) {
  const badgeURL = licenseBadges[license];
  return `![License](${badgeURL})`;
} else {
  return 'i';
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (!license) {
  return ''; 
}
if (license in licenseLinks) {
  const licenseURL = licenseLinks[license];
  return `[License](${licenseURL})`;
} else {
  return ''; // Return an empty string for unknown licenses
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

}
