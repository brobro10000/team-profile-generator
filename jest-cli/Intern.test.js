const Intern = require('../lib/Intern')

test('create intern object', () => {
    const employee = new Intern('John', '5', 'JohnSmith@gmail.com', 'UCF');
    
    expect(employee).toBe(employee);
});
test('check name', () => {
    const employee = new Intern('John', '5', 'JohnSmith@gmail.com', 'UCF');

    expect(employee.name).toBe('John');
});
test('check id', () => {
    const employee1 = new Intern('John', 5, 'JohnSmith@gmail.com', 'UCF');
    const employee2 = new Intern('John', '5', 'JohnSmith@gmail.com', 'UCF');
    expect(employee1.id).toBe(5);
    expect(employee2.id).toBe(5);
});
test('check email', () => {
    const employee = new Intern('John', 5, 'JohnSmith@gmail.com', 'UCF');

    expect(employee.email).toBe('JohnSmith@gmail.com');
});
test('check school', () => {
    const employee = new Intern('John', 5, 'JohnSmith@gmail.com', 'UCF');

    expect(employee.school).toBe('UCF');
});
test('check empty Name', () => {
    let expectedErrorMessage = "A name is required";

    try {
        const employee = new Intern('', 5, 'JohnSmith@gmail.com', 'UCF');
    } catch (error) {
        expectedError = error;

    }
    expect(expectedErrorMessage).toBe(expectedError.message);
});
test('check empty ID', () => {
    let expectedErrorMessage = "ID must be a positive number";

    try {
        const employee = new Intern('John', '', 'JohnSmith@gmail.com', 'UCF');
    } catch (error) {
        expectedError = error;
    }
    expect(expectedErrorMessage).toBe(expectedError.message);
});
test('check negative ID', () => {
    let expectedErrorMessage = "ID must be a positive number";

    try {
        const employee = new Intern('John', -1, 'JohnSmith@gmail.com', 'UCF');
    } catch (error) {
        expectedError = error;
    }
    expect(expectedErrorMessage).toBe(expectedError.message);
});

test('check empty email', () => {
    let expectedErrorMessage = "An email is required";

    try {
        const employee = new Intern('John', '5', '', 'UCF');
    } catch (error) {
        expectedError = error;
    }
    expect(expectedErrorMessage).toBe(expectedError.message);
});
test('check @ in email', () => {
    let expectedErrorMessage = "Email requires @ symbol";

    try {
        const employee = new Intern('John', '5', 'testing', 'UCF');
        //employee.email.split("@")[1]
    } catch (error) {
        expectedError = error;
    }

    expect(expectedErrorMessage).toBe(expectedError.message);
});
test('check . after @ in email', () => {
    let expectedErrorMessage = "Email requires domain name (.com,.org etc.)";

    try {
        const employee = new Intern('John', '5', 'testing@gmail', 'UCF');
        //employee.email.split("@")[1].split('.')[1]
    } catch (error) {
        expectedError = error;
    }

    expect(expectedErrorMessage).toBe(expectedError.message);
});
test('check empty school', () => {
    let expectedErrorMessage = "A school is required";

    try {
        const employee = new Intern('John', 5, 'JohnSmith@gmail.com', '')
    } catch (error) {
        expectedError = error;

    }

    expect(expectedErrorMessage).toBe(expectedError.message)
});
test('check  getName', () => {
    const employee = new Intern('John', '5', 'JohnSmith@gmail.com', 'UCF');

    expect(employee.getName()).toBe('John');
});
test('check  getId', () => {
    const employee = new Intern('John', '5', 'JohnSmith@gmail.com', 'UCF');

    expect(employee.getId()).toBe(5);
});
test('check  getEmail', () => {
    const employee = new Intern('John', '5', 'JohnSmith@gmail.com', 'UCF');

    expect(employee.getEmail()).toBe('JohnSmith@gmail.com');
});
test('check getSchool', () => {
    const employee =  new Intern('John', '5', 'JohnSmith@gmail.com', "UCF");
    
    expect(employee.getSchool()).toBe('UCF');
});
test('check  getRole', () => {
    const employee = new Intern('John', '5', 'JohnSmith@gmail.com', 'UCF');

    expect(employee.getRole()).toBe('Intern');
});