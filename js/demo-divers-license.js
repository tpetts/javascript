function driversLicense() {
    "use strict";
    // Award Driver's License

    //Declare constants
    const MINIMUM_AGE = 16;

    // Declare variables
    var ageEntry;
    var age;
    var writtenExamResults;
    var behindTheWheelExamResults;

    // Get data from user
    ageEntry = prompt( "Enter the applicant's age." );

    // Convert the age to a number
    if ( isNumeric( ageEntry ) ) {
        age = Number( ageEntry );
    } else {
        alert( "Entered age was not numeric" );
        return;
    }

    writtenExamResults = prompt( "Did applicant pass the written exam? Y/N" );
    behindTheWheelExamResults = prompt( "Did applicant pass the behind" +
        "-the-wheel exam? Y/N" );



    // Determine if the applicant gets their license
    if ( age >= MINIMUM_AGE && writtenExamResults === "Y" &&
        behindTheWheelExamResults === "Y" ) {

        document.write( "Congratulations, here's your driver's license!" );
    } else {
        document.write(
            "We're sorry, you didn't pass. Please retake the test " +
            "again in 30 days." );
    }

}