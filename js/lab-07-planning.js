function lab07() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Declaring the variables
    var numberOne;
    var numberTwo;
    var total;

    // Assigning value to the Variables
    numberOne = prompt("Enter a number: ");
    numberTwo = prompt("Enter another number: ");
    total = Number(numberOne) + Number(numberTwo);

    // Writing it out
    document.write("First Number: " + numberOne);
    document.write("<br />");
    document.write("Second Number: " + numberTwo);
    document.write("<br />");
    document.write("Total: " + total);


}
