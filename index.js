const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('./src/html-template.js');
const { writeFile, copyFile } = require('./utils/generate-page.js');

const team = [];

async function newMember(){
    await inquirer.prompt([
     {
        type: 'list', 
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern'],
     },
     {
        type: 'input',
        name: 'name',
        message: "What is your name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your name");
                return false;
            }
        }
     },
     {
        type: 'input',
        name: 'id',
        message: "What is your ID number?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your ID");
                return false;
            }
        }
     },
     {
        type: 'input',
        name: 'email',
        message: "What is your email?",
        validate: value => {

            // Regex mail check (return true if valid mail)
            let pass = value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/) 
            if (pass) {
                return true;
            }
        
            return 'Please enter a valid email Address';
        },
     },
    //  If Manager is chosen
     {
        type: 'input',
        name: 'number',
        message: "What is the team manager's office number?",
        validate:  value => {

            // regex phone # check (return true if valid #)
            let pass = value.match(
              /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            );
            if (pass) {
              return true;
            }
      
            return 'Please enter a valid phone number';
        },
        when: function({role}){
            if(role === `Manager`){
                return true
            } else{
                return false
            }
        } 
     },
    //  If Engineer is chosen
     {
        type: 'input',
        name: 'github',
        message: "What is your github username?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your github username");
                return false;
            }
        },
        when: function({role}){
            if(role === `Engineer`){
                return true
            } else{
                return false
            }
        } 
    },
    // If Intern is chosen
    {
        type: 'input',
        name: 'school',
        message: "What is your Intern's school?",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("Please enter your Intern's school!");
                return false;
            }
        },
        when: function({role}){
            if(role === `Intern`){
                return true
            } else{
                return false
            }
        } 
    }
 ]).then(answers =>{
     const{name, id, email} = answers;
     if(answers.role === 'Manager'){
        team.push(new Manager(name, id, email, answers.number));
    } else if(answers.role === 'Engineer'){
        team.push(new Engineer(name, id, email, answers.github));  
    } else if(answers.role === 'Intern'){
        team.push(new Intern(name, id, email, answers.school));  
    }
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'newMember',
            message: 'Add another member?',
            default: false
        }            
    ])
    .then(ans=>{
        if(ans.newMember){
            newMember()
        }else{

            writeFile('./dist/index.html', generateHTML(team));
          
            copyFile();
         
            }
        })
    })
}

 newMember()