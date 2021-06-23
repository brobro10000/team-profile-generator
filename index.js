const inquirer = require("inquirer")
const fs = require("fs");
const { generateHTML } = require("./src/generateHTML");
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern") 
const managerArray = []
const internArray = []
const engineerArray = []
const filename = 'index'
const extension = '.html'
const generalQuestions = [//name ID Email
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
const engineerQuestions = 1
const internQuestions = 1
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
    if(data.teamMember == 'Done')
    {
      return writeToFile(filename)  
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
        // if(teamMember == 'Engineer'){
        // return managerPrompts()
        // }
        // if(teamMember == 'Intern'){
        // return internPrompts()
        // }
    })
}
function managerPrompts(managerData){
    inquirer.prompt(managerQuestions).then(data=>{
        const manager = new Manager(managerData.name,managerData.id,managerData.email,data.officeNumber)
        console.log(manager)
        for(var i = managerArray.length;i<=managerArray.length;i+=2)
        {
            managerArray.push(manager)
            console.log(managerArray)
        }
        prompt()
    })
}
var i = 1
function writeToFile(fileName) {
    fs.access(`${fileName}(${i++})${extension}`, (err) => {
        if (err) {
            fs.writeFile(`${fileName}(${--i})${extension}`, generateHTML(), function (err) {
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