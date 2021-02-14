test('creates employee object', () => {
    const engineer = new Engineer('Dave', 1, 'Hello@juan.com');

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});