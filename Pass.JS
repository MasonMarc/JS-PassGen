// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var Special = "#$%&'()*+,-./:;<=>?@][^_`{|}~!";
  var lowletters = letters.toLowerCase();
  var chooseFrom = "";
  var passlength = prompt("How many characters do you want your password to be from 8-128 characters");
  var passrand = "";
  var isUppercase = true;
  var isLowercase = true;
  var isSpecial = true;
  var isNumber = true;

  // loop for pass length being out of range. Makes user pick correct range for password
  for (passlength; passlength < 8 || passlength > 128;) {
    alert('Please select a valid password length (8-128 chars');
    var passlength = prompt("How many characters do you want your password to be from 8-128 characters");
  }

  function getchoices() {

    isUppercase = confirm('Would you like to use Uppercase?');
    isLowercase = confirm('Would you like to use Lowercase?');
    isSpecial = confirm('Would you like to use Special Characters?');
    isNumber = confirm('Would you like to use Numbers?');


    if (isUppercase) {
      //USE UPPERCASE
      chooseFrom += letters;
    }
    if (isLowercase) {
      //USE LOWERCASE
      chooseFrom += lowletters;
    }
    if (isSpecial) {
      //USE Special
      chooseFrom += Special;

    }
    if (isNumber) {
      // USE Number      
      chooseFrom += numbers;
    }

  }

  getchoices();

  var isit = !isNumber && !isSpecial && !isLowercase && !isUppercase;
  if (isit) {

    alert('Please select at least one group of characters for the password');
    getchoices();
    return "";
  }
  // I tried to make it to where you had to select one input and it looped every time but i could never get it past a second time :( 

  //GRAB RANDOM LETTERS
  for (var i = 0; i <= passlength; i++) {
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

