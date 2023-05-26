var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];


function generatePassword() {
  // when the user comes to the site they click on the generate password button and then a series of prompts appear. the first prompt is the length of the password. followed by the character choices.
  

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var passwordLength = prompt("How many characters would you like your password to be?")
console.log(passwordLength);
if(passwordLength < 8 || passwordLength > 128){
  alert('MUST BE BETWEEN 8 & 128 CHARACTERS')
  return null
}

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var upperCased = confirm("Do you want to include uppercase letters?")
var lowerCased = confirm("Do you want to include lowercase letters?")
var numeric = confirm("Do you want to include numbers?")
var special = confirm("Do you want to include special characters?")

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
if(upperCased === false && lowerCased === false && numeric === false && special === false){
  alert('at least one character type should be selected')
  return null
}

var superArray = []
var finalPassword = []

if(upperCased === true){
   superArray = superArray.concat(upperCasedCharacters);
}
if(lowerCased === true){
  superArray = superArray.concat(lowerCasedCharacters)
}

if(specialCharacters === true){
  superArray = superArray.concat(specialCharacters);
}

if(numericCharacters === true){
  superArray = superArray.concat(numericCharacters);
}

// if the user says yes to any confirm, we should add that character bank to a super array so that we can then randomize that superArray by the length the user chose

for (var i = 0; i < passwordLength; i++) {
  // randomize the superArray have it return one character from the array per loop push taht character into the final password array
  
}

// how to return an array as a string without the commas? **HINT look up join
return finalPassword.join('');

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
