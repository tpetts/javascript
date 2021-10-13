// counts all of the males in the different zip codes
function countTheBoys(currentGender) {
    if (currentGender === 'M') {
        return 1;
    }
    return 0;
}


// this function counts all of the females in the zip codes
function countTheGirls(currentGender, femaleCount) {
    if (currentGender === 'F') {
        return femaleCount + 1;
    }
    return femaleCount;
}



// displays the totals of all males and females in the different zip codes
function displayTheZipTotal(zipCode, maleCount, femaleCount) {
    document.write(
        `${zipCode}: Males: ${maleCount} Females: ${femaleCount} <br />`
    );
}




function part04() {
    "use strict";
    // YOUR CODE STARTS AFTER THIS LINE:

    //Declare Variables
    var currentZipCode;
    var currentGender;
    var studentRecords;
    var males53711 = 0;
    var females53711 = 0;
    var males53712 = 0;
    var females53712 = 0;
    var males53713 = 0;
    var females53713 = 0;
    var males53714 = 0;
    var females53714 = 0;
    var males53716 = 0;
    var females53716 = 0;
    var totalMales;
    var totalFemales;

    // Open the Student Enrollment Records and make them
    // available to the script
    studentRecords = openStudentEnrollmentRecords();

    // Read the next record, test to see if there
    // is a next record and then output it
    while (studentRecords.readNextRecord()) {
        currentZipCode = studentRecords.getStudentZipCode();
        currentGender = studentRecords.getStudentGender();

        if (currentZipCode === 53711) {
            males53711 += countTheBoys(currentGender);
            females53711 = countTheGirls(currentGender, females53711);
        } else if (currentZipCode === 53712) {
            males53712 = countTheBoys(currentGender, males53712);
            females53712 = countTheGirls(currentGender, females53712);
        } else if (currentZipCode === 53713) {
            males53713 = countTheBoys(currentGender, males53713);
            females53713 = countTheGirls(currentGender, females53713);
        } else if (currentZipCode === 53714) {
            males53714 = countTheBoys(currentGender, males53714);
            females53714 = countTheGirls(currentGender, females53714);
        } else if (currentZipCode === 53716) {
            males53716 = countTheBoys(currentGender, males53716);
            females53716 = countTheGirls(currentGender, females53716);
        }
    }

    displayTheZipTotal('53711', males53711, females53711);
    displayTheZipTotal('53712', males53712, females53712);
    displayTheZipTotal('53713', males53713, females53713);
    displayTheZipTotal('53714', males53714, females53714);
    displayTheZipTotal('53716', males53716, females53716);
    document.write("<br />");

    totalMales = males53711 + males53712 + males53713 + males53714 + males53716;
    totalFemales = females53711 + females53712 + females53713 + females53714 +
        females53716;

    document.write(`Total Males: ${totalMales} <br />`);
    document.write(`Total Females: ${totalFemales}`);

}