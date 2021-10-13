// my first function that displays a messsage
function displayMessage() {
    document.write("Hi, from a function. <br />");
}


function lab09Part01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    displayMessage();
    displayMessage();
    displayMessage();
    displayMessage();


}

function lab09Part02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    document.write("Hello, ");
    outputFullName();
    document.write(". How are you?" + "<br />");
    outputFullName();
    document.write(", has left the building.");

}
// This function asks the user for their name displays the users full name
function outputFullName() {
    var firstName;
    var lastName;
    var middleInitial;

    firstName = prompt("Enter your first name: ");
    lastName = prompt("Enter your last name: ");
    middleInitial = prompt("Enter your middle initial: ");

    document.write(`${firstName} ${middleInitial} ${lastName}`);
}