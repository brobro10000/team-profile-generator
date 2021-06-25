const Engineer = require('../lib/Engineer')

test('create engineer object', () => {
    const employee = new Engineer('John', '5', 'JohnSmith@gmail.com', 'testGit')

    expect(employee).toBe(employee)
});
test('check name', () => {
    const employee = new Engineer('John', '5', 'JohnSmith@gmail.com', 'testGit')

    expect(employee.name).toBe('John')
});
test('check id', () => {
    const employee1 = new Engineer('John', 5, 'JohnSmith@gmail.com', 'testGit')
    const employee2 = new Engineer('John', '5', 'JohnSmith@gmail.com', 'testGit')
    expect(employee1.id).toBe(5)
    expect(employee2.id).toBe(5)
});
test('check github', () => {
    const employee = new Engineer('John', 5, 'JohnSmith@gmail.com', 'testGit')

    expect(employee.github).toBe('testGit')
})
test('check email', () => {
    const employee = new Engineer('John', 5, 'JohnSmith@gmail.com', 'testGit')

    expect(employee.email).toBe('JohnSmith@gmail.com')
});
test('check empty Name', () => {
    let expectedErrorMessage = "A name is required";

    try {
        const employee = new Engineer('', 5, 'JohnSmith@gmail.com', 'testGit')
    } catch (error) {
        expectedError = error;

    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check empty ID', () => {
    let expectedErrorMessage = "ID must be a positive number"

    try {
        const employee = new Engineer('John', '', 'JohnSmith@gmail.com', 'testGit')
    } catch (error) {
        expectedError = error
    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check negative ID', () => {
    let expectedErrorMessage = "ID must be a positive number";

    try {
        const employee = new Engineer('John', -1, 'JohnSmith@gmail.com', 'testGit')
    } catch (error) {
        expectedError = error;
    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});

test('check empty email', () => {
    let expectedErrorMessage = "An email is required"

    try {
        const employee = new Engineer('John', '5', '', 'testGit')
    } catch (error) {
        expectedError = error;
    }
    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check @ in email', () => {
    let expectedErrorMessage = "Email requires @ symbol"

    try {
        const employee = new Engineer('John', '5', 'testing', 'testGit')
        //employee.email.split("@")[1]
    } catch (error) {
        expectedError = error
    }

    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check . after @ in email', () => {
    let expectedErrorMessage = "Email requires domain name (.com,.org etc.)"

    try {
        const employee = new Engineer('John', '5', 'testing@gmail', 'testGit')
        //employee.email.split("@")[1].split('.')[1]
    } catch (error) {
        expectedError = error
    }

    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check empty github', () => {
    let expectedErrorMessage = "A github username is required";

    try {
        const employee = new Engineer('John', 5, 'JohnSmith@gmail.com', '')
    } catch (error) {
        expectedError = error;

    }

    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check  getName', () => {
    const employee = new Engineer('John', '5', 'JohnSmith@gmail.com', 'testGit')

    expect(employee.getName()).toBe('John')
});
test('check  getId', () => {
    const employee = new Engineer('John', '5', 'JohnSmith@gmail.com', 'testGit')

    expect(employee.getId()).toBe(5)
});
test('check  getEmail', () => {
    const employee = new Engineer('John', '5', 'JohnSmith@gmail.com', 'testGit')

    expect(employee.getEmail()).toBe('JohnSmith@gmail.com')
});
test('check  getGithub', () => {
    const employee = new Engineer('John', '5', 'JohnSmith@gmail.com', 'testGit')

    expect(employee.getGithub()).toBe('testGit')
});
test('check  getRole', () => {
    const employee = new Engineer('John', '5', 'JohnSmith@gmail.com', 'testGit')

    expect(employee.getRole()).toBe('Engineer')
});