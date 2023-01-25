// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return "";
}
function renderLicenseLink(license) {
  if (license === "None") return "";

  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    Apache: "https://opensource.org/licenses/Apache-2.0",
    GPL: "https://www.gnu.org/licenses/gpl-3.0",
    BSD: "https://opensource.org/licenses/BSD-3-Clause",
    None: "",
  };
  return licenseLinks[license];
}
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

This project is licensed under the ${license} license.
<br>[${license} license](${renderLicenseLink(license)})
      `;
  }
  return "";
}
function renderLicenseLinkTwo(license) {
  if (license !== "None") {
    return "- [License](#license)";
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title} ${renderLicenseBadge(data.license)}

## Description

- What was your motivation? 
</br> ${data.motivation}
- What problem does it solve? 
</br> ${data.problem}

## Table of Contents

- ${data.title}
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLinkTwo(data.license)} 
  - [Who Contributed](#who-contributed)
  - [Questions](#questions)
  - [Tests](#tests)


## Installation
How did you install your project? 
<br/>${data.installation}

## Usage
How do you use your project? 
<br/>${data.usage}

${renderLicenseSection(data.license)}

## Who Contributed
Who contributed to this project?
<br/>${data.contribution}

## Questions 
- What are the Github usernames of the Contributors?
<br/> [${data.username}](https://github.com/${data.username})
- What are the email addresses of the Contributors?
<br/> ${data.email}

## Tests
Provide tests for your project here.
${data.tests}



    `;
}

module.exports = generateMarkdown;
