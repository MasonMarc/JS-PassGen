// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){
  // CODE GOES HERE
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var Special = "#$%&'()*+,-./:;<=>?@][^_`{|}~!";
  var lowletters = letters.toLowerCase();
  var chooseFrom = "";
  var passlength = prompt("How many characters do you want your password to be from 1-128 characters");
  var isUppercase = confirm('Would you like to use Uppercase?');
  var isLowercase = confirm('Would you like to use Lowercase?');
  var isSpecial = confirm('Would you like to use Special Characters?');
  var isNumber = confirm('Would you like to use Numbers?');
  var passrand = "";

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
    chooseFrom += Special;

  }

  if (isNumber) {
    console.log('number');
    chooseFrom += numbers;
  }

  console.log(chooseFrom);

  //GRAB RANDOM LETTERS
  for (var i = 0;i<=passlength;i++){
  var rand = Math.floor(Math.random() * chooseFrom.length);
  passrand += chooseFrom[rand];
  }

  return passrand;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

