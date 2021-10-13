function lab03() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declarations
    var num1;
    var sayWhat;

    // Variable Assignment
    num1 = prompt("Enter a number: ");

    // Validation
    if (!isNumeric(num1)) {
        alert("You did not enter a number, please try again.");
    } else {
        num1 = Number(num1);
    }

    // Calculations & Logic & Output 
    if (num1 > 100) {
        document.write(num1 + " is Too Big!");
    }

    if (num1 < 100) {
        document.write(num1 + " is Too Little!");
    }

    if (num1 === 100) {
        document.write(num1 + " is Just Right!");
    }
}