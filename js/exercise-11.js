function exercise11Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:
    // Constant Declarations
    const GRADE_A = 90;
    const GRADE_B = 80;
    const GRADE_C = 70;
    const GRADE_D = 60;

    // using the open function
    var studentRecords;
    var studentScoreTotal = 0;
    var studentCount = 0;
    var studentCountA = 0;
    var studentCountB = 0;
    var studentCountC = 0;
    var studentCountD = 0;
    var studentCountF = 0;
    var averageScore;

    // Writing out my heading
    document.write("Grade   " + "   Count" + "<br />");


    studentRecords = openStudentExamRecords();
    while (studentRecords.readNextRecord()) {
        studentCount++;
        studentScore = studentRecords.getStudentScore();
        studentScoreTotal += studentScore;
        if (studentScore >= GRADE_A) {
            studentCountA += 1;
        } else if (studentScore >= GRADE_B && studentScore < GRADE_A) {
            studentCountB += 1;
        } else if (studentScore >= GRADE_C && studentScore < GRADE_B) {
            studentCountC += 1;
        } else if (studentScore >= GRADE_D && studentScore < GRADE_C) {
            studentCountD += 1;
        } else {
            studentCountF += 1;
        }
    }
    document.write("A\t" + studentCountA + "<br />");
    document.write("B\t" + studentCountB + "<br />");
    document.write("C\t" + studentCountC + "<br />");
    document.write("D\t" + studentCountD + "<br />");
    document.write("F\t" + studentCountF + "<br />");


    document.write("Average Score: " + (studentScoreTotal / studentCount));
}

function exercise11Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // code for a random number between 1 and 100
    var correctAnswer = Math.floor((Math.random() * 100) + 1);
    var userMessage = "Enter a guess?";


    while (true) {
        var userEnteredNumber = obtainNumberFromUser(userMessage);

        if (userEnteredNumber < correctAnswer) {
            userMessage = "The entered number: " + userEnteredNumber +
                " was too small";
            document.write(userMessage);
            document.write("<br />");
        } else if (userEnteredNumber > correctAnswer) {
            userMessage = "The entered number: " + userEnteredNumber +
                " was too big";
            document.write(userMessage);
            document.write("<br />");
        } else {
            userMessage = "The entered number: " + userEnteredNumber +
                " was correct!";
            document.write(userMessage);
            break;
        }
    }



}

// This function will obtain the numbers from the user
function obtainNumberFromUser(userMessage) {
    var result = Number(prompt(userMessage));
    return result;
}