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

// set arrays for above var (attempt with Charset as a second method at a later date)
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbChara = ["0","1","2","3","4","5","6","7","8","9"]
var specChara = ["!","@","#","$","%","^","&","*","(",")","/",">","<","-","_",":",";","[","]","{","}","|"]

var password = "";

// password iterator and return
for (var i = 0; i <= passwordLength; i++) {
  let upperCaseRandom = upperCase[Math.floor(Math.random() * upperCase.length)];
  let lowerCaseRandom = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  let numbCharaRandom = numerical[Math.floor(Math.random() * numerical.length)];
  let specCharaRandom = special[Math.floor(Math.random() * special.length)];
}

// index starting point at 0
var randomNumber = 0;

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
