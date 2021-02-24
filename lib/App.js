const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class App {
    constructor() {
        this.data = [];
    }
    initializeApp() {
        
            
    }
    // prompt user 
    continue() {
        inquirer
            .prompt([
                {
                type: 'list',
                name: 'action',
                message: 'Select one of the options',
                choices: [ 
                    'Add an Engineer',
                    'Add an Intern',
                    'Finished building my team'
                ],
                }
            ])
            .then(({ action }) => {
                this.action = action;
                if (this.action === 'Add an Engineer') {
                    console.log('You chose to add an engineer');
                    this.addEngineer();
                }
                if (this.action === 'Add an Intern') {
                    console.log('You chose to add an Intern');
                }
                if (this.action === 'Finished building my team') {
                    console.log('GoodBye Fucker');
                }
            });
    }

    addEngineer() {
        inquirer 
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'Please enter the engineers name',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter engineers name!');
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'id',
            message: 'Please enter employee ID',
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please enter employee ID!');
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter email address',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter an email!');
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'github',
            message: 'Please enter engineers GitHub username',
            validate: gitHubInput => {
                if (gitHubInput) {
                  return true;
                } else {
                  console.log('Please enter engineers GitHub username!');
                  return false;
                }
              }
        },
    ])
    .then(({ name, id, email, gitHub }) => {
        this.data.push(new Engineer(name, id, email, gitHub));
        this.continue();
        //console.log(this.data);
    });
    }
}




module.exports = App;