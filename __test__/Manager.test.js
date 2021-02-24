const Manager = require('../lib/Manager');

test('create a new employee object', () => {
    const manager = new Manager('Cody', '1', 'test@test.com', 'Manager', '25');

    expect(manager.name).toBe('Cody');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('test@test.com');
    expect(manager.officeNumber).toBe('25');
    expect(manager.getRole()).toBe('Manager');
});