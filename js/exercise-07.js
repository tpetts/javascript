function exercise07Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:
    const FINAL_NUMBER = 1000;
    var num1;
    var finalTotal = 0;

    while (finalTotal <= FINAL_NUMBER) {
        num1 = Number(prompt("Enter a number: "));
        finalTotal += num1;
        document.write(
            "Entered Number: " + num1 + ", Current Total: " + finalTotal +
            "<br />"
        );
    }

    document.write("<br />");
    document.write("Final Total: " + finalTotal);
}

function exercise07Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:
    // Constant Declaration
    const ZERO = 0;

    // Variable Declaration
    var number;
    var even;



    // Variable Assignment
    number = prompt("Give me a number: ");
    even = number % 2;


    // if & Validation
    if (!isNumeric(number)) {
        alert("That's not a number! Please try again: ");
    } else {
        number = Number(number);
    }

    if (even === ZERO) {
        document.write(number + " is an even number.");
    } else {
        document.write(number + " isn't an even number.");
    }

}