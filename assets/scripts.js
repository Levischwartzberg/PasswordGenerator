// Assignment Code
//var generateBtn = document.querySelector("#generate");
var generateBtn = document.getElementById("generate");

//A random special character is generated from the array if the user specifies that they want special characters
function generateSpecial() {
    var specials = [" ","!","#","$","%","&","'","","(",")","*","+","-",",",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","}","|","~"];
    let num = Math.floor(Math.random() * specials.length);
    let char = specials[num];
    return char;
}

//A random lowercase letter is generated from the array if the user specifies that they want lowercase letters
function generateLower() {
    var lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let num = Math.floor(Math.random() * lowers.length);
    let char = lowers[num];
    return char;
}

//A random uppercase letter is generated from the array if the user specifies that they want uppercase letters
function generateUpper() {
    var uppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let num = Math.floor(Math.random() * uppers.length);
    let char = uppers[num];
    return char;
}

//A random special integer is generated from the array if the user specifies that they want numbers
function generateNumber() {
    var nums = ["0","1","2","3","4","5","6","7","8","9"];
    let num = Math.floor(Math.random() * nums.length);
    let char = nums[num];
    return char;
}

//prompts the user for their desired password length
function getLength() {
    var numChar = prompt("How many characters (8-128) would you like the password to be?" , 0);
    numChar = parseInt(numChar);
    //console.log(numChar + 1);
    if ((numChar < 8) || (numChar > 128)) {
        alert("You must choose an integer from 8 to 128.");
        return getLength();
    }
    return numChar;
}

//prompts the user for their desired password character types
//e.g. (options[0] = true) indicates the user wants special characters, and (options[3] = false) means they don't want numbers
function getInfo() {
    var special = confirm("Do you want the password to include special characters?");
    var lower = confirm("Do you want the password to include lowercase letters?");
    var upper = confirm("Do you want the password to include uppercase letters?");
    var numbers = confirm("Do you want the password to include numbers?");

    var options = [false,false,false,false];
    if (special === true) {
        options[0] = true;
    }
    if (lower === true) {
        options[1] = true;
    }
    if (upper === true) {
        options[2] = true;
    }
    if (numbers === true) {
        options[3] = true;
    }

    if (options[0] === false && options[1] === false && options[2] === false && options[3] === false) {
        alert("You password must include at least one of the four character options.");
        return getInfo();
    }
    else {
        return options; 
    }
}

//takes in user provided info to generate a random password
function performLogic(numChar,options) {
    //an empty array that password values are appended to
    var passcode = [];
    //a default false array that is updated when a specific character type is added, to be compared to the desired character types in the option array
    var verifier = [false,false,false,false];
    //chooses a number 0-3 for each desired character in the password
    //calls the specific character generator function corresponding to the randomly generated number and appends to passcode array
    //if a particular character is not desired, the iteration does not count and the loop continues to run (else {i=i-1})
    for (i = 0; i < numChar; i++) {
        let num = Math.floor(Math.random() * 4);
        if (num === 0) {
            if (options[0] === true) {
                passcode.push( generateSpecial() );
                verifier[0] = true;
                console.log(verifier);
                console.log(passcode);
            }
            else {
                i = i - 1;
            }
        }
        if (num === 1) {
            if (options[1] === true) {
                passcode.push( generateLower() );
                verifier[1] = true;
                console.log(verifier);
                console.log(passcode);
            }
            else {
                i = i - 1;
            }
        }
        if (num === 2) {
            if (options[2] === true) {
                passcode.push( generateUpper() );
                verifier[2] = true;
                console.log(verifier);
                console.log(passcode);
            }
            else {
                i = i - 1;
            }
        }
        if (num === 3) {
            if (options[3] === true) {
                passcode.push( generateNumber() );
                verifier[3] = true;
                console.log(verifier);
                console.log(passcode);
            }
            else {
                i = i - 1;
            }
        }
    }
    console.log(verifier + " " + options);

    //the options array is compared to the verifier array to check for equivalence
    //if the arrays are not equal, that indicates that despite the user asking for a particular character type, by random chance, that character type did not appear initially
    //this is particularly important for low number character passcodes, as there is a non-negligible chance of a particular character type of four not appearing in say, and 8 digit password
    //if the arrays are not equivalent, the function is run again until an acceptable password is generated
    if (verify(verifier, options) === true) {
        var password = passcode.join(""); 
        return password;
    }
    else {
        return performLogic(numChar,options);
    }
}

//used to compare the desired character array to the generated character types array
function verify(verifier, options) {
    if (verifier.join("") === options.join("")) {
        return true;
        console.log("test true");
    }
    else {
        console.log("test false");
        return false;
    }
}

// The generatePassword function activates when writePassword runs, which happens after the generate button is clicked
function generatePassword() {
    //assigns the result of getLength to numChar, which is a seperate function to obtain the desired number of characters
    var numChar = getLength();

    //assigns the result of getInfo to options, which creates an array representing the desired character types
    var options = getInfo();
    console.log(options);
    
    //passes the user provided information into a function that randomly generates a password
    var password = performLogic(numChar, options);
    return password;
    
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
