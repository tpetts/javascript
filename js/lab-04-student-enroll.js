function lab04() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    // Open the Student Enrollments Record Set
    // and make the first row available
    var currentStudentNumber;
    var currentName;
    var currentCourseNumber;
    var currentAddress;
    var currentZipCode;
    var currentGender;
    var totalStudents;
    var records = openStudentEnrollmentRecords();
    totalStudents = 0;


    // Start HTML table
    document.write("<table>");

    while (records.readNextRecord()) {

        // get the course number of the current record
        // for checking if it is a targeted record
        currentCourseNumber = records.getStudentCourseNumber();

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
        document.write("<tr><td>" + currentStudentNumber + "</td><td>" +
            currentName + "</td></tr>");
        /*
        document.write("<tr><td>" +
            currentStudentNumber +
            "</td><td>" +
            currentName +
            "</td><td>" +
            currentAddress +
            "</td><td>" +
            currentZipCode +
            "</td><td>" +
            currentGender +
            "</td></tr>");
            */
    }

}