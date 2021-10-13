function processProgrammingStudents() {
    "use strict";


    // Declare Constants
    const TARGET_COURSE = 18500;
    const MALE = "M";
    const FEMALE = "F";

    // Declare variables
    var totalFemales;
    var totalMales;
    var totalStudents;
    var currentStudentNumber;
    var currentName;
    var currentAddress;
    var currentZipCode;
    var currentGender;
    var currentCourseNumber;
    var formattedStudentRow;
    var totalRows;
    //var testCounter;  // for testing

    // Assign initial values for variables
    totalFemales = 0;
    totalMales = 0;
    totalStudents = 0;
    //testCounter = 0; // for testing
    

    // Open the Student Enrollments Record Set
    // and make the first row available
    var records = openStudentEnrollmentRecords();

    // Output the report title
    document.write("<h3>Students in Course 18500</h3>");
    
    // Start HTML table
    document.write("<table>");

    while (records.readNextRecord()) {

        // uncomment below to test a sub-set of records
        /* 
        if (testCounter === 5) {
            break;
        }
        testCounter++;
        */

        // get the course number of the current record
        // for checking if it is a targeted record
        currentCourseNumber = records.getStudentCourseNumber();
        
        if (currentCourseNumber === TARGET_COURSE) {

            // increment the total student count
            totalStudents++;

            // get all the data for this student and store
            // it in variables
            currentStudentNumber = records.getStudentNumber();
            currentName = records.getStudentName();
            currentAddress = records.getStudentAddress();
            currentZipCode = records.getStudentZipCode();
            currentGender = records.getStudentGender();

            // output this student
            document.write("<tr><td>"
                    + currentStudentNumber
                    + "</td><td>"
                    + currentName
                    + "</td><td>"
                    + currentAddress
                    + "</td><td>"
                    + currentZipCode
                    + "</td><td>"
                    + currentGender
                    + "</td></tr>");


            // Now check for "F" or "M" in the gender
            // and add to totals
            if (currentGender === FEMALE) {
                totalFemales++;
            } else if (currentGender === MALE) {
                totalMales++;
            }
        }
    }

    // The while loop is done, now print out the totals
    document.write("<tr>"
            + "<td colspan='5'>"
            + "<strong>Total Students:</strong>"
            + totalStudents
            + "</td></tr><tr><td colspan='5'>"
            + "<strong>Females: </strong>"
            + totalFemales
            + "</td></tr><tr><td colspan='5'>"
            + "<strong>Males: </strong>"
            + totalMales
            + "</td></tr>");

    
    //End table
    document.write("</table>");
}
