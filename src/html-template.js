function generateTeam(teamArr){
    return teamArr.map(memberObj=>{
        const {name, id, email, role, number, github, school} = memberObj;

        // generates info specific to member title
        let info;
        let icon;
        switch(role){
            case `Manager`:
                info = `<li>Office number: ${number}</li>`
                icon = `<i class="fas fa-tasks"></i>`
                break;
            case `Engineer`:
                info = `<li>Github: <a href="https://github.com/${github}" target="_blank">${github}</a></li>`
                icon = `<i class="fas fa-code-branch">`
                break;
            case `Intern`:
                info = `<li>School: ${school}</li>`
                icon = `<i class="fas fa-graduation-cap"></i>`
                break;
        }
        return `
        <div class="col-sm-6 col-lg-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${icon} ${role}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${name}</li>
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
                    ${info}
                </ul>
            </div>
        </div>`
    }).join('')
}


module.exports = teamArr => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <!-- bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <!-- font awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1 class="text-center">My Team</h1>
        </header>
        <main class="container">
            <div class="row">
                ${generateTeam(teamArr)}    
            </div>
        </main>
    </body>
    </html>`
}



