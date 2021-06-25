class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = parseInt(id)
        this.email = email;
        if (typeof this.name !== 'string' || this.name == "") {
            throw new Error("A name is required");
        };
        if (typeof this.id !== 'number' || this.id < 0 || isNaN(this.id) == true) {
            throw new Error("ID must be a positive number");
        };
        if (typeof this.email !== 'string' || this.email == "" || this.email == undefined) {
            throw new Error("An email is required");
        };
        if (this.email.split('@')[1] == undefined) {
            throw new Error("Email requires @ symbol");
        };
        if (this.email.split("@")[1].split('.')[1] == undefined) {
            throw new Error("Email requires domain name (.com,.org etc.)");
        };
    }
        getName() {
            return this.name;
        };
        getId() {
            return this.id;
        };
        getEmail(){
            return this.email
        };
        getRole() {
            return 'Employee';
        };

        // if (typeof this.name !== 'string' || this.name == "") {
        //     throw new Error("A name is required");
        // };
        // if (typeof this.id !== 'number' || this.id < 0 || isNaN(this.id) == true) {
        //     throw new Error("ID must be a positive number");
        // };
        // if (typeof this.email !== 'string' || this.email == "" || this.email == undefined) {
        //     throw new Error("An email is required");
        // };
        // if (this.email.split('@')[1] == undefined) {
        //     throw new Error("Email requires @ symbol");
        // };
        // if (this.email.split("@")[1].split('.')[1] == undefined) {
        //     throw new Error("Email requires domain name (.com,.org etc.)");
        // };
    }
module.exports = Employee;