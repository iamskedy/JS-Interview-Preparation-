// What is hoisting and how does it work ?

// JavaScript runs in two phases:
// A: Compilation Phase:
// Variable and function declarations are registered in memory.
// Initializations/Assignments are not executed yet.

// B: Execution Phase:
// Code runs line by line, using the values initialized.
console.log(a);

var a = 1;
console.log(chath());

function chath(){
   console.log("Jai Ho Chhathi Maiya ");
   return("Jai")
} 