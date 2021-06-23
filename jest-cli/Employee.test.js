const Employee = require('../lib/Employee')

test('create employee object', () => {
    const employee = new Employee('John', '5', 'JohnSmith@gmail.com')

    expect(employee).toBe(employee)
});
test('check name', () => {
    const employee = new Employee('John', '5', 'JohnSmith@gmail.com')

    expect(employee.name).toBe('John')
});
test('check id', () => {
    const employee1 = new Employee('John', 5, 'JohnSmith@gmail.com')
    const employee2 = new Employee('John', '5', 'JohnSmith@gmail.com')
    expect(employee1.id).toBe(5)
    expect(employee2.id).toBe(5)
});
test('check email', () => {
    const employee = new Employee('John', 5, 'JohnSmith@gmail.com')

    expect(employee.email).toBe('JohnSmith@gmail.com')
});
test('check empty Name', () => {
    let expectedErrorMessage = "A name is required";

    try {
        const employee = new Employee('', 5, 'JohnSmith@gmail.com')
    } catch (error) {
        expectedError = error;

    }
    expectedError//?
    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check empty ID', () => {
    let expectedErrorMessage = "ID must be a positive number"

    try {
        const employee = new Employee('John', '', 'JohnSmith@gmail.com')
    } catch (error) {
        expectedError = error
    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check negative ID', () => {
    let expectedErrorMessage = "ID must be a positive number";

    try {
        const employee = new Employee('John', -1, 'JohnSmith@gmail.com')
    } catch (error) {
        expectedError = error;
    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});

test('check empty email', () => {
    let expectedErrorMessage = "An email is required"

    try {
        const employee = new Employee('John', '5', '')
    } catch (error) {
        expectedError = error;
    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check @ in email', () => {
    let expectedErrorMessage = "Email requires @ symbol"

    try {
        const employee = new Employee('John', '5', 'testing')
        //employee.email.split("@")[1]
    } catch (error) {
        expectedError = error
    }

    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check . after @ in email', () => {
    let expectedErrorMessage = "Email requires domain name (.com,.org etc.)"

    try {
        const employee = new Employee('John', '5', 'testing@gmail')
        //employee.email.split("@")[1].split('.')[1]
    } catch (error) {
        expectedError = error
    }

    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check  getName', () => {
    const employee = new Employee('John', '5', 'JohnSmith@gmail.com')

    expect(employee.getName()).toBe('John')
});
test('check  getId', () => {
    const employee = new Employee('John', '5', 'JohnSmith@gmail.com')

    expect(employee.getId()).toBe(5)
});
test('check  getEmail', () => {
    const employee = new Employee('John', '5', 'JohnSmith@gmail.com')

    expect(employee.getEmail()).toBe('JohnSmith@gmail.com')
});
test('check  getRole', () => {
    const employee = new Employee('John', '5', 'JohnSmith@gmail.com')

    expect(employee.getRole()).toBe('Employee')
});