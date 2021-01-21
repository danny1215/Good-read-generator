// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT' ) {
    return '![NPM](https://img.shields.io/npm/l/express?color=red&style=plastic)';

  } else if(license === 'APACHE'){

    return '![AUR license](https://img.shields.io/aur/license/android-studio?style=plastic)';
  
  }else if(license === 'GNU GPLV3'){

    return '![Eclipse Marketplace](https://img.shields.io/eclipse-marketplace/l/notepad4e?color=orange&style=plastic)';

  }else if(license === 'ISC'){

    return '![Discord](https://img.shields.io/discord/102860784329052160?style=plastic)';
  
  }else if(license === 'NONE'){

    return "";
  }

};

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license === 'MIT' ) {
 
  return 'https://opensource.org/licenses/MIT-0';

} else if(license === 'APACHE'){

  return 'https://opensource.org/licenses/Apache-2.0';

}else if(license === 'GNU GPLV3'){

  return 'https://opensource.org/licenses/GPL-3.0';

}else if(license === 'ISC'){

  return 'https://opensource.org/licenses/ISC';

}else if(license === 'NONE'){

  return "";
}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'NONE') {
    return (license);
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## License

  ${renderLicenseBadge(data.license)}
  
  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

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

  
FOR ANY INFORMATION FEEL FREE TO CONTACT ME AT

  Github:(https://github.com/${data.github})

  Email Me AT
  ${data.email}
`
;}

module.exports = generateMarkdown;
