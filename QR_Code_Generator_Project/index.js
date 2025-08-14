// 1. Use the inquirer npm package to get user input.
import inquirer from "inquirer";

// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
import qr from "qr-image";

// 3. Create a txt file to save the user input using the native fs node module.
import fs from "fs";

inquirer
  .prompt([{
      "message": "Please enter URL to be encoded into QR code:",
      "name": "url",
    }])
  .then((answers) => {
   const url = answers.url;
   var qrCodeImage = qr.image(url);
   qrCodeImage.pipe(fs.createWriteStream('new_qr_code.png'));

   fs.writeFile("qr_code.txt", url, (err) => {
    if (err) return console.error(err);
    console.log("File has been saved as qr_code.txt");
  });
   })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



