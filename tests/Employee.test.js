const Employee = require('../lib/Employee.js');


test('creates employee object', () => {
    const employee = new Employee('Elon', 1, 'hello@123.com',);

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Employee');
    

});
