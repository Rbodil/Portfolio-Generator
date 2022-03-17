const fs = require("fs");

const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [termName,github] = profileDataArgs;


fs.writeFile('index.html', generatePage(termName,github), err => {
    if (err) throw err;

    console.log("Portfolio Complete! Check it out man!")
});