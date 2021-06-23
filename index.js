const inquirer = require("inquirer")
const fs = require("fs");
const { generateHTML } = require("./src/generateHTML");
const filename = 'index'
const extension = '.html'
const generalQuestions = 1
const managerQuestions = 1
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

inquirer.prompt(initialPrompt).then(data=>{
    if(data.teamMember == 'Done')
    {
      return writeToFile(filename)  
    }
})


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
