function lab07() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    // Constant Declarations
    const ZERO = 0;

    // Variable Declaration
    var initialNumber;
    var input1;
    var input2;

    // Variable Assignment
    initialNumber = ZERO;
    input1 = prompt("Enter a number: ");

    // Validation
    if (isNumeric(input1)) {
        input1 = Number(input1);
    } else {
        alert("That's not a number! Try again.");
    }

    // Logic & Processing
    while (input1 > initialNumber) {
        initialNumber = input1;
        input1 = prompt("Enter a number: ");

        if (input2 > input1) {
            document.write(input1 + " is smaller than " + input2 + "<br />");
            break;
        } else {
            document.write(input1 + " is bigger than " + initialNumber +
                "<br />");
        }
        input2 = input1;
    }
    document.write("Good Bye!");
}