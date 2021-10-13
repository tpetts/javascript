function lab01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Declare Variables
    var oneMoreVariable;

    // Assign Variables
    oneMoreVariable = prompt("Enter the number 5: ");
    oneMoreVariable = Number(oneMoreVariable);


    // Logic section
    if (oneMoreVariable === 5) {
        document.write(
            "Thanks, that's just the right number and I'm very happy now!");
    } else {
        document.write("That's not the right number");
    }

}