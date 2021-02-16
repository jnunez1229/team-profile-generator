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
          message: `File '${destination.slice(7)}' Created!`
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
          message: 'Stylesheet created!'
        });
      });
    });
  };

  module.exports = {writeFile, copyFile}