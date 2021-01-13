// Assignment Code
var generateBtn = document.querySelector("#generate");	var generateBtn = document.querySelector("#generate");

// define variables
var generate = confirm("Please enter your criteria for a random password in the following prompts.");
var pwLength = prompt("Type a number between 8 & 128 for password length. Example: 17");
var upperCase = confirm("Would you like to include uppercase letters?");
var lowerCase = confirm("How about lowercase letters?");
var numbChara = confirm("Let's add some numbers in there, yes?");
var specChara = confirm("How about some special characters to top it off?");

// password length alert/response
if (pwLength < 8 || pwLength > 128) {
  alert("Select your password length.")
  var pwLength = prompt("Please enter your criteria for a random password in the following prompts.")
}

// charset alerts/responses
if (upperCase === false && lowerCase === false && numbChara === false && specChara === false){
  alert("Pick at least one character set.");
  var upperCase = confirm("Would you like to include uppercase letters?");
  var lowerCase = confirm("How about lowercase letters?");
  var numbChara = confirm("Let's add some numbers in there, yes?");
  var specChara = confirm("How about some special characters to top it off?");
}

/* set arrays for above variables
var uCaseLet = {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  !!!try to add charset values instead of typing out each char. Working on this!!!
}
*/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
