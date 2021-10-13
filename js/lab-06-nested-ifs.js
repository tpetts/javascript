function lab06Part01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Constant Declarations
    const NAME_LIMIT = 1;
    // Variable Declarations
    var elNombre;
    var codeMonkey;
    var monkey;
    var nameInvalid;
    var cancelled;
    var codeMonkeyInvalid;

    // Variable Assignments & Validation Check
    do {
        nameInvalid = false;
        elNombre = prompt("What's your full name? ");
        if (elNombre === null) {
            cancelled = true;
            break;
        }
        if (elNombre.length < NAME_LIMIT) {
            nameInvalid = true;
            alert("Field cannot be empty, please try again.");
        }
    } while (nameInvalid);
    if (cancelled) {
        return;
    }

    // Variable Assignment & Validation Check
    do {
        codeMonkeyInvalid = false;
        codeMonkey = prompt("Pick one: (A/B/C/D)");
        if (codeMonkey === null) {
            cancelled = true;
            break;
        }
        codeMonkey = codeMonkey.toUpperCase();
        if (codeMonkey !== "A" && codeMonkey !== "B" && codeMonkey !== "C" &&
            codeMonkey !== "D") {
            codeMonkeyInvalid = true
            alert("Field cannot be empty, please try again.");
        }
    } while (codeMonkeyInvalid);
    if (cancelled) {
        return;
    }

    // Validation & Logic Statements
    if (codeMonkey === "A") {
        monkey = ("Hello, " + elNombre + ", how are you?");
    } else if (codeMonkey === "B") {
        monkey = ("Top of the morning to ya, " + elNombre + "!");
    } else if (codeMonkey === "C") {
        monkey = ("Hi, " + elNombre);
    } else if (codeMonkey === "D") {
        monkey = (elNombre + " is here! Welcome!");
    }

    // Write it out
    document.write(monkey);
}

function lab06Part02() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Variable Declaration
    var iceCreamChoice;
    var toppingChoice;

    iceCreamChoice = prompt(
        "Choose your flavor of choice: (V) for Vanilla (C) for Chocolate (S) for Strawberry: "
    );


    iceCreamChoice = iceCreamChoice.toUpperCase();


    // Variable Assignments & IF Statements
    if (iceCreamChoice === "V") {
        iceCreamChoice = "Vanilla Ice Cream";
        toppingChoice = prompt(
            "Would you like M&Ms or Reese's Pieces on top? (MM) for M&Ms (RP) for Reese's Pieces"
        );
        toppingChoice = toppingChoice.toUpperCase();
        if (toppingChoice === "MM") {
            toppingChoice = "M&Ms";
            document.write("You are having " + iceCreamChoice + " with " +
                toppingChoice + ". Delicious!");
        } else {
            toppingChoice = "Reese's Pieces";
            document.write("You are having " + iceCreamChoice + " with " +
                toppingChoice + ". MMMmmmm!");
        }

    } else if (iceCreamChoice === "C") {
        iceCreamChoice = "Chocolate Ice Cream";
        toppingChoice = prompt(
            "Would you like Brownies or Walnuts on top? (B) for Brownies (W) for Walnuts"
        );
        toppingChoice = toppingChoice.toUpperCase();
        if (toppingChoice === "B") {
            toppingChoice = "Brownies";
            document.write("You are having " + iceCreamChoice + " with " +
                toppingChoice + ". Yum!");
        } else {
            toppingChoice = "Walnuts";
            document.write("You are having " + iceCreamChoice + " with " +
                toppingChoice + ". Enjoy!");
        }

    } else if (iceCreamChoice === "S") {
        iceCreamChoice = "Strawberry Ice Cream";
        toppingChoice = prompt(
            "Would you like Pecans or Almonds on top? (P) for Pecans (A) for Almonds"
        );
        toppingChoice = toppingChoice.toUpperCase();
        if (toppingChoice === "P") {
            toppingChoice = "Pecans";
            document.write("You are having " + iceCreamChoice + " with " +
                toppingChoice + ". Bon Apetit!");
        } else {
            toppingChoice = "Almonds";
            document.write("You are having " + iceCreamChoice + " with " +
                toppingChoice + ". Yummy!");
        }
    }
}