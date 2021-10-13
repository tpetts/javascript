function lab01() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    var time;
    var distance;
    var pace;

    time = prompt("How long did you walk/run for (in hours)?");
    distance = prompt("How far did you walk/run (in miles).")

    time = Number(time)
    distance = Number(distance);

    pace = distance / time;


    document.write("Your pace was " + pace + " mph!");

    // END OF YOUR CODE

}
