// Assignment Code

//  #generate referes to the button's ID on line 38 of HTML
//  document.querySelector() returns the first element within the document that matches the selector inside the argument
//  So this line below  is assigning the <button> element on line 38 of the HTML to the variable generateBtn
let generateBtn = document.querySelector("#generate");

let passwordLength = 0;
let lowercase = false;
let uppercase = false;
let numeric = false;
let special = false;



//  Next prompt user for other criteria, lowercase, uppercase, numeric, specials.

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
	

//  Function that creates the new password.  Is called upon click of the big red button.
function generatePassword() {

	passwordLength = validatePasswordLength(validateIsANumber(prompt("Enter number of characters in new password (min 8 max 128)")));
	lowercase = includeLowercase();
	uppercase = includeUppercase();
	numeric = includeNumeric();

	consolePrintout();

	
}

//  Function validates that the input for character length is actually a number
function validateIsANumber(isThisANumber) {

	//  Number() won't say a blank space is a NaN but parseInt() does.
	//  ParseInt won't say any string starting with a number is a NaN Number() does 
	//              ie: "9 apples" or "30 years"
	//  Both are used to keep any old string with a number at the beginning and blank spaces from
	//  slipping by.

	while(isNaN(parseInt(isThisANumber)) || isNaN(Number(isThisANumber))) {

		alert("Password length must be a number");

		isThisANumber = prompt("Enter number of characters in new password (min 8 max 128)");

	}

	let numberForSure = isThisANumber;
	return numberForSure;

}

//********************************************************************************
//********************************************************************************
//*****  TASK:  Get the number of characters the password should contain.    *****
//*****  if number is less than 8 or greater than 128 throw error and give   *****
//*****  another prompt    **COMPLETE**                                      *****
//********************************************************************************
//********************************************************************************

//  Function validates that password length lies in range 8-128
function validatePasswordLength(length) {
	
	//  Nested loop recurrs if length lies outside range 8-128
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

function consolePrintout() {

	console.log("passwordLength is = " + passwordLength);
	console.log("lowercase is = " + lowercase);
	console.log("uppercase is = " + uppercase);
	console.log("numeric is = " + numeric);
	console.log("special is = " + special);

}