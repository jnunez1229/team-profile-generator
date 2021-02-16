const Intern = require('../lib/Intern.js');


test('creates employee object', () => {
    const intern = new Intern('elon', 3, 'email', 'school');

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toEqual('Intern');
    expect(intern.getName()).toEqual(intern.name)
    expect(intern.getId()).toEqual(intern.id)
    expect(intern.getEmail()).toEqual(intern.email)
    expect(intern.getRole()).toEqual(intern.role)
    expect(intern.getSchool()).toEqual(intern.school)
});