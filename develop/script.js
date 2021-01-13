// Assignment Code
var generateBtn = document.querySelector("#generate");

// define variables
var generate = confirm("Please enter your criteria for a random password in the following prompts.");
var pwLength = prompt("Type a number between 8 & 128 for password length. Example: 17");
var upperCase = confirm("Would you like to include uppercase letters?");
var lowerCase = confirm("How about lowercase letters?");
var numbChara = confirm("Let's add some numbers in there, yes?");
var specChara = confirm("How about some special characters to top it off?");

// password length alert/response
if (pwLength < 8 || pwLength > 128) {
  alert("Please. select an appropriate password length.")
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
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbCharaNum = ["0","1","2","3","4","5","6","7","8","9"]
var specCharaSymbol = ["!","@","#","$","%","^","&","*","(",")","/",">","<","-","_",":",";","[","]","{","}","|"]

var pw = "";

// password iterator and return
for (var i = 0; i <= pwLength; i++) {
  let upperCaseRandom = upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
  let lowerCaseRandom = lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
  let numbCharaRandom = numbCharaNum[Math.floor(Math.random() * numbCharaNum.length)];
  let specCharaRandom = specCharaSymbol[Math.floor(Math.random() * specCharaSymbol.length)];

  // index starting point at 0
  var ranNumber = 0;

  if (upperCase === true) {
    ranNumber++
  }
  if (lowerCase === true) {
    ranNumber++
  }
  if (numbChara === true) {
    ranNumber++
  }
  if (specChara === true) {
    ranNumber++
  }

  //create random indexing
  var ranIndex = Math.floor(Math.random() * ranNumber)
  var ranArray =[];
    if (upperCase === true){
      ranArray.push(upperCaseRandom)
    }
    if (lowerCase === true) {
      ranArray.push(lowerCaseRandom)
    }
    if (numbChara === true) {
      ranArray.push(numbCharaRandom)
    }
    if (specChara === true) {
      ranArray.push(specCharaRandom)
    }
    {
    pw+=ranArray[ranIndex];
    ranArray =[]
    console.log(pw)
    }
  }

  // Password output
  function createPassword () {
    var password = pw.substring(0,pw.length-1);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);