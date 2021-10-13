function processExamRecords() {
    "use strict";


    // Declare Constants
    var INITIAL_VALUE = 0;

    // Declare variables
    var studentName;
    var studentScore;
    var totalStudents = INITIAL_VALUE;
    var totalScore = INITIAL_VALUE;
    var averageScore;
    var records;

    // Open the Student Exam Record set
    records = openStudentExamRecords();

    // Output heading
    document.write("<h3>Student Exam Records</h3>");
    document.write("<b>Student Name\tExam Score</b><br/>");

    // Loop through the records
    while (records.readNextRecord()) {
        totalStudents++;
        studentName = records.getStudentName();
        studentScore = records.getStudentScore();
        totalScore += studentScore;
        document.write(studentName + ":\t" + studentScore + "<br />");
    }

    // Calculate and print the average if there
    // were students in the record set
    if (totalStudents > INITIAL_VALUE) {
        averageScore = totalScore / totalStudents;
        document.write("<br />The average score is: " + averageScore.toFixed(2));
    }
}
