function exercise06Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:

    // Constant Declaration
    const ONE = 1;
    const HALF = 2;
    const QUARTER = 4;
    const LAST_NUMBER = 50;

    // Variable Declaration
    var half;
    var quarter;
    var firstNumber;
    var lastNumber;

    // Logic & Processing
    for (firstNumber = ONE; firstNumber <= LAST_NUMBER; firstNumber++) {
        half = firstNumber / HALF;
        quarter = firstNumber / QUARTER;
        document.write(firstNumber + ", " + half + ", " + quarter + "<br />");

    }
}

function exercise06Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:
    // Constant Declarations
    const ONE = 1;

    // Variable Declarations
    var num1;
    var num2;
    var newTotal;

    // Assignment
    num1 = prompt("Enter a number: ");
    newTotal = ONE;

    // Validation Check01
    if (isNumeric(num1)) {
        num1 = Number(num1);
    } else {
        alert("That's not a number! Let's try that again...");
        return;
    }
    // Assignment
    num2 = prompt("Now give me a bigger number: ");

    // Validation Check02
    if (!isNumeric(num2)) {
        alert("That's not a number! Let's try that again...");
    } else if (num2 < num1) {
        alert("That number isn't bigger than the first number...try again.");
    } else {
        num2 = Number(num2);
    }

    // fun stuff
    for (var number = num1; number <= num2; number += ONE) {
        if (number !== num1) {
            document.write(" * ");
        }
        newTotal *= number;
        document.write(number);
    }
    document.write(" = " + newTotal);
}