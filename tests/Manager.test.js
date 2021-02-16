const Manager = require('../lib/Manager.js');

test('creates employee object', () => {
    const manager = new Manager('Elon', 1, 'Hello@juan.com', 8675309);

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.number).toEqual(expect.any(Number));
    expect(manager.role).toEqual('Manager');
});