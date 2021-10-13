function findLowStockInventoryItems() {
    "use strict";


    // Declare Constants
    const INITIAL_VALUE = 0;
    const MINIMUM_STOCK_LIMIT = 20;

    // Declare variables
    var totalLowStockItems = INITIAL_VALUE;
    var currentItemNumber;
    var currentItemDescription;
    var currentStockAmount;
    var formattedItemOutput;
    //var testCounter; // for testing

    //testCounter = 0; // for testing

    // Open the Inventory Items records
    var records = openInventoryItemsRecords();

    // Output a report heading
    document.write("<h3>Low Stock Items</h3>");

    // Start table
    document.write("<table>");
    document.write("<tr><th>Stock Number</th><th>Item Description</th><th>Stock Amount</th></tr>");

    // Read through all inventory items
    // looking for low stock items
    while (records.readNextRecord()) {

        // uncomment below to test a sub-set of records
        /*if (testCounter === 10) {
            break;
        }
        testCounter++;
        */

        // check if stock is low for this item
        currentStockAmount = records.getItemStockAmount();

        // Compare with the minimum stock limit
        if (currentStockAmount < MINIMUM_STOCK_LIMIT) {
            // output the item with low stock
            currentItemNumber = records.getItemNumber();
            currentItemDescription = records.getItemDescription();
            formattedItemOutput = "<tr><td>"
                    + currentItemNumber
                    + "</td><td>"
                    + currentItemDescription
                    + "</td><td>"
                    + currentStockAmount
                    + "</td></tr>";
            document.write(formattedItemOutput);
            totalLowStockItems++;
        }
    }

    // Output the total footer
    document.write("<tr><td colspan='3'><b>"
            + "Total Low Stock Items:"
            + totalLowStockItems
            + "</b></td></tr>");
}
