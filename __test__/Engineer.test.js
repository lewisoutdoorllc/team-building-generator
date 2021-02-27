const Engineer = require('../lib/Engineer');

test('create a new employee object', () => {
    const engineer = new Engineer('Cody', '1', 'test@test.com', 'GitHubUsername');

    expect(engineer.getName()).toBe('Cody');
    expect(engineer.getId()).toBe('1');
    expect(engineer.getEmail()).toBe('test@test.com');
    expect(engineer.getGitHub()).toBe('GitHubUsername');
});