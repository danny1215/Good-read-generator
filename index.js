// TODO: Include packages needed for this application

// inquirer module const
const inquirer = require("inquirer");
// fs module const
const fs = require('fs');
// genearteMarkdown const to generate the formate of the readme file
const generatMarkdown = require('./utils/generatMarkdown');

// const util = require("util");

// TODO: Create an array of questions for user input

// question for a user to answer
   const userQuestions = [

    {
      type: 'input',
      message: 'What is the name of your Project?',
      name: 'title',
     
    },
    {
      type: 'input',
      message: 'What is your description of your application?',
      name: 'description',
      
    },
    {
      type: 'input',
      message: 'what is the installation instruction of your application?',
      name: 'installation',
      
    },
    {
      type: 'input',
      message: 'what is the use of your application?',
      name: 'use',
      
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
      writeToFile("FreadME.md", generatMarkdown(data));
      
  })
}

// Function call to initialize app

init();



