import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    message: "Enter the url: ",
    name: "URL"
  }])
  .then((answers) => {
    // creating and saving qr image for entered URL
    const url = answers.URL;
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr-code.png'));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });