function lab01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Constant Declaration
    const INITIAL_LOOP_VALUE = 0;
    const LOOP_MAX = 5;

    // Variable Assignments
    var loopCounter = INITIAL_LOOP_VALUE;

    // Logic & Looping
    while (loopCounter != LOOP_MAX) {
        var userEnteredValue = prompt("Enter a word: ");
        document.write("You entered: " + userEnteredValue);
        document.write("<br />");
        loopCounter++;
    }

}
