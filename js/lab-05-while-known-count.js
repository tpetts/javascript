function lab05Part01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    // Variable Declarations
    var loopCounter;
    var maximumLoop;
    var total;

    // Variable Assignments
    loopCounter = 1;
    total = 0;

    // Starting Coding Here
    maximumLoop = Number(prompt("How many times would you like to loop?"));

    while (loopCounter <= maximumLoop) {
        total += loopCounter;
        document.write("In loop " + loopCounter + " the total is " + total +
            ".<br />");
        loopCounter++;
    }
    document.write("<br />");
    document.write("The final total is " + total + ".");
}

function lab05Part02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable/Constant Declarations
    const LOOP_MAXIMUM = 20;
    const MULTIPLIER = 7;

    var loopCounter;
    var product;

    loopCounter = 1;

    // Looping Section
    while (loopCounter <= LOOP_MAXIMUM) {
        product = loopCounter * MULTIPLIER;
        document.write(MULTIPLIER + " x " + loopCounter + " = " + product +
            "<br />");
        loopCounter++;
    }
}