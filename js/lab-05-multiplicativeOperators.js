function lab05() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    // Variable declaration
    var totalPrice;
    var widgetPrice;
    var widgetQuantity;
    var dodadPrice;
    var dodadQuantity;
    var gadgetPrice;
    var gadgetQuantity;
    var currentValue;
    var averagePrice;
    var widgetTotal;
    var gadgetTotal;
    var dodadTotal;

    // Variable Assignment
    widgetPrice = prompt( "Enter Widget Price:" );
    dodadPrice = prompt( "Enter Dodad Price:" );
    gadgetPrice = prompt( "Enter Gadget Price:" );

    widgetPrice = Number( widgetPrice );
    dodadPrice = Number( dodadPrice );
    gadgetPrice = Number( gadgetPrice );

    widgetQuantity = prompt( "How many Widgets?" );
    dodadQuantity = prompt( "How many Dodads?" );
    gadgetQuantity = prompt( "How many Gadgets?" );

    widgetQuantity = Number( widgetQuantity );
    dodadQuantity = Number( dodadQuantity );
    gadgetQuantity = Number( gadgetQuantity );

    widgetTotal = widgetQuantity * widgetPrice;
    dodadTotal = dodadQuantity * dodadPrice;
    gadgetTotal = gadgetQuantity * gadgetPrice;

    // Calculations Section
    totalPrice = widgetTotal + dodadTotal + gadgetTotal;
    currentValue = widgetQuantity + dodadQuantity + gadgetQuantity;
    averagePrice = totalPrice / currentValue;

    // Writing it out
    document.write( "Widgets: " + widgetQuantity + " @ $" + widgetPrice +
        " for $" + widgetTotal.toFixed( 2 ) );
    document.write( "<br />" );
    document.write( "Dodads: " + dodadQuantity + " @ $" + gadgetPrice +
        " for $" + dodadTotal.toFixed( 2 ) );
    document.write( "<br />" );
    document.write( "Gadgets: " + gadgetQuantity + " @ $" + gadgetPrice +
        " for $" + gadgetTotal.toFixed( 2 ) );
    document.write( "<br />" );
    document.write( "<br />" );
    document.write( "Total: " + "$" + totalPrice.toFixed( 2 ) );
    document.write( "<br />" );
    document.write( "<br />" );
    document.write( "Average Price of Items:" + " $" + averagePrice.toFixed(
        2 ) );
}