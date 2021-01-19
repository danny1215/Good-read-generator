const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generatMarkdown');

const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile)

const promptUser = () =>

   inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of your Project?',
      name: 'title',
     
    },
    {
      type: 'input',
      message: 'What is your description of your application?',
      name: 'discription',
      
    },
    {
      type: 'input',
      message: 'what is the installation instruction of your application?',
      name: 'installation',
      
    },
    {
      type: 'input',
      message: 'what is the use of your application?',
      name: 'Use',
      
    },
    {
      type: 'input',
      message: 'who are the contributors to your application?',
      name: 'contribution',
      
    },
    {
      type: 'input',
      message: 'what are the test instructions of your application?',
      name: 'test',
      
    },
    {
      type: 'list',
      message: ' what is the licence of the application?',
      choices: ['email', 'phone', 'telekinesis'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'Please enter your Github name?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'what is your email address?',
      name: 'email',
    },
  ])


  
const generateMarkdown = (data) => {
return `
# ${data.title}
    
  
  
## Table of contents
* [Discription](#discription)
* [Installation](#installation)
* [Usage](#use)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
    
###  Description:
- ${data.discription}
  
### Installation:
- ${data.installation}
  
### Usage Information:
- ${data.Use}
  
### Contribution:
- ${data.contribution}
    
### Test:
- ${data.test}
  
### License:
- ${data.license}
  
Github:[${data.Github}](https://github.com/danny1215)
  
Email:[${data.email}](dannymamusha@gmail.com)
`
;}

  promptUser()
  .then((data) => writeFileAsync("freadme.md", generateMarkdown(data)))
  .then(() => console.log('Successfully wrote to readme.md'))
  .catch((err) => console.error(err));


  // promptUser()
//   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//   .then(() => console.log('Successfully wrote to index.html'))
//   .catch((err) => console.error(err));


//   .then((data) => {
   
//     fs.writeFile('freadme.md', generateMarkdown(data,(err) => {
//       if (err) throw err;
//       console.log('SUCCESFULLY GENERATED YOUR README.md!');
//     }
//     ))}); 







//     const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () =>
//   inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'input',
//       name: 'location',
//       message: 'Where are you from?',
//     },
//     {
//       type: 'input',
//       name: 'hobby',
//       message: 'What is your favorite hobby?',
//     },
//     {
//       type: 'input',
//       name: 'food',
//       message: 'What is your favorite food?',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username',
//     },
//     {
//       type: 'input',
//       name: 'linkedin',
//       message: 'Enter your LinkedIn URL.',
//     },
//   ]);

// const generateHTML = (answers) =>
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// promptUser()
//   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//   .then(() => console.log('Successfully wrote to index.html'))
//   .catch((err) => console.error(err));
