// This function will display a heading
function outputHeading() {
    document.write("A Exams");
}

// This function opens my table
function outputTableStart() {
    document.write("<table>");
}

// This function closes my table
function outputTableEnd() {
    document.write("</table>");
}

// This function will display my table heading
function outputTableHeading() {
    document.write("<tr><th>Student Name</th><th>Exam Score</th></tr>");
}

function part03() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    const GRADE_A = 90;
    var currentName;
    var currentScore;
    var studentRecords;
    var totalStudents = 0;
    var totalAStudents = 0;

    // Open the Student Enrollment Records and make them
    // available to the script
    studentRecords = openStudentExamRecords();

    //output a header with field names
    outputHeading();
    outputTableStart();
    outputTableHeading();

    // Read the next record, test to see if there
    // is a next record and then output it

    while (studentRecords.readNextRecord()) {
        currentName = studentRecords.getStudentName();
        currentScore = studentRecords.getStudentScore();
        if (currentScore >= GRADE_A) {
            document.write(
                `<tr><td>${currentName}</td><td>${currentScore}</td></tr>`);
            totalAStudents++;
        }
        totalStudents++;
        //document.write(currentName + "\t" + currentScore + "<br />");
    }

    outputTableEnd();
    document.write(`<br />Total Count of A Students: ${totalAStudents} <br />`);
    document.write(`Total Students: ${totalStudents}`);
}
