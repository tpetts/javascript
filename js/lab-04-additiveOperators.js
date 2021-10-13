function lab04() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Declaring Variables
    var addTotal;
    var subtractTotal;
    var total;
    var numberOne;
    var numberTwo;
    var numberThree;
    var numberFour;

    // Variable Assignments
    numberOne = prompt( "Enter a number: " );
    numberTwo = prompt( "Enter another number: " );
    numberThree = prompt( "Enter a number again: " );
    numberFour = prompt( "Enter the last number: " );
    numberOne = Number( numberOne );
    numberTwo = Number( numberTwo );
    numberThree = Number( numberThree );
    numberFour = Number( numberFour );

    // Calculations
    addTotal = numberOne + numberTwo;
    subtractTotal = numberFour - numberThree;
    total = addTotal + subtractTotal;

    // Writing it out
    document.write( "addTotal: " + addTotal );
    document.write( "<br />" );
    document.write( "subtractTotal: " + subtractTotal );
    document.write( "<br />" );
    document.write( "<br />" );
    document.write( "total: " + total );
}