var characterLength = 8;
var choiceArray =[];

var specialCharactersArray =['!','@','#','$','%','^','&','*','(',')','-','_','<','>','/']
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var numberArray = ['1','2','3','4','5','6','7','8','9','0',]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
    // I would generatePassword based on the prompts
}
function getPrompts() {
    charLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters"));   
    
    //Not A Number(NaN)

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { //This should be false
    alert("Character length must be a number of 8-128 digits. Try Again");
    return false;
    }

  if (confirm("Would you like lowercase letters in your password?")) {
        choiceArray = choiceArray.concat(lowerCaseArray);
    }
    if (confirm("Would you like uppercase letters in your password?")) {
        choiceArray = choiceArray.concat(upperCaseArray);
    }
    if (confirm("Would you like special characters in your password?")) {
        choiceArray = choiceArray.concat(specialCharactersArray);
}
    if (confirm("Would you like numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArray);
}
return true;
}
