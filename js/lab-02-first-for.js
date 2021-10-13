function lab02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Constant Declaration & Assignments
    const LOOP_MAXIMUM = 5;
    const INITIAL_LOOP_VALUE = 0;

    // Variable Declaration & Assignments
    var loopCounter = INITIAL_LOOP_VALUE;
    var userEnteredValue;

    // Logic & Looping
    for (loopCounter = INITIAL_LOOP_VALUE; loopCounter < LOOP_MAXIMUM; loopCounter++) {
       userEnteredValue = prompt("Enter a Value: ");
        document.write("You entered: " + userEnteredValue);
        document.write("<br />");
    }

}
