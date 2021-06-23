const Employee = require('../lib/Employee')

test('create player object', () => {
    const employee = new Employee('John','5','JohnSmith@gmail.com')

    expect(employee.name).toBe('John')
}) 