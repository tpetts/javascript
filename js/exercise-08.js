function exercise08Part1() {
    "use strict";
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:
    // Constant Declaration
    const TARGET_NUMBER = 1000;

    // Variable Declaration
    var count = 0;
    var evenTotal = 0;
    var oddTotal = 0;

    // Logic & Processing
    while (count < TARGET_NUMBER) {
        if (count % 2 == 0) { // even number
            evenTotal += count;
        } else { // odd number
            oddTotal += count;
        }

        count++;
    }

    document.write("Odd Total: " + oddTotal);
    document.write("<br />");
    document.write("Even Total: " + evenTotal);


}

function exercise08Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:
    const SALARY_CUTOFF = 1000;

    var employeeNumber;
    var employeeName;
    var hourlyWage;
    var hoursWorked;
    var employeePay;
    var records;


    records = openEmployeePayrollRecords();


    while (records.readNextRecord()) {
        employeeNumber = records.getEmployeeNumber();
        employeeName = records.getEmployeeName();
        hourlyWage = records.getEmployeeHourlyWage();
        hoursWorked = records.getEmployeeHoursWorked();
        employeePay = hourlyWage * hoursWorked;

        if (employeePay > SALARY_CUTOFF) {
            document.write(employeeNumber + "\t" + employeeName +
                "\t" + hourlyWage + "\t" + hoursWorked + "\t" + "$" +
                employeePay.toFixed(2) + "<br />");
        }
    }

}