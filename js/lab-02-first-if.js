function lab02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration
    const LOWER_BOUNDARY = 10;
    var enteredNumber;

    // Variable Assignment
    enteredNumber = prompt("Enter a number greater than 10: ");
    enteredNumber = Number(enteredNumber);

    // Logic Statement
    if (enteredNumber >= LOWER_BOUNDARY) {
        document.write("Entered Number: " + enteredNumber);
    } else {
        alert(
        "ERROR; ENTERED NUMBER IS NOT GREATER THAN 10! Please try again.");
        document.write("Entered Number NOT greater than 10!" + "<br />" +
            "Entered Number: " + enteredNumber);
    }

}