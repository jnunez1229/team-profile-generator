const Engineer = require('../lib/Engineer.js');

test('creates employee object', () => {
    const engineer = new Engineer('Elon', 1, 'Hello@juan.com', 'github');

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});
