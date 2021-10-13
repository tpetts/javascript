function exercise02Part1() {
    // PART 1: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration
    var randomNumber;

    // Variable Assignment
    randomNumber = prompt("Enter a number: ");
    randomNumber = Number(randomNumber);

    document.write("The number " + randomNumber + "<br />");


    // Is randomNumber even or odd
    if (randomNumber % 2 == 0) {
        document.write("- is an even number." + "<br />");
    } else {
        document.write("- is an odd number." + "<br />");
    }
    // Greater than or less than 100
    if (randomNumber <= 100) {
        document.write("- is less than 100." + "<br />");
    } else {
        document.write("- is greater than 100." + "<br />");
    }

    // Is randomNumber positive or negative
    if (randomNumber >= 0) {
        document.write("- is a positive number" + "<br />");
    } else {
        document.write("- is a negative number" + "<br />");
    }

    // Is randomNumber the year of my birth
    if (randomNumber === 1991) {
        document.write("- is the year of my birth!" + "<br />");
    } else {
        document.write("- is not the year of my birth.");
    }

}

function exercise02Part2() {
    "use strict";
    // PART 2: YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration
    var randomWord;

    // Variable Assignment
    randomWord = prompt("Enter a random word: ");


    // Logical Assignment

    document.write('The word, "' + randomWord + '"' + "<br />");
    // length of user's entered word
    if (randomWord.length > 10) {
        document.write("- has a length that is greater than 10." + "<br />");
    } else {
        document.write("- does not have a length that is greater than 10." +
            "<br />");
    }

    // lesser than Algebra
    if (randomWord < "Algebra") {
        document.write('- is less than, "Algebra".' + "<br />");
    } else {
        document.write('- is not less than, "Algebra".' +
            "<br />")
    }

    // greater than Singularity
    if (randomWord > "Singularity") {
        document.write('- is greater than the word, "Singularity".' +
            "<br />");
    } else {
        document.write('- is not greater than the word, "Singularity".' +
            "<br />");
    }

    // uppercase or lowercase
    const firstChar = randomWord.charCodeAt(0);
    if (firstChar >= 65 && firstChar <= 90) {
        document.write("- starts with an uppercase letter." +
            "<br />");
    } else if (firstChar >= 97 && firstChar <= 122) {
        document.write("- starts with a lowercase letter.");
    }


}