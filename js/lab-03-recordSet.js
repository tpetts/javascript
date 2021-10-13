function lab03() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:

    // Declare Variables
    var currentNumber;
    var currentDescription;
    var currentStockAmount;

    var itemRecords;
    var totalInventoryQty;
    var totalInventoryRecords;


    totalInventoryQty = 0;
    totalInventoryRecords = 0;
    // Open the Inventory Items Records and make them
    // available to the script
    itemRecords = openInventoryItemsRecords();

    document.write("The Inventory Items Record Set:<br /><br />");

    // Read the next record, test to see if there
    // is a next record and then output it
    while (itemRecords.readNextRecord()) {
        totalInventoryRecords++;
        currentNumber = itemRecords.getItemNumber();
        currentDescription = itemRecords.getItemDescription();
        currentStockAmount = itemRecords.getItemStockAmount();
        totalInventoryQty += currentStockAmount;

        document.write(currentNumber + "\t" + currentDescription +
            "\t" + currentStockAmount + "<br />");

        document.write("Real-time quantity total: " + totalInventoryQty +
            "<br />");
    }

    document.write("<br /><br />");
    document.write("Total Inventory Records: " + totalInventoryRecords);
    document.write("<br />");
    document.write("Total Amount of Items in Inventory: " + totalInventoryQty);
}