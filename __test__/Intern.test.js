const Intern = require('../lib/Intern');

test('create a new employee object', () => {
    const intern = new Intern('Cody', '1', 'test@test.com', 'Intern', 'School');

    expect(intern.getName()).toBe('Cody');
    expect(intern.getId()).toBe('1');
    expect(intern.getEmail()).toBe('test@test.com');
    expect(intern.getSchool()).toBe('School');
    expect(intern.getRole()).toBe('Intern');
});