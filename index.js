// const browserify = require("browserify")
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const dom = new JSDOM('<!DOCTYPE html><p>HelloWorld</p>')
// const $ = require("jquery")
// const {carouselCreator} = require("./dist/script")
const inquirer = require("inquirer")
const fs = require("fs");
const { generateHTML, generateGeneralQuestions } = require("./src/generateHTML");
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern"); 
const managerArray = []
const engineerArray = []
const internArray = []
const allData = []
const filename = 'index'
const extension = '.html'
const generalQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee. (REQUIRED)',
        validate: employeeName => {
            if (employeeName) {
                return true;
            } else {
                console.log('Please Enter an employee name')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID # of the employee. (REQUIRED)',
        validate: employeeID => {
            if (parseInt(employeeID)) {
                return true;
            } else {
                console.log('Please Enter an employee ID #')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the employee. (REQUIRED)',
        validate: employeeEmail => {
            if (employeeEmail) {
                return true;
            } else {
                console.log('Please Enter an valid employee email')
                return false
            }
        }
    }
]
const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of the manager. (REQUIRED)',
        validate: managerOfficeNumber => {
            if (parseInt(managerOfficeNumber)) {
                return true;
            } else {
                console.log('Please Enter the manager office number')
                return false
            }
        }
    }
]
const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your engineer\'s Github username. (Required)',
        validate: engineersGithub => {
            if (engineersGithub) {
                return true;
            } else {
                console.log('You need to enter a github username');
                return false;
            }
        }
    }
]
const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'Enter the school/university you attend. (Required)',
        validate: internsSchool => {
            if (internsSchool) {
                return true;
            } else {
                console.log('You need to enter a github username');
                return false;
            }
        }
    }
]
const initialPrompt = [
    {
        type: 'list',
        name: 'teamMember',
        message: 'Enter a team member to enter, or hit Done to generate your webpage.',
        choices: ['Manager','Engineer','Intern','Done']
    }
]
function prompt(){
inquirer.prompt(initialPrompt).then(data=>{
    if(data.teamMember == 'Done'){ 
      if(managerArray[0] == undefined)
      managerArray[0] = 0
      if(engineerArray[0] == undefined)
      engineerArray[0] = 0
      if(internArray[0] == undefined)
      internArray[0] = 0
      return writeToFile(filename,allData)  
    } else {
      return employeePrompts(data.teamMember)
    }
})
}
function employeePrompts(teamMember){
    inquirer.prompt(generalQuestions).then(data=>{
        if(teamMember == 'Manager'){
        return managerPrompts(data)
        }
        if(teamMember == 'Engineer'){
        return engineerPrompts(data)
        }
        if(teamMember == 'Intern'){
        return internPrompts(data)
        }
    })
}
function managerPrompts(managerData){
    inquirer.prompt(managerQuestions).then(data=>{
        const manager = new Manager(managerData.name,managerData.id,managerData.email,data.officeNumber)
        for(var i = managerArray.length;i<=managerArray.length;i+=2)
        {
            managerArray.push(manager)
        }
        prompt()
    })
}
function engineerPrompts(engineerData){
    inquirer.prompt(engineerQuestions).then(data=>{
        const engineer = new Engineer(engineerData.name,engineerData.id,engineerData.email,data.github)
        for(var i = engineerArray.length;i<=engineerArray.length;i+=2)
        {
            engineerArray.push(engineer)
        }
        prompt()
    })
}
function internPrompts(internData){
    inquirer.prompt(internQuestions).then(data=>{
        const intern = new Intern(internData.name,internData.id,internData.email,data.school)
        for(var i = internArray.length;i<=internArray.length;i+=2)
        {
            internArray.push(intern)
        }
        prompt()
    })
}
var i = 1
function writeToFile(fileName,data) {
    fs.access(`${fileName}(${i++})${extension}`, (err) => {
        if (err) {
            fs.writeFile(`${fileName}(${--i})${extension}`, generateHTML(managerArray,engineerArray,internArray), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(`${fileName}(${i}) successfully generated.`);
                // startProgram(managerArray.length,managerArray[0].getRole(),managerArray)
            });
        } else {
            return writeToFile(fileName)
        }
    })
}

prompt()