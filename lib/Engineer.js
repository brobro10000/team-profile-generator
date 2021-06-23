const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github
        this.getGithub = function() {
            return this.github
        }
        this.getRole = function() {
            return 'Engineer'
        }
        if (typeof this.github !== 'string' || this.github == "") {
            throw new Error("A github username is required")
        }
    }
}
const mit = new Engineer("john",5,'test@gmail.com',"brobro10000")
console.log(mit.getRole())
module.exports = Engineer