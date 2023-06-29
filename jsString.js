// Escape Sequences
let myStr = "FirstLine\n\t\SecondLine\nThirdLine"
/* Code	Output
    \'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \t	tab
    \r	carriage return
    \b	backspace
    \f	form feed */

// Concatenating Strings
const myS = "My name is Vikash " + "Patel.";  
const myN = "Vikash "
myN += "Patel";  
const mySur = "patel";
myN + mySur;

// String length

let nameLength = 0;
const myName = "Vikash Patel";
nameLength = myName.length;
const firstLetter = myName[0];

// for Nth word
let lastWord = myName[myName.length-1];
