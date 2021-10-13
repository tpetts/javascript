function lab06Part01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declarations
    var loopCounter;
    var maximumLoop;
    var total; // not a good variable Name

    // Variable Assignments
    total = 0;
    maximumLoop = Number(prompt("How many times would you like to loop?"));

    // Processing
    for (loopCounter = 1; loopCounter <= maximumLoop; loopCounter++) {
        total += loopCounter;
        document.write("In loop " + loopCounter + " the total is " + total +
            ". <br />");
    }

    // Write it out
    document.write("<br />");
    document.write("The final total is " + total + ".");
}

function lab06Part02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    // Constant Declaration & Assignments
    const ONE = 1;
    const MAXIMUM_LOOP = 100;
    const DIVIDING_NUMBER = 1000;

    // Variable Declarations
    var lineNumber;
    var totalProduct;

    // Assignment & Processing
    for (lineNumber = ONE; lineNumber <= MAXIMUM_LOOP; lineNumber++) {
        totalProduct += lineNumber;
        totalProduct = DIVIDING_NUMBER / lineNumber;
        document.write(DIVIDING_NUMBER + " / " + lineNumber + " = " +
            totalProduct + "<br />");
    }


}