// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![Badge](https://img.shields.io/badge/license-${license}-blue.svg)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://img.shields.io/badge/license-${license}-blue.svg`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.nameTitle}

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [License](#license)
* [Test](#test)
* [Contributors](#contributors)
* [Questions](#questions)

## Install

${data.install}

## Usage
${data.usage}

## License
${data.license}


## Test
${data.test}


## Contributors
${data.contribution}


## Questions

If any questions contact me at : ${data.email}
Github : ${data.username}


`;
}

module.exports = generateMarkdown;
