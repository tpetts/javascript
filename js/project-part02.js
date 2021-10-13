const TAX_AMOUNT = 0.15;
const HOURLY_WAGE_RATE = 1.5;
const HOURS_WORKED = 35;

// This function displays the employee's pay
function displayEmployeePay(hoursWorked, grossPay, withholdingAmount, netPay) {
    document.write("Hours Worked: " + hoursWorked + "<br />");
    document.write("Gross Pay: $" + grossPay.toFixed(2) + "<br />");
    document.write("Withholding Amount: $" + withholdingAmount.toFixed(2) +
        "<br />");
    document.write("Net Pay: $" + netPay.toFixed(2) + "<br />");
}

// This function displays the employee's profile (name, number, wage rate)
function displayEmployeeProfile(employeeNumber, employeeName, hourlyWageRate) {
    document.write("Employee Number: " + employeeNumber + "<br />");
    document.write("Employee Name: " + employeeName + "<br />");
    document.write("Hourly Wage: " + hourlyWageRate + "<br />");
}

// This function calculates the employee's gross pay
function calculateGrossPay(hoursWorked, hourlyWageRate) {
    var grossPay;
    if (hoursWorked <= HOURS_WORKED) {
        grossPay = hourlyWageRate * hoursWorked;
    } else {
        grossPay = (hourlyWageRate * HOURS_WORKED) + ((hoursWorked -
                HOURS_WORKED) *
            hourlyWageRate * HOURLY_WAGE_RATE);
    }
    return grossPay;
}

// This function prints the totals for gross, net, and average pay
function printTotals(totalNetPay, totalGrossPay, averageNetPay) {
    document.write("Total Net Pay Amount : $" + totalNetPay.toFixed(2) +
        "<br />");
    document.write("Total Gross Pay Amount : $" + totalGrossPay.toFixed(2) +
        "<br />");
    document.write("Total Average Net Pay: $" + averageNetPay.toFixed(2));
}

// This function is the main function
function part02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    var records;
    records = openEmployeePayrollRecords();

    var employeeNumber;
    var employeeName;
    var hourlyWageRate;
    var hoursWorked;
    var grossPay = 0;
    var averageNetPay = 0;
    var totalNetPay = 0;
    var totalGrossPay = 0;
    var netPay = 0;
    var withholdingAmount = 0;

    while (records.readNextRecord()) {
        employeeNumber = records.getEmployeeNumber();
        employeeName = records.getEmployeeName();
        hourlyWageRate = records.getEmployeeHourlyWage();
        hoursWorked = records.getEmployeeHoursWorked();

        grossPay = calculateGrossPay(hoursWorked, hourlyWageRate);

        withholdingAmount = grossPay * TAX_AMOUNT;
        netPay = grossPay - withholdingAmount;
        totalNetPay += netPay;
        totalGrossPay += grossPay;
        averageNetPay = totalGrossPay - totalNetPay;

        displayEmployeeProfile(employeeNumber, employeeName, hourlyWageRate);

        displayEmployeePay(hoursWorked, grossPay, withholdingAmount, netPay);

        document.write("*************************************<br />");

    }
    printTotals(totalNetPay, totalGrossPay, averageNetPay);

}