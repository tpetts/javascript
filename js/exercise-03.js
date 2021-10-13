function exercise03Part1() {
    "use strict";
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration
    var num1;
    var num2;

    // Variable Assignment
    num1 = prompt("Give me a number: ");
    num1 = Number(num1);
    num2 = prompt("Let's try a different number: ");
    num2 = Number(num2);

    // Logic statements
    if (isNaN(num1)) {
        document.write("The 1st entry is not a number. Please try again.");
    } else if (isNaN(num2)) {
        document.write("The 2nd entry is not a number. Please try again.");
    } else if (num1 > num2) {
        document.write("The number " + num1 + " is bigger than " + num2 + ".");
    } else {
        document.write("The number " + num1 + " is smaller than " + num2 + ".");
    }

}

function exercise03Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration
    var hola;
    //****var ciao;

    // Variable Assignment
    hola = prompt("Give me a word: ");
    //****ciao = "Hola"; //not sure if i even need the 2nd variable yet
    // Logic statement
    if (hola === "Hello") {
        document.write(hola + "is the right word.");
    } else {
        document.write("Please try again.");
    }


}