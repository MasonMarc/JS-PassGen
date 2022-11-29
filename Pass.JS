// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // CODE GOES HERE
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var Special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~!";
  var lowletters = letters.toLowerCase();
  var chooseFrom = "";
  var isUppercase = confirm('Would you like to use Uppercase?');
  var isLowercase = false;
  var isSpecial = false;
  var isNumber = false;

  if (isUppercase) {
    //USE UPPERCASE
    console.log('uppercase');
    chooseFrom += letters;
  }

  if (isLowercase) {
    //USE LOWERCASE
    console.log('lowercase');
    chooseFrom += lowletters;
  }

  if (isSpecial) {
    //USE Special
    console.log('special');
  }

  if (isNumber) {
    //USE Number
    console.log('number');
  }

  chooseFrom += isSpecial;
  chooseFrom += isNumber;

  //GRAB RANDOM LETTERS
  
  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

