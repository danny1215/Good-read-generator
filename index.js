// TODO: Include packages needed for this application

// inquirer module const variable
const inquirer = require("inquirer");
// fs module const
const fs = require('fs');
// genearteMarkdown const variable to generate the formate of the readme file
const generatMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input

// question for a user to answer
   const userQuestions = [

    {
      type: 'input',
      message: 'What is the title of your Project?',
      name: 'title',
     
    },
    {
      type: 'input',
      message: 'What is your description of your project?',
      name: 'description',
      
    },
    {
      type: 'input',
      message: 'what is the installation instruction of your project?',
      name: 'installation',
      
    },
    {
      type: 'input',
      message: 'what is the use of your project?',
      name: 'use',
      
    },
    {
      type: 'input',
      message: 'what is the contibution guildlines for the project?',
      name: 'contribution',
      
    },
    {
      type: 'input',
      message: 'what are the test instructions of your project?',
      name: 'test',
      
    },
    {
      type: 'list',
      message: ' what is the licence of the project?',
      choices: ['MIT', 'ISC', 'APACHE', 'GNU GPLV3', 'NONE'],
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
  ]


// TODO: Create a function to write README file

// function to write a file

function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function(err) {
    
    if(err) {
      return console.log(err)
    } else {
      console.log("SUCCESS YOUR README.md FILE IS GENERATED")
    }
  })
}

// TODO: Create a function to initialize app

// function to initialize

function init(){
  inquirer.prompt(userQuestions)
  .then(function(data){
      writeToFile("DemoReadME.md", generatMarkdown(data));
      
  })
}

// Envoking a Function to initialize app

init();



