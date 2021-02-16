const Engineer = require('../lib/Engineer.js');



test('creates employee object', () => {
    const engineer = new Engineer('Elon', 3, 'email', 'github');

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toEqual('Engineer');
    expect(engineer.getName()).toEqual(engineer.name)
    expect(engineer.getId()).toEqual(engineer.id)
    expect(engineer.getEmail()).toEqual(engineer.email)
    expect(engineer.getRole()).toEqual(engineer.role)
    expect(engineer.getGithub()).toEqual(engineer.github)
});
