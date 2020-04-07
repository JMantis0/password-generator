// Assignment Code
let generateBtn = document.querySelector("#generate");


//********************************************************************************
//********************************************************************************
//*****  TASK:  Get the number of characters the password should contain.    *****
//*****  if number is less than 8 or greater than 128 throw error and give   *****
//*****  another prompt    **COMPLETE**                                      *****
//********************************************************************************
//********************************************************************************

let passWordLength = prompt("Enter number of characters in new password (min 8 max 128)");

//Nested loop recurrs if passWordLength is not between 7 and 129
while (passWordLength < 8 || passWordLength > 128) {
	
	if(passWordLength < 8) {

		alert("Password must be at least 8 characters.");
		passWordLength = prompt("Enter number of characters in new password (min 8 max 128)");

	}
	else if(passWordLength > 128) {

		alert("Password must be less than 128 characters.");
		passWordLength = prompt("Enter number of characters in new password (min 8 max 128)");

	

}





// Write password to the #password input
function writePassword() {
	
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
