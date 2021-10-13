function exercise05Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:

    // Constant Declaration
    const INITIAL_VALUE = 0;
    const MAX_LOOP_LIMIT = 30;

    // Variable Declaration
    var loopyNumber;
    var squared;
    var cubed;

    // Variable Assignment
    loopyNumber = INITIAL_VALUE;

    // Processing
    while (loopyNumber < MAX_LOOP_LIMIT) {
        loopyNumber++;
        squared = loopyNumber * loopyNumber;
        cubed = loopyNumber * loopyNumber * loopyNumber;
        document.write(loopyNumber + ", " + squared + ", " + cubed + "<br />");
    }
}

function exercise05Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Constant Declarations
    const ZERO = 0;
    const ONE = 1;
    // Variable Declaration
    var smallNumberEntry;
    var smallNumber;
    var bigNumberEntry;
    var bigNumber;
    var totalSum = ZERO;
    var newBigNumber;
    //var tackItOn;

    // Variable Assignment
    smallNumberEntry = prompt("Enter a number: ");


    // Validation Check01
    if (isNumeric(smallNumberEntry)) {
        smallNumber = Number(smallNumberEntry);
    } else {
        alert("That's not a number! Let's try again...");
        return;
    }


    // Variable Assignment
    bigNumberEntry = prompt("Enter a bigger number: ");

    // Validation Check02
    if (!isNumeric(bigNumberEntry)) {
        alert("That's not right! Let's try again...");
        return;
    } else if (bigNumberEntry <= smallNumber) {
        alert(
            "That number is not bigger than the first number. Let's try again."
        );
        return;
    } else {
        bigNumber = Number(bigNumberEntry);
    }

    // Processing
    for (var number = smallNumber; number <= bigNumber; number += ONE) {
        if (totalSum !== ZERO) {
            document.write(" + ");
        }
        totalSum += number;
        document.write(number);
    }
    document.write(" = " + totalSum);

}