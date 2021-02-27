const Manager = require('../lib/Manager');

test('create a new employee object', () => {
    const manager = new Manager('Cody', '1', 'test@test.com', '25');

    expect(manager.getName()).toBe('Cody');
    expect(manager.getId()).toBe('1');
    expect(manager.getEmail()).toBe('test@test.com');
    expect(manager.getOfficeNumber()).toBe('25');
});