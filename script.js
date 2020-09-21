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
var alphaNum = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
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
var generateBtn = document.querySelector(
  "#generate"
);
var pwd = [];
var finalPwd = "";
// will be in functtion
function generatePassword() {
  var pwdLgthUser = prompt(
    "How many characters long would you like the password to be?"
  );

  var pwdLgthInt = parseInt(
    pwdLgthUser
  );

  while (
    pwdLgthUser < 8 ||
    pwdLgthUser > 128
  ) {
    var pwdLgthUser = prompt(
      "Password must be between 8 and 128 characters."
    );
    var pwdLgthInt = parseInt(
      pwdLgthUser
    );
    console.log(
      "pwdLgthIntFromScript:",
      pwdLgthInt
    );
  }

  if (pwdLgthInt > 99) {
    alert("Why are you a Sadist?");
  }
  console.log("length:", length);

  console.log(
    "pwdLgthIntOutsideOfScript:",
    pwdLgthInt
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

  while (
    !confirmUpper &&
    !confirmLower &&
    !confirmNum &&
    !confirmSym
  ) {
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

  if (confirmUpper) {
    pwd = pwd.concat(alphaUpper);
  }

  if (confirmLower) {
    pwd = pwd.concat(alphaLower);
  }

  if (confirmNum) {
    pwd = pwd.concat(alphaNum);
  }

  if (confirmSym) {
    pwd = pwd.concat(symbols);
  }

  //  console.log(pwd)
  //  console.log('confirmUpperBeforeWhileLoop:', confirmUpper);
  //  console.log('confirmLowerBeforeWhileLoop:', confirmLower);
  //  console.log('confirmNumBeforeWhileLoop:', confirmNum);
  //  console.log('confirmSymBeforeWhileLoop:', confirmSym);

  for (
    let index = 0;
    index < pwdLgthInt;
    index++
  ) {
    var random = Math.floor(
      Math.random() * pwd.length
    );
    var element = pwd[random];
    finalPwd = finalPwd + element;
    console.log("finalPwd:", finalPwd);
  }

  return finalPwd;
}

// while (pwdLgthUser < 8 || pwdLgthUser > 128) {
//   var pwdLgthUser = prompt("Password must be between 8 and 128 character.");
//   var pwdLgthInt = parseInt(pwdLgthUser);
//   console.log('pwdLgthIntFromScript:', pwdLgthInt);
// }

// console.log('pwdLgthIntOutsideOfScript:', pwdLgthInt)

// while (!confirmUpper && !confirmLower && !confirmNum && !confirmSym) {
//   alert("Your password must contain some characters.  Please click 'OK' to confirm one of the following choices:");

//   var confirmUpper = confirm("Do you want your password to include UPPERCASE Letters?");

//   var confirmLower = confirm("Do you want your password to include lowercase letters?");

//   var confirmNum = confirm("Do you want your password to include Numbers?");

//   var confirmSym = confirm("Do you want your password to include Special Symbols?");
// }

// console.log('confirmUpperAfterWhileLoop:', confirmUpper);
// console.log('confirmLowerAfterWhileLoop:', confirmLower);
// console.log('confirmNumAfterWhileLoop:', confirmNum);
// console.log('confirmSymAfterWhileLoop:', confirmSym);

// var generateBtn = document.querySelector("#generate");

// var alphaLower = ["a",	"b",	"c",	"d",	"e",	"f",	"g",	"h",	"i",	"j",	"k",	"l",	"m",	"n",	"o",	"p",	"q",	"r",	"s",	"t",	"u",	"v",	"w",	"x",	"y",	"z"];

// var alphaUpper = ["A",	"B",	"C",	"D",	"E",	"F",	"G",	"H",	"I",	"J",	"K",	"L",	"M",	"N",	"O",	"P",	"Q",	"R",	"S",	"T",	"U",	"V",	"W",	"X",	"Y",	"Z"];

// var alphaNum = ["0",	"1",	"2",	"3",	"4",	"5",	"6",	"7",	"8",	"9"];

// var symbols = [" ", "!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  // all code will be inside of this block or lower
  var password = generatePassword();

  var passwordText = document.querySelector(
    "#password"
  );

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener(
  "click",
  writePassword
);
