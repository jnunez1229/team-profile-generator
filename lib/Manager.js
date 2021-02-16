const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, number){
        // call parent constructor
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.number = number;
        this.role = 'Manager';
    }

    getRole(){
        return this.role;
    }
}


module.exports = Manager;