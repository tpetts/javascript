function lab02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declarations
    var testVariable;
    var firstName;
    var twentyFive;
    var seventyTwo;
    var ten;
    var lastName;
    var thirty;
    var sum;

    // Variable Assignment
    testVariable = 2;
    firstName = "Fred";
    lastName = "Flintstone";
    twentyFive = "25";
    seventyTwo = "72";
    ten = "10";
    thirty = Number("30");
    sum = (thirty + 7);

    // Output Section
    document.write("Here's a fine error.");
    document.write("<br />");

    document.write('She said, "Hi."');
    document.write("<br />");

    document.write(twentyFive * seventyTwo);
    document.write("<br />");

    document.write(twentyFive * ten); // This one is tricky. What happened?
    document.write("<br />");

    document.write("thirty seven: " + sum);


    // END OF YOUR CODE


}
