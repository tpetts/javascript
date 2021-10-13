function lab08() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration
    var myCount;
    var dayOfMonth;
    var randomYear;
    var loopCounter;
    var whatAmIOne;
    var whatAmITwo;
    var whatAmIThree;

    // Variable Assignments
    myCount = 10; //unaryOperator
    dayOfMonth = 21; //unaryOperator
    randomYear = 2009; //unaryOperator
    loopCounter = 0; //unaryOperator
    whatAmIOne = "this is just a test"; //typeof
    whatAmITwo = 25; //typeof
    whatAmIThree = ( 5 >= "5" ); //typeof

    // Calculations
    myCount++;
    dayOfMonth--;
    randomYear -= 3;
    loopCounter++;

    typeof( whatAmIOne );
    typeof( whatAmITwo );
    typeof( whatAmIThree );

    // Write it Out
    document.write( "adding 1 to myCount: " + myCount );
    document.write( "<br />" );
    document.write( "subtracting 1 from dayOfMonth: " + dayOfMonth );
    document.write( "<br />" );
    document.write( "subtracting 3 from randomYear: " + randomYear );
    document.write( "<br />" );
    document.write( "adding 1 to loopCounter: " + loopCounter++ );
    document.write( "<br />" );
    document.write( "whatAmIOne is a " + '"' + typeof( whatAmIOne ) + '"' );
    document.write( "<br />" );
    document.write( "whatAmITwo is a " + '"' + typeof( whatAmITwo ) + '"' );
    document.write( "<br />" );
    document.write( "whatAmIThree is a " + '"' + typeof( whatAmIThree ) + '"' );
}