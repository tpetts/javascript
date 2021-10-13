function lab07Part01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Is 5 less than 5; false
    document.write( "(5 < 5)" + ( 5 < 5 ) );
    document.write( "<br />" );
    // Is 100 greater than 10; true
    document.write( "(100 > 10)" + ( 100 > 10 ) );
    document.write( "<br />" );
    // Is "ten" less than "twelve"; true
    document.write( "(\"ten\" < \"twelve\")" + ( "ten" < "twelve" ) );
    document.write( "<br />" );
    // Is "ten" less than "eleven"; false
    document.write( "(\"ten\" < \"eleven\")" + ( "ten" < "eleven" ) );
    document.write( "<br />" );
    // Is 100 less than or equal to 101; true
    document.write( "(100 <= 101)" + ( 100 <= 101 ) );
    document.write( "<br />" );
    // Is "2" less than or equal to 5; true
    document.write( "(\"2\" <= 5)" + ( "2" <= 5 ) );
    document.write( "<br />" );
    // Is 1997 greater than or equal to 1997; true
    document.write( "(1997 >= 1997)" + ( 1997 >= 1997 ) );

}

function lab07Part02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Declare variables
    var results1;
    var results2;
    var results3;
    var results4;
    var results5;
    var results6;
    var results7;
    var results8;

    // Uncomment the below lines calculate boolean results to match the boolean value on the right side
    // The first one is done for you

    results1 = 5 >= 5; // true
    results2 = 5 < 5; // false
    results3 = "a" < "b"; // true
    results4 = 100 > 99; // false
    results5 = "100" >= 100; // true
    results6 = 0 <= 10; // false
    results7 = "100" >= "99"; // true
    results8 = "A" <= 92; // false

    // Output boolean results
    document.write( "(5 >= 5) --> " + results1 );
    document.write( "<br />" );
    document.write( "(5 < 5) --> " + results2 );
    document.write( "<br />" );
    document.write( "('a' < 'b') --> " + results3 );
    document.write( "<br />" );
    document.write( "(100 > 99) --> " + results4 );
    document.write( "<br />" );
    document.write( "('100' >= 100) --> " + results5 );
    document.write( "<br />" );
    document.write( "(0 <= 10) --> " + results6 );
    document.write( "<br />" );
    document.write( "('100' >= '99') --> " + results7 );
    document.write( "<br />" );
    document.write( "('A' <= 92) --> " + results8 );

}