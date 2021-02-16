const fs = require('fs');

// create html file
function writeFile(destination, text){
    return new Promise((resolve, reject)=>{
      fs.writeFile(destination, text, err =>{
        if(err){
          reject(err)
          return
        }
        resolve({
          ok: true,
          message: `The HTML file is created!`
        })
      })
    })
}

// copy CSS file
const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'The files have been created! Please check in the dist folder to see them'
        });
      });
    });
  };

  module.exports = {writeFile, copyFile}