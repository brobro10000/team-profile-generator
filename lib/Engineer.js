const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
        if (typeof this.github !== 'string' || this.github == "") {
            throw new Error("A github username is required")
        }
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
}
module.exports = Engineer