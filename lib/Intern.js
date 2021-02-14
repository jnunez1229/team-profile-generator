class Intern extends Employee{
    constructor(obj){
        // call parent constructor
        super();

        this.name = obj.name;
        this.id = obj.id;
        this.email = obj.email;
        this.school = obj.school;
    }

    getRole(){
        return 'Intern'
    }
}

module.exports = Intern;