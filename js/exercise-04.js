function exercise04Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration
    var uno;
    var dos;

    // Variable Assignment
    uno = prompt("Enter a number: ");
    dos = prompt("Enter another number: ");
    uno = Number(uno);
    dos = Number(dos);

    // Logic Statements
    if (uno < dos) {
        document.write(uno + " is less than " + dos);
    } else {
        document.write(uno + " is greater than or equal to " + dos);
    }

}

function exercise04Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration
    var elNombre;

    // Variable Assignment
    elNombre = prompt("Enter a name: ");

    // Logic & Output statements
    if (elNombre == "Tia") {
        document.write("That's my name!");
    } else {
        document.write("That's not my name!");
    }


}