const inquirer = require('inquirer');

const promptManager = () =>{
 return inquirer.prompt([
     {
        type: 'input',
        name: 'name',
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
        name: 'id',
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
        name: 'email',
        message: "What is the team manager's email?",
        validate: value => {

            // Regex mail check (return true if valid mail)
            let pass = value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/) 
            if (pass) {
                return true;
            }
        
            return 'Please enter a valid email Address';
        },
     },
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
     },
 ]).then(data =>
    console.log(data));
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
           name: 'name',
           message: "What is the Engineer's name?",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log("Please enter the Engineer's name!");
                   return false;
               }
           }
        },
        {
           type: 'input',
           name: 'id',
           message: "What is the Engineer's id?",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log("Please enter the Engineer's id!");
                   return false;
               }
           }
        },
        {
           type: 'input',
           name: 'email',
           message: "What is the Engineer's email?",
           validate: value => {

            // Regex mail check (return true if valid mail)
            let pass = value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/) 
            if (pass) {
                return true;
            }
        
            return 'Please enter a valid email Address';
        },
        },
        {
           type: 'input',
           name: 'github',
           message: "What is the Engineer's github username?",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log("Please enter the Engineer's github username!");
                   return false;
               }
           }
        },
    ]).then(promptNewEmployee).then(data =>
        console.log(data));
   }

   const promptIntern = () =>{
    return inquirer.prompt([
        {
           type: 'input',
           name: 'name',
           message: "What is the Intern's name?",
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
           name: 'id',
           message: "What is the Intern's id?",
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log("Please enter the Intern's id!");
                   return false;
               }
           }
        },
        {
           type: 'input',
           name: 'email',
           message: "What is the Intern's email?",
           validate: value => {

            // Regex mail check (return true if valid mail)
            let pass = value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/) 
            if (pass) {
                return true;
            }
        
            return 'Please enter a valid email Address';
        },
        },
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
           }
        },
    ]).then(promptNewEmployee).then(data =>
        console.log(data));
   }

   promptManager()
    .then(promptNewEmployee)
    
    
