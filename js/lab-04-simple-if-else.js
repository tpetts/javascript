function lab04() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    // Variable Declaration
    var string1;
    var string2;
    var sayWhat;

    // Variable Assignment
    string1 = prompt("What's the first word that you're thinking about?");
    string2 = prompt("What's the second word that you're thinking about?");

    // Validation/Logic Statements
    if (string1 === "" || string2 === "") {
        alert("You entered nothing, please try again.")
    } else if (string1 > string2) {
        sayWhat = ("Very good, " + '"' + string1 + '"' + " comes after " +
            '"' + string2 + '".');
    } else if (string1 <= string2) {
        sayWhat = ('"' + string1 + '"' +
            " is the same or does not sort after " + '"' + string2 +
            '". Please try again.')
    }

    // Write it out
    document.write(sayWhat);



}