/* *******************************************************************************
			***************************************************
**********************************************************************************
********  --  P  A  S  S  W  O  R  D  ---  G  E  N  E  R  A  T  O  R  --  ********
**********************************************************************************
			****************  By: Jesse Mazur  ****************
********************************************************************************** */

let passwordLength = 0;  // Variable controls length of password to be generated.

let lowercase = true;	// These variables control whether or not to include
let uppercase = true;	// character type indicated by the variable name.
let numeric = true;		// If true, the type is included.
let special = true;		// If false, the type is excluded.
let pool = [];			// Array that password characters are randomly selected from.
let password = "";		// Variable for the password.

// Arrays of potential password characters.
let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numericArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialArr = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

let generateBtn = document.querySelector("#generate"); // API assigns HTML button.
generateBtn.addEventListener("click", writePassword);	// Adds listener to button.

// Function writePassword() calls collectCriteria(), assemblePassword(), places
// password in HTML element. Called upon click of the generateBtn.
function writePassword() {

	collectCriteria();
	assemblePassword();
	let passwordText = document.querySelector("#password");
	passwordText.value = password;

}

// Function collectCriteria() calls functions that collect password criteria.
function collectCriteria() {

	passwordLength = validatePasswordLength(validateIsANumber(prompt("Enter number of characters in new password (min 8 max 128)")));
	selectCharacters();
	
}

// Function validateIsANumber tests whether user input is actually a number.
// Logic prompts user to enter new character length if entry is not a number.
function validateIsANumber(isThisANumber) {

	while (isNaN(parseInt(isThisANumber)) || isNaN(Number(isThisANumber))) {

		alert("Password length must be a number");
		isThisANumber = prompt("Enter number of characters in new password (min 8 max 128)");

	}

	let numberForSure = isThisANumber;
	return numberForSure;

}

// Function validatesPasswordLength() tests whether length lies in range 8-128.
// Logic prompts User to enter a new length if it lies outside range 8-128.
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

// Function selectCharacters() calls 'include' functions from within while-loop.
// Logic requires user to confirm at least one character type.
function selectCharacters() {

	let noneSelected = true;
	while (noneSelected) {

		lowercase = includeLowercase();
		uppercase = includeUppercase();
		numeric = includeNumeric();
		special = includeSpecial();

		if (!lowercase && !uppercase && !numeric && !special) {

			alert("You must include at least one character type.");

		}
		else {

			noneSelected = false;

		}

	}

}

// The following 4 'include' functions prompt user to choose the 
// types of characters to be included in the password.
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

// Function assemblePassword() creates a pool array of characters according
// to the criteria input by user. A for-loop concatenates the password from pool.
// Then logic checks the password for each character type to be included.
// If the check fails to find such character types a new password is generated. 
function assemblePassword() {

	let passwordComplete = false;

	while(!passwordComplete) {

		pool = [];
		password = "";

		if (uppercase) {
			pool = pool.concat(upperArr);
		}
		if (lowercase) {
			pool = pool.concat(lowerArr);
		}
		if (numeric) {
			pool = pool.concat(numericArr);
		}
		if (special) {
			pool = pool.concat(specialArr);
		}

		for (let i = 0; i < passwordLength; i++) {
			password = password + pool[Math.floor(Math.random() * pool.length)];
		}

		let noUpper = false;
		if (uppercase) {
			noUpper = true;
			for (i = 0; i < upperArr.length && noUpper; i++) {

				if (password.includes(upperArr[i])) {

					noUpper = false;
					break;			

				}
				
			}

		}

		let noLower = false;
		if (lowercase) {
			noLower = true;
			for (i = 0; i < lowerArr.length && noLower; i++) {

				if (password.includes(lowerArr[i])) {

					noLower = false;			
					break;
				}

			}

		}

		let noNumeric = false;
		if (numeric) {
			noNumeric = true;
			for (i = 0; i < numericArr.length && noNumeric; i++) {

				if (password.includes(numericArr[i])) {

					noNumeric = false;	
					break;		

				}

			}

		}

		let noSpecial = false;
		if (special) {
			noSpecial = true;
			for (i = 0; i < specialArr.length && noSpecial; i++) {

				if (password.includes(specialArr[i])) {

					noSpecial = false;
					break;	

				}

			}

		}
		
		if(!noUpper && !noLower && !noNumeric && !noSpecial) {

			passwordComplete = true;
			
		}

	}

}