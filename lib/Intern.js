const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        // call parent constructor
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = "Intern";
    }

    getRole(){
        return this.role;
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;