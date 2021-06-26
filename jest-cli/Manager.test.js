const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')

test('create manager object', () => {
    const employee = new Manager('John', '5', 'JohnSmith@gmail.com','10')

    expect(employee).toBe(employee)
});
test('check name', () => {
    const employee = new Manager('John', '5', 'JohnSmith@gmail.com','10')

    expect(employee.name).toBe('John')
});
test('check id', () => {
    const employee1 = new Manager('John', 5, 'JohnSmith@gmail.com','10')
    const employee2 = new Manager('John', '5', 'JohnSmith@gmail.com','10')
    expect(employee1.id).toBe(5)
    expect(employee2.id).toBe(5)
});
test('check email', () => {
    const employee = new Manager('John', 5, 'JohnSmith@gmail.com','10')

    expect(employee.email).toBe('JohnSmith@gmail.com')
});
test('check office number', () => {
    const employee1 = new Manager('John', 5, 'JohnSmith@gmail.com', 10)
    const employee2 = new Manager('John', '5', 'JohnSmith@gmail.com', '10')
    expect(employee1.officeNumber).toBe(10)
    expect(employee2.officeNumber).toBe(10)
});
test('check empty Name', () => {
    let expectedErrorMessage = "A name is required";

    try {
        const employee = new Manager('', 5, 'JohnSmith@gmail.com','10')
    } catch (error) {
        expectedError = error;

    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check empty ID', () => {
    let expectedErrorMessage = "ID must be a positive number"

    try {
        const employee = new Manager('John', '', 'JohnSmith@gmail.com','10')
    } catch (error) {
        expectedError = error
    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check negative ID', () => {
    let expectedErrorMessage = "ID must be a positive number";

    try {
        const employee = new Manager('John', -1, 'JohnSmith@gmail.com','10')
    } catch (error) {
        expectedError = error;
    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});

test('check empty email', () => {
    let expectedErrorMessage = "An email is required"

    try {
        const employee = new Manager('John', '5', '','10')
    } catch (error) {
        expectedError = error;
    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check @ in email', () => {
    let expectedErrorMessage = "Email requires @ symbol"

    try {
        const employee = new Manager('John', '5', 'testing','10')
        //employee.email.split("@")[1]
    } catch (error) {
        expectedError = error
    }

    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check . after @ in email', () => {
    let expectedErrorMessage = "Email requires domain name (.com,.org etc.)"

    try {
        const employee = new Manager('John', '5', 'testing@gmail','10')
        //employee.email.split("@")[1].split('.')[1]
    } catch (error) {
        expectedError = error
    }

    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check empty office Number', () => {
    let expectedErrorMessage = "Office Number must be a positive number"

    try {
        const employee = new Manager('John', '5', 'JohnSmith@gmail.com','')
    } catch (error) {
        expectedError = error
    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check negative office number', () => {
    let expectedErrorMessage = "Office Number must be a positive number";

    try {
        const employee = new Manager('John', '5', 'JohnSmith@gmail.com','-5')
    } catch (error) {
        expectedError = error;
    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check  getName', () => {
    const employee = new Manager('John', '5', 'JohnSmith@gmail.com','10')

    expect(employee.getName()).toBe('John')
});
test('check  getId', () => {
    const employee = new Manager('John', '5', 'JohnSmith@gmail.com','10')

    expect(employee.getId()).toBe(5)
});
test('check  getEmail', () => {
    const employee = new Manager('John', '5', 'JohnSmith@gmail.com','10')

    expect(employee.getEmail()).toBe('JohnSmith@gmail.com')
});
test('check getOfficeNumber', () => {
    const employee = new Manager('John','5','JohnSmith@gmail.com','10')

    expect(employee.getOfficeNumber()).toBe(10)
});
test('check  getRole', () => {
    const employee = new Manager('John', '5', 'JohnSmith@gmail.com','10')

    expect(employee.getRole()).toBe('Manager')
});