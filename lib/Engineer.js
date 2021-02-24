const Employee = require('./Employee');

    class Engineer extends Employee {
        constructor(name = '', id = '', email = '', role = 'Engineer', gitHub = '') {

            super(name, id, email, role);

            this.gitHub = gitHub;
        }
        getGitHub() {
            return `${this.gitHub}`;
        }
        
    }

module.exports = Engineer;