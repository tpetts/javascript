function lab09() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    var myNumber;
    var mySalary;
    var year;
    var loopCounter;
    var numberOfCats;
    var numberOfDogs;
    var numberOfFish;

    // Assign values to the variables
    myNumber = 200;
    mySalary = 40000.00;
    year = 2008;
    loopCounter = 0;
    // numberOfCats is just left with nothing in it
    numberOfDogs = "";
    numberOfFish = " ";

    // Apply compound operators and display results, each on their own line.

    // Writing it Out

    // Display myNumber variable on the page
    document.write( "My Number: " + myNumber + "<br />" );

    // Add 25 to myNumber
    myNumber += 25;

    // Subtract 75 from myNumber
    myNumber -= 75;

    // Display the myNumber variable on the page
    document.write( "My Number Variable: " + myNumber + "<br />" );

    // Give yourself a 10% raise-multiply your salary by 1.1
    mySalary *= 1.1;

    // Display the mySalary variable on the page
    document.write( "My Salary Variable: " + mySalary + "<br />" );

    // 2008 is a leap year, when is the next one?
    year += 4;

    // Display the year variable on the page
    document.write( "Year Variable: " + year + "<br />" );

    // Add five to the loopCounter
    loopCounter += 5;

    // Display the loopCounter Variable on the page
    document.write( "Loop Counter Variable: " + loopCounter + "<br />" );

    // Add five to the numberOfCats
    numberOfCats += 5;

    // Display the numberOfCats variable on the page
    document.write( "Number Of Cats: " + numberOfCats + "<br />" );

    // Add five to the numberOfDogs
    numberOfDogs += 5;

    // Display the numberOfDogs variable to the page
    document.write( "Number Of Dogs: " + numberOfDogs + "<br />" );

    // Add five to the numberOfFish
    numberOfFish += 5;

    // Display the numberOfFish variable on the page
    document.write( "Number Of Fish: " + numberOfFish );

}