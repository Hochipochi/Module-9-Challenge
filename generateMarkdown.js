// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title: ${data.projectName}

  ## Licenses: ${data.licenseType}

  ## Description:
  ${data.projectDescription}

  ## GitHub Username: ${data.github}

  ## Installation Instructions: 
  ${data.installationInstructions}

  ## Project Contribution / Credit: 
  ${data.projectContribution}

  ## Project Usage Information: 
  ${data.usageInformation}

  ## Test Instructions: 
  ${data.testInstructions}

  ## Contact Info: 
  ${data.email}

`;
}

module.exports = generateMarkdown;