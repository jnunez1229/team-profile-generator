const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        // call parent constructor
        super();

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = 'Engineer'
    }

    getRole(){
        return this.role;
    }
}

module.exports = Engineer;