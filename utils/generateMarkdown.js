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

function renderCredits(credits){
  if (credits !== undefined) {
    return `${credits}`
  } else {
    return ' '
  }
}


function renderInstallment(Installment){
  if (Installment !== undefined) {
    return `${Installment}`
  } else {
    return ' '
  }
}

function renderUsage(usage){
  if (usage !== undefined) {
    return `${usage}`
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

  ${renderInstallment(data.installment)}

  ## Usage

  ${renderUsage(data.usage)}

  ## Credits

  ${renderCredits(data.credits)}

  ## Lisense

  ${renderLicenseSection(data.lisense)}

  ## Contact info
  
  www.github.com/${data.username}
  My email: ${data.emailaddress}

`;
}

module.exports = generateMarkdown;
