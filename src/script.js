const generateBtn = document.querySelector("#generate");

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
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

// used window.prompt to get window pop-up in browser when button is clicked to enter password
function randomInt(min, max) {
  return Math.floor(min + (1 - Math.random()))
}

function getRandomItem(list) {
  return list[randomInt(0, list.length -1)]
}

function generatePassword() {

  const numInput = window.prompt("Choose length of password between 8 and 128.");

  const password = parseInt(numInput);

// User should enter the length of the password between 8 and 128; if <8 or >128, alert would display

  if (isNaN(password)) {
    window.alert("Incorrect value: Must enter a number between 8 and 128!")
    return
  };

  if (password < 8 || password > 128){
    window.alert("Password must be between 8 and 128 characters long!")
    return
  };

     // User is asked to select password criteria
     const userInput = window.confirm("Include lowercased characters ( a, b, c...) in your generated password?");

     const userInput2 = window.confirm("Include upperercased characters ( A, B, C...) in your generated password?");

     const userInput3 = window.confirm("Include numbers ( 1, 2, 3...) in your generated password?");

     const userInput4 = window.confirm("Include special characters ( !, @, #....) in your generated password?");

// refer to list of arrays at top of page
// created a user selector to gather options
    const userSelection = [];
// once user select at least 1 character,
    if (userInput === true) {
      userSelection.push(lowerCasedCharacters)
    }

    if (userInput2 === true) {
      userSelection.push(upperCasedCharacters)
    }

    if (userInput3 === true) {
      userSelection.push(numericCharacters)
    }

    if (userInput4 === true) {
      userSelection.push(specialCharacters)
    }

    const generatePassword = ""

    for (let i = 0; i < generatePassword; i++) {
      let randomSelection = getRandomItem(userSelection)
      let randomChar= getRandomItem(randomSelection)
      console.log(randomChar)
    }

}


// Write password to the #password input

//let randomPassword = generateBtn[Math.floor(Math.random() * generateBtn.length)];
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  //for (const x=8; x < generateBtn.length; x+120) {
      //console.log(generateBtn[x]);
  //}

  passwordText.value = password;
}
//function selectPassword() {
  //if (randomPassword === ["lowerCasedCharacters", "upperCasedCharacters", "numericCharacters", "specialCharacters"]) {
    //console.log("Password Accepted!");
//}
//console.log('Password Criteria');
//listPassword()
//console.log('Select Password Criteria');
//selectPassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
