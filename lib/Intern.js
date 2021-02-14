const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        // call parent constructor
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getRole(){
        return 'Intern'
    }
}

module.exports = Intern;