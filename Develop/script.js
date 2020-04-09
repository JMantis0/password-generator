let generateBtn = document.querySelector("#generate");

let passwordLength = 0;
let lowercase = true;
let uppercase = true;
let numeric = true;
let special = true;
let noneSelected = true;
let pool = [];
let password = "";

let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numericArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialArr = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

//  Following 4 functions prompt user to choose the types of characters
//  to be included in the password:
function includeLowercase() {

	let confirmLowercase = confirm("Click OK to include lowercase characters.  Otherwise, click Cancel.");
	return confirmLowercase;

}

function includeUppercase() {

	let confirmUppercase = confirm("Click OK to include uppercase characters.  Otherwise, click Cancel.");
	return confirmUppercase;

}

function includeNumeric() {

	let confirmNumeric = confirm("Click OK to include numeric characters.  Otherwise, click Cancel.");
	return confirmNumeric;

}

function includeSpecial() {
	
	let confirmSpecial = confirm("Click OK to include special characters.  Otherwise, click Cancel");
	return confirmSpecial;
}

//  Function selectCharacters() calls above functions from within while-loop.
//  Logic causes while-loop to recur unless user confirms at least one character type
function selectCharacters() {

	while(noneSelected) {
	
		lowercase = includeLowercase();
		uppercase = includeUppercase();
		numeric = includeNumeric();
		special = includeSpecial();

		if(!lowercase && !uppercase && !numeric && !special) {

			alert("You must include at least one character type.");

		}
		else {

			noneSelected = false;

		}

	}

}

//  Function assemblePassword resets pool array and password string.
//  Logic adds characters to pool array according to criteria input of user
//  For loop assembles password.
function assemblePassword() {

	pool = [];
	password = "";

	if(uppercase) {
		pool = pool.concat(upperArr);
	}
	if(lowercase) {
		pool = pool.concat(lowerArr);
	}
	if(numeric) {
		pool = pool.concat(numericArr);
	}
	if(special) {
		pool = pool.concat(specialArr);
	}

	for(let i = 0; i < passwordLength; i++) {
		password = password + pool[Math.floor(Math.random() * pool.length)];
	}

}
	

//  Function generatePassword creates the new password.  Is called upon click of the big red button.
function generatePassword() {

	noneSelected = true;
	passwordLength = validatePasswordLength(validateIsANumber(prompt("Enter number of characters in new password (min 8 max 128)")));
	selectCharacters();
	assemblePassword();
	consolePrintout();

	
}

//  Function validateIsANumber tests whether user input is actually a number
//  Logic prompts user to enter new character length if entry is not a number
function validateIsANumber(isThisANumber) {

	//  Number() won't say a blank space is a NaN but parseInt() does.
	//  ParseInt() won't say any string starting with a number is a NaN Number() does 
	//              ie: "9 apples" or "30 years"
	//  Logic uses both together to prevent a non-numeric string starting with a number 
	//  or a blank space from being allowed as a password length.
	while(isNaN(parseInt(isThisANumber)) || isNaN(Number(isThisANumber))) {

		alert("Password length must be a number");

		isThisANumber = prompt("Enter number of characters in new password (min 8 max 128)");

	}

	let numberForSure = isThisANumber;
	return numberForSure;

}

//  Function validatesPasswordLength() tests whether length lies in range 8-128
//  Logic prompts User to enter a new length if it lies outsite range 8-128
function validatePasswordLength(length) {
	
	while (length < 8 || length > 128) {

		if (length < 8) {

			alert("Password must be at least 8 characters.");
			length = validateIsANumber(prompt("Enter number of characters in new password (min 8 max 128)"));

		}
		else if (length > 128) {

			alert("Password must be less than 128 characters.");
			length = validateIsANumber(prompt("Enter number of characters in new password (min 8 max 128)"));

		}

	}
	
	return length;

}

// Write password to the #password input
function writePassword() {

	let password = generatePassword();
	//  similar to the querySelector on line 6, line 48 assigns the <text> element on line 32 of the HTML to variable passwordText
	let passwordText = document.querySelector("#password");

	passwordText.value = password;

}

// Add event listener to generate button
// Remember above we assigned the HTML button on line 38 of the HTML to variable generateBtn
// This line below makes it so when that button is clicked, the writePassword() function is called
generateBtn.addEventListener("click", writePassword);


// Function consolePrintout() assists developer in testing and debugging
function consolePrintout() {

	console.log("passwordLength is = " + passwordLength);
	console.log("lowercase is = " + lowercase);
	console.log("uppercase is = " + uppercase);
	console.log("numeric is = " + numeric);
	console.log("special is = " + special);
	console.log("noneSelected is = " + noneSelected);

}