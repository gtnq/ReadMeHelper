// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== undefined) {
    return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)

    `
  } else {
    return ' '
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== undefined) {
    return `[${license}](https://choosealicense.com/licenses/${license})`
  } else {
    return ' '
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== undefined) {
    return `${renderLicenseLink(license)}`
  } else {
    return ' '
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  

  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.lisense)}

  ## Description

  ${data.description}

  ## Installment

  ${data.installment}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## Lisense

  ${renderLicenseSection(data.lisense)}

`;
}

module.exports = generateMarkdown;
