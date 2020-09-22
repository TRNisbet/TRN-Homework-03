// Assignment Code
var alphaLower = [
     "a",
     "b",
     "c",
     "d",
     "e",
     "f",
     "g",
     "h",
     "i",
     "j",
     "k",
     "l",
     "m",
     "n",
     "o",
     "p",
     "q",
     "r",
     "s",
     "t",
     "u",
     "v",
     "w",
     "x",
     "y",
     "z",
];
var alphaUpper = [
     "A",
     "B",
     "C",
     "D",
     "E",
     "F",
     "G",
     "H",
     "I",
     "J",
     "K",
     "L",
     "M",
     "N",
     "O",
     "P",
     "Q",
     "R",
     "S",
     "T",
     "U",
     "V",
     "W",
     "X",
     "Y",
     "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = [
     " ",
     "!",
     "”",
     "#",
     "$",
     "%",
     "&",
     "’",
     "(",
     ")",
     "*",
     "+",
     ",",
     "-",
     ".",
     "/",
     ":",
     ";",
     "<",
     "=",
     ">",
     "?",
     "@",
     "[",
     "\\",
     "]",
     "^",
     "_",
     "`",
     "{",
     "|",
     "}",
     "~",
];
var generateBtn = document.querySelector("#generate");
var finalPwd = "";

// defining the function
function generatePassword() {
     var pwd = [];
     // Alert for how many characters to be included
     var pwdLgthUser = prompt(
          "How many characters long would you like the password to be?"
     );
     // While loop to force a number |b| 8 and 128
     while (pwdLgthUser < 8 || pwdLgthUser > 128) {
          var pwdLgthUser = prompt(
               "Password must be between 8 and 128 characters."
          );
     }

     // Alerts for the types of characters that could be included in the password
     var confirmUpper = confirm(
          "Do you want your password to include UPPERCASE Letters?"
     );
     var confirmLower = confirm(
          "Do you want your password to include lowercase letters?"
     );
     var confirmNum = confirm("Do you want your password to include Numbers?");
     var confirmSym = confirm(
          "Do you want your password to include Special Symbols?"
     );

     // While loop to make sure that at least one item was selected
     while (!confirmUpper && !confirmLower && !confirmNum && !confirmSym) {
          alert(
               "Your password must contain some characters.  Please click 'OK' to confirm one of the following choices:"
          );
          var confirmUpper = confirm(
               "Do you want your password to include UPPERCASE Letters?"
          );
          var confirmLower = confirm(
               "Do you want your password to include lowercase letters?"
          );
          var confirmNum = confirm(
               "Do you want your password to include Numbers?"
          );
          var confirmSym = confirm(
               "Do you want your password to include Special Symbols?"
          );
     }

     // Below builds the array out of the groups the user selected
     if (confirmUpper) {
          pwd = pwd.concat(alphaUpper);
     }
     if (confirmLower) {
          pwd = pwd.concat(alphaLower);
     }
     if (confirmNum) {
          pwd = pwd.concat(numbers);
     }
     if (confirmSym) {
          pwd = pwd.concat(symbols);
     }

     // The loop which adds the password together from the selected array
     for (let index = 0; index < pwdLgthUser; index++) {
          var random = Math.floor(Math.random() * pwd.length);
          var element = pwd[random];
          finalPwd = finalPwd + element;
     }

     // The value to be returned out of the function
     return finalPwd;
}

function writePassword() {
     // All code will be inside of this block or lower
     // Added the value below to empty string before running the function (helps if running multiple times)
     finalPwd = "";

     var password = generatePassword();

     var passwordText = document.querySelector("#password");

     passwordText.value = password;
}

// Add event listener to generate button
// On a user click runs the function writePassword which includes the function generatePassword
generateBtn.addEventListener("click", writePassword);
