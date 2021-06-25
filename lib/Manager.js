const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = parseInt(officeNumber)
        if (typeof this.officeNumber !== 'number' || this.officeNumber < 0 || isNaN(this.officeNumber) == true) {
            throw new Error("Office Number must be a positive number")
        }
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager