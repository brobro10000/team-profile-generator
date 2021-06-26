//variables required 
const inquirer = require("inquirer")
const fs = require("fs");
const { generateHTML } = require("./src/generateHTML");
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
//common questions amongst all employees
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
//manager specific question
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
//engineer specific question
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
//intern specific question
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
//looping list for user to select to answer first
const initialPrompt = [
    {
        type: 'list',
        name: 'teamMember',
        message: 'Enter a team member to enter, or hit Done to generate your webpage.',
        choices: ['Manager', 'Engineer', 'Intern', 'Done']
    }
]
//prompts called and either writes data for proceeds to employee prompt
function prompt() {
    inquirer.prompt(initialPrompt).then(data => {
        if (data.teamMember == 'Done') {
            if (managerArray[0] == undefined)
                managerArray[0] = 0
            if (engineerArray[0] == undefined)
                engineerArray[0] = 0
            if (internArray[0] == undefined)
                internArray[0] = 0
            return writeToFile(filename)
        } else {
            return employeePrompts(data.teamMember)
        }
    })
}
//determine which information user plans to enter after answering general questions
function employeePrompts(teamMember) {
    inquirer.prompt(generalQuestions).then(data => {
        if (teamMember == 'Manager') {
            return managerPrompts(data)
        }
        if (teamMember == 'Engineer') {
            return engineerPrompts(data)
        }
        if (teamMember == 'Intern') {
            return internPrompts(data)
        }
    })
}
//prompts for specific role specified by user 
function managerPrompts(managerData) {
    inquirer.prompt(managerQuestions).then(data => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, data.officeNumber)
        managerArray.push(manager)
        prompt()
    })
}
function engineerPrompts(engineerData) {
    inquirer.prompt(engineerQuestions).then(data => {
        const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, data.github)
        engineerArray.push(engineer)
        prompt()
    })
}
function internPrompts(internData) {
    inquirer.prompt(internQuestions).then(data => {
        const intern = new Intern(internData.name, internData.id, internData.email, data.school)
        internArray.push(intern)
        prompt()
    })
}
//global i to determine which  file is created and writes file
var i = 1
function writeToFile(fileName) {
    fs.access(`${fileName}(${i++})${extension}`, (err) => {
        if (err) {
            fs.writeFile(`${fileName}(${--i})${extension}`, generateHTML(managerArray, engineerArray, internArray), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(`${fileName}(${i}) successfully generated.`);
            });
        } else {
            return writeToFile(fileName)
        }
    })
}

prompt()