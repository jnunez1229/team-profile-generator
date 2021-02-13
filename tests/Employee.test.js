const Employee = require('../lib/employee.js');

test('creates employee object', () => {
    const employee = new Employee('Dave', 1, 'Hello@juan.com');

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

})
