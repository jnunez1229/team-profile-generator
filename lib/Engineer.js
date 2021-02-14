const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(obj){
        // call parent constructor
        super();

        this.name = obj.name;
        this.id = obj.id;
        this.email = obj.email;
        this.github = obj.github;
    }

    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;