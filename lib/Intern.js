const Employee = require('./Employee')
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
        if (typeof this.school !== 'string' || this.school == "") {
            throw new Error("A school is required")
        }
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }
}
module.exports = Intern