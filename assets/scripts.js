// Assignment Code
//var generateBtn = document.querySelector("#generate");
var generateBtn = document.getElementById("generate");

function generateSpecial() {
    var specials = [" ","!","#","$","%","&","'","","(",")","*","+","-",",",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","}","|","~"];
    let num = Math.floor(Math.random() * specials.length);
    let char = specials[num];
    return char;
}

function generateLower() {
    var lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let num = Math.floor(Math.random() * lowers.length);
    let char = lowers[num];
    return char;
}

function generateUpper() {
    var uppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let num = Math.floor(Math.random() * uppers.length);
    let char = uppers[num];
    return char;
}

function generateNumber() {
    var nums = ["0","1","2","3","4","5","6","7","8","9"];
    let num = Math.floor(Math.random() * nums.length);
    let char = nums[num];
    return char;
}


// The generatePassword function activates when writePassword runs, which happens after the generate button is clicked
function generatePassword() {
    var numChar = prompt("How many characters (8-128) would you like the password to be?" , 0);
    numChar = parseInt(numChar);
    //console.log(numChar + 1);
    if ((numChar < 8) || (numChar > 128)) {
        alert("You must choose an integer from 8 to 128.");
        return false;
    }
    var special = confirm("Do you want the password to include special characters?");
    var lower = confirm("Do you want the password to include lowercase letters?");
    var upper = confirm("Do you want the password to include uppercase letters?");
    var numbers = confirm("Do you want the password to include numbers?");

            //console.log(special);
            //console.log(lower);
            //console.log(upper);
            //console.log(numbers);
    
    var passcode = [];
    for (i = 0; i < numChar; i++) {
        let num = Math.floor(Math.random() * 4);
        if (num === 0) {
            if (special === true) {
                passcode.push( generateSpecial() );
            }
            else {
                i = i - 1;
            }
        }
        if (num === 1) {
            if (lower === true) {
                passcode.push( generateLower() );
            }
            else {
                i = i - 1;
            }
        }
        if (num === 2) {
            if (upper === true) {
                passcode.push( generateUpper() );
            }
            else {
                i = i - 1;
            }
        }
        if (num === 3) {
            if (numbers === true) {
                passcode.push( generateNumber() );
            }
            else {
                i = i - 1;
            }
        }
    }
    passcode = passcode.join("");
    return passcode;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return passwordText.value;
}

// Add event listener to generate button (When the generate button is clicked, writePassword is run.)
generateBtn.addEventListener("click", writePassword);
