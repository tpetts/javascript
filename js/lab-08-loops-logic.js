function lab08Part01() {

    // Redo code here
    // Constant Declarations
    const MAX_LOOP = 10;

    // Variable Declarations
    var ask = prompt("Enter a number: ");
    var loopCounter = 0;
    var total = 0;

    while (isNumeric(ask) && loopCounter < MAX_LOOP) {
        total += Number(ask);
        loopCounter++;
        ask = prompt("Enter a number: ");
    }

    document.write("The total Number of loops: " + loopCounter);
    document.write("<br />");
    document.write("The total: " + total);
}



function lab08Part02() {

    // Redo code here
    const WAGE_A = 15;
    const WAGE_B = 20;
    const WAGE_C = 25;
    const WAGE_D = 30;

    var wageCategoryOne = 0;
    var wageCategoryTwo = 0;
    var wageCategoryThree = 0;
    var wageCategoryFour = 0;

    var hourlyWage;
    var records;

    // Open the Employee Payroll Records and make them
    // available to the script
    records = openEmployeePayrollRecords();

    // Read the next record, test to see if there
    // is a next record and then output it
    while (records.readNextRecord()) {
        hourlyWage = records.getEmployeeHourlyWage();
        if (hourlyWage == WAGE_A) {
            wageCategoryOne++;
        } else if (hourlyWage == WAGE_B) {
            wageCategoryTwo++;
        } else if (hourlyWage == WAGE_C) {
            wageCategoryThree++;
        } else {
            wageCategoryFour++;
        }
    }

    document.write("Hourly Wage\tCount");
    document.write("<br />");
    document.write(WAGE_A + " \t\t " + wageCategoryOne);
    document.write("<br />");
    document.write(WAGE_B + " \t\t " + wageCategoryTwo);
    document.write("<br />");
    document.write(WAGE_C + " \t\t " + wageCategoryThree);
    document.write("<br />");
    document.write(WAGE_D + " \t\t " + wageCategoryFour);
}