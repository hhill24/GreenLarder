

function StoreVeganCrate()
{

const fs = require('fs')

// Data which will write in a file.
let value1 = document.get('firstname').value;
let value2 = document.getElementsByName('email').value;
let value3 = document.getElementsByName('age').value;
let value4 = document.getElementsByName('reason').value;

// Write data in 'Output.txt' .
fs.writeFile('GreenCrateForm.txt',value1 value2 value3 value4 , (err) => {
    // In case of a error throw err.
    if (err) throw err;
})
}

function StoreNewsLetter()
{

const fs = require('fs')

  // Data which will write in a file.
let value1 = document.getElementsByName('lastname').value;
let value2 = document.getElementsByName('email').value;
let value3 = document.getElementsByName('age').value;
let value4 = document.getElementsByName('reason').value;

  // Write data in 'Output.txt' .
fs.writeFile('Newsletter\GreenCrateForm.txt', value1 value2 value3 value4, (err)) => {
      // In case of a error throw err.
      if (err) throw err;
  })
}
