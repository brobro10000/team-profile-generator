const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
        this.getGithub = function () {
            return this.github
        }
        this.getRole = function () {
            return 'Engineer'
        }
        if (typeof this.github !== 'string' || this.github == "") {
            throw new Error("A github username is required")
        }
    }
}
module.exports = Engineer