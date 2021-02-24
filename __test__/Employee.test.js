const Employee = require('../lib/Employee');

test('create a new employee object', () => {
    const employee = new Employee('Cody', '1', 'test@test.com');

    expect(employee.name).toBe('Cody');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('test@test.com');
});

test('get name', () => {
    const employee = new Employee('Cody', '1', 'test@test.com');

    expect(employee.getName()).toBe('Cody');
});

test('get id', () => {
    const employee = new Employee('Cody', '1', 'test@test.com');

    expect(employee.getId()).toBe('1');
});

test('get email', () => {
    const employee = new Employee('Cody', '1', 'test@test.com');

    expect(employee.getEmail()).toBe('test@test.com');
});

test('get role', () => {
    const employee = new Employee('Cody', '1', 'test@test.com');

    expect(employee.getRole()).toBe('Employee');
});