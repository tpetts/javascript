/*
    The purpose of this function is to run lab 11 part 1
*/
const NUMBER_TIMES_TO_LOOP = 5;
var loopCounter;
var userEnteredSum = 0;

function obtainNumberFromUser() {
    var result = Number(prompt("Enter a number: "));
    return result;
}

function displayNumberOnWebPage(number) {
    document.write("Entered number was: " + number + "<br />");
}

function initializeForLooping() {
    loopCounter = 0;
}

function addPositiveNumberToSum(number) {
    userEnteredSum += number;
}

function displayPositiveNumbersSum() {
    document.write("<br /><br />");
    document.write("Total: " + userEnteredSum);
}

function lab11Part01() {
    "use strict";

    initializeForLooping();
    while (loopCounter < NUMBER_TIMES_TO_LOOP) {
        var userEnteredNumber = obtainNumberFromUser();
        displayNumberOnWebPage(userEnteredNumber);

        if (userEnteredNumber > 0) {
            addPositiveNumberToSum(userEnteredNumber);
        }
        loopCounter++;
    }

    displayPositiveNumbersSum();

}

/*********************************************************
**********************************************************
        Separation comment between Part 1 and Part 2
**********************************************************
*********************************************************/

/*
    The purpose of this function is to run lab 11 part 2
*/

//function assignInitialValuesToVariables() {

//}

function calculateAverageHourlyWage(grandTotalOfAllWages, employeeCount) {
    //document.write("Avg: " + (grandTotalOfAllWages / employeeCount)
    //.toFixed(2));
    return ((grandTotalOfAllWages / employeeCount)
        .toFixed(2));
}

function displayMinimumMaximumAverageHourlyWage(min, max, avg) {
    document.write("Min: " + min);
    document.write("<br />");
    document.write("Max: " + max);
    document.write("<br />");
    document.write("Avg: " + avg);

}

function lab11Part02() {
    "use strict";
    var counter = 0;
    var hourlyWage = 0;
    var grandSumHourlyWages = 0;
    var minimumHourlyWage = 0;
    var maximumHourlyWage = 0;
    var averageHourlyWage = 0;

    //assignInitialValuesToVariables();

    var records = openEmployeePayrollRecords();

    while (records.readNextRecord()) {
        counter++; // counts the employees
        hourlyWage = records
            .getEmployeeHourlyWage(); // find hourly wage for current employee
        grandSumHourlyWages += hourlyWage; // add all employee wages together

        if (hourlyWage < minimumHourlyWage || counter == 1) {
            minimumHourlyWage = hourlyWage;
        }

        // here write the IF to handle max hourly wage
        if (hourlyWage > maximumHourlyWage || counter == 1) {
            maximumHourlyWage = hourlyWage;
        }
    }

    averageHourlyWage = calculateAverageHourlyWage(grandSumHourlyWages,
        counter);
    document.write("<br />");

    displayMinimumMaximumAverageHourlyWage(minimumHourlyWage, maximumHourlyWage,
        averageHourlyWage);

}