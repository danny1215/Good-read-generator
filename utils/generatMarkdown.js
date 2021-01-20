// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (data.licence == badge ) {
//     return true;
//   } else {
//     return("");
//   }
// }

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (data.licenceLink == link) {
//     return link;
//   } else {
//     return("");
//   }
// }

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (licenceSection) {
//     return true;
//   } else {
//     return("");
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
 

  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage-Information](#use)
  * [Contribution](#contribution)
  * [Test](#test)
  * [License](#license)
  ## Contact Information
  * [Github](#github)
  * [Email](#email)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage Information
  ${data.use}

  ## Contribution
  ${data.contribution}
  
  ## Test
  ${data.test}

  ## License
  ${data.license}

  Github:${data.github}

  ##Email Me AT
  ${data.email}
`
;}

module.exports = generateMarkdown;
