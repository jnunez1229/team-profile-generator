const Manager = require('../lib/Manager.js');

test('creates employee object', () => {
    const manager = new Manager('Elon', 1, 'Hello@juan.com', 8675309);

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.number).toEqual(expect.any(Number));
    expect(manager.role).toEqual(manager.role);
    expect(manager.getName()).toEqual(manager.name)
    expect(manager.getId()).toEqual(manager.id)
    expect(manager.getEmail()).toEqual(manager.email)
    expect(manager.getRole()).toEqual(manager.role)
    expect(manager.getNumber()).toEqual(manager.number)
});
