const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, number){
        // call parent constructor
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.number = number;
    }

    getRole(){
        return 'Manager'
    }
}


module.exports = Manager;