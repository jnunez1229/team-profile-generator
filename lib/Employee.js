class Employee {
    constructor(obj){
        this.name = obj.name;
        this.id = obj.id;
        this.email = obj.email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee'
    }
}

module.exports = Employee;