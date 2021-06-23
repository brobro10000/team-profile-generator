const Employee = require('./Employee')
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
        this.getSchool = function () {
            return this.school
        }
        this.getRole = function () {
            return 'Intern'
        }
        if (typeof this.school !== 'string' || this.school == "") {
            throw new Error("A school is required")
        }
    }
}
module.exports = Intern