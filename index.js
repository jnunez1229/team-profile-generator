const inquirer = require('inquirer');

const promptManager = () =>{
 return inquirer.prompt([
     {
        type: 'input',
        name: 'manName',
        message: "What is the team manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }
     },
     {
        type: 'input',
        name: 'manID',
        message: "What is the team manager's id?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's id!");
                return false;
            }
        }
     },
     {
        type: 'input',
        name: 'manEmail',
        message: "What is the team manager's email?",
        validate: email => {

            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }

     },
     {
        type: 'input',
        name: 'manNum',
        message: "What is the team manager's office number?",
        validate:  value => {

            // regex phone # check
            let pass = value.match(
              /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            );
            if (pass) {
              return true;
            }
      
            return 'Please enter a valid phone number';
          },
     },
 ])
}

const promptNewEmployee = () =>{
    return inquirer.prompt(
        {
           type: 'list',
           name: 'newEmployee',
           message: 'Which type of team member would you like to add?',
           choices:['Engineer', 'Intern', 'I am done adding employees'],
        }
    ).then(answer => {
            if(answer.newEmployee === "Engineer"){
                return promptEngineer()
            } else if(answer.newEmployee === "Intern"){
                return promptIntern()
            }else{
                return console.log('All done!');
            }

    })
}

const promptEngineer = () =>{
    return inquirer.prompt([
        {
           type: 'input',
           name: 'engName',
           message: "What is the Engineer's name?",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log("Please enter the engineer's name!");
                   return false;
               }
           }
        },
        {
           type: 'input',
           name: 'engID',
           message: "What is the engineer's id?",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log("Please enter the engineer's id!");
                   return false;
               }
           }
        },
        {
           type: 'input',
           name: 'engEmail',
           message: "What is the engineer's email?",
           validate: email => {

            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
           type: 'input',
           name: 'engGithub',
           message: "What is the engineer's github username?",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log("Please enter the engineer's github username!");
                   return false;
               }
           }
        },
    ]).then(promptNewEmployee)
   }

   const promptIntern = () =>{
    return inquirer.prompt([
        {
           type: 'input',
           name: 'intName',
           message: "What is the intern's name?",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log("Please enter the intern's name!");
                   return false;
               }
           }
        },
        {
           type: 'input',
           name: 'intID',
           message: "What is the intern's id?",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log("Please enter the intern's id!");
                   return false;
               }
           }
        },
        {
           type: 'input',
           name: 'intEmail',
           message: "What is the intern's email?",
           validate: email => {

            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
           type: 'input',
           name: 'intSchool',
           message: "What is your intern's school?",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log("Please enter your intern's school!");
                   return false;
               }
           }
        },
    ]).then(promptNewEmployee)
   }

   promptManager()
    .then(promptNewEmployee)
    
