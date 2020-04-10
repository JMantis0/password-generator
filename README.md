# Password Generator with JavaScript

The goal of this project is to create an application that generates a random password based on user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS powered JavaScript, and has a responsive user-interface.  

The app displays a simple interface with a single button.
When clicked the user is given several options via prompt on how long the password should be and what types of characters to include:
Password length from 8 to 128 characters
Capital Letters
Lowercase Letters
Numeric Characters
Special Characters

Once all the inputs are collected the program generates and displays a randomly generated password that meets the user's criteria!

## Progress

### 1) 4/7/2020 

* The first task I completed is to write code that collects the number of characters the user wishes his/her new password to be, and to throw an error and let the user retry if the number does not meet acceptance criteria (at least 8, max 128).

### 2) 4/8/2020

* Added comments to js to help explain to myself what code is doing

* Created `function validatePassWordLength` and placed code created in progress section 1 into its block.
* Created `function validateIsANumber` which validates that user input is actually a number.
* Placed function calls within existing `function generatePassword()`

### 3) 4/9/2020

* Added variable initialization set to hold booleans variables (representing which types of characters to include in password) and password length (`length`, `lowercase`, `uppercase`, `numeric`, and `special`).

* Created functions to gather desired criteria from user `confirmUppercase()`, `confirmLowercase()`, `confirmNumeric()`, `confirmSpecial()`.

### 4) 4/9/2020

* Created function `selectCharacters()` which calls critera-gathering functions for character types and utilizes an if/then within a while-loop to ensure the user includes at least one character type.

* Updated comments throughout script.js

### 5) 4/9/2020

* Added Global arrays `upperArr` populated with uppercase characters, `lowerArr` populated with lowercase characters, `numericArr` populated with numeric characters, and `specialArr` populated with special characters.  Also added global array `pool` and global string `password`.

* Added function `assemblePassword();` which uses logic to concatenate global character arrays into `pool` according to user input, and then selects elements from `pool` via randomized indexes within a for-loop to generate `password`.

### 6) 4/10/2020

* Added logic to function `assemblePassword()` to ensure that the password printed contains at least one of each character type selected by the user.

* Renamed function `generatePassword()` to `selectCriteria()`

* Refreshed comments and ordering of
functions and variables

### 7) 4/10/2020

* Removed `consolePrintout()` function and edited comments

