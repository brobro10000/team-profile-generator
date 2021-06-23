const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = parseInt(officeNumber)
        this.getOfficeNumber = function () {
            return this.officeNumber
        }
        this.getRole = function () {
            return 'Manager'
        }
        if (typeof this.officeNumber !== 'number' || this.officeNumber < 0 || isNaN(this.officeNumber) == true) {
            throw new Error("Office Number must be a positive number")
        }
    }
}
const mit = new Manager("john", 5, 'test@gmail.com', 3)
console.log(mit.getRole())
module.exports = Manager