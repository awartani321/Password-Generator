var characterLength = 8;
var choiceArray =[];
//Arrays
var specialCharactersArray =['!','@','#','$','%','^','&','*','(',')','-','_','<','>','/']
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var numberArray = ['1','2','3','4','5','6','7','8','9','0',]

// connecting the id to the html to generate a query for it
var generateBtn = document.querySelector("#generate");

// this will listen for a click action
generateBtn.addEventListener("click", writePassword);


// Calling prompts and added if and else statments
function writePassword() {
  var correctPrompts = getPrompts(); // this will return true or false
  var passwordText = document.querySelector("#password");
   
if(correctPrompts){
    var newPassword = generatePassword();
    passwordText.value = newPassword;
   } 
   else { passwordText.value = "";
}
function generatePassword() {
   
    // Generating random letters, (upper and lower case), numbers, and special characters
var password ="";
for(var i= 0; i < characterLength; i++){
var randomIndex = Math.floor(Math.random() * choiceArray.length)
password = password + choiceArray[randomIndex];
}
return password;

}

function getPrompts() {
    choiceArray =[]
    characterLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters"));   
    
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
}