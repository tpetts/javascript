function lab05() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Declarations
    const LOW = 1;
    const HIGH = 100;

    // Variable Declarations
    var num1;
    var message;

    // Variable Assignments
    num1 = prompt("Enter a number between 1 and 100: ");

    // Validation
    if (!isNumeric(num1)) {
        return ("You did not enter a number.");
    } else {
        num1 = Number(num1);
    }

    // Logic Section
    if (num1 > LOW && num1 < HIGH) {
        document.write("Hoozah! Success! The number " + num1 +
            " is in the right range!");
    } else {
        document.write("The number " + num1 +
            " is out of range, please try again.");
    }
}