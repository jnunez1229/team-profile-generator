class Manager extends Employee{
    constructor(obj){
        // call parent constructor
        super();

        this.name = obj.name;
        this.id = obj.id;
        this.email = obj.email;
        this.number = obj.number;
    }

    getRole(){
        return 'Manager'
    }
}


module.exports = Manager;