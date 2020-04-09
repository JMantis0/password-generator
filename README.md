# Password Generator with JavaScript

The goal of this project is to create an application that generates a random password based on user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS powered JavaScript, and has a responsive user-interface.  The app is compliant with the following acceptance criteria:

 GIVEN I need a new, secure password
*  WHEN I click the button to generate a password
* * THEN I am presented with a series of prompts for password criteria
* WHEN prompted for password criteria
* * THEN I select which criteria to include in the password
* WHEN prompted for the length of the password
* * THEN I choose a length of at least 8 characters and no more than 128 characters
* WHEN prompted for character types to include in the password
* * THEN I choose lowercase, uppercase, numeric, and/or special characters
* WHEN I answer each prompt
* * THEN my input should be validated and at least one character type should be selected
* WHEN all prompts are answered
* * THEN a password is generated that matches the selected criteria
* WHEN the password is generated
* * THEN the password is either displayed in an alert or written to the page

## Progress

1) 4/7/2020 

* The first task I completed is to write code that collects the number of characters the user wishes his/her new password to be, and to throw an error and let the user retry if the number does not meet acceptance criteria (at least 8, max 128).

2) 4/8/2020

* Added comments to js to help explain to myself what code is doing

* Created `function validatePassWordLength` and placed code created in progress section 1 into its block.
* Created `function validateIsANumber` which validates that user input is actually a number.
* Placed function calls within existing `function generatePassword()`

3) 4/9/2020

* Added variable initialization set to hold booleans variables (representing which types of characters to include in password) and password length (`length`, `lowercase`, `uppercase`, `numeric`, and `special`).

* Created functions to gather desired criteria from user `confirmUppercase()`, `confirmLowercase()`, `confirmNumeric()`, `confirmSpecial()`.

4) 4/9/2020

* Created function `selectCharacters()` which calls critera-gathering functions for character types and utilizes an if/then within a while-loop to ensure the user includes at least one character type.

* Updated comments throughtout script.js