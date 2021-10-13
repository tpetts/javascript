function lab03() {
    "use strict";

    // YOUR CODE STARTS AFTER THIS LINE:
    // Constant Declaration
    const STATE_TAX_AMOUNT = 0.05;
    const CITY_TAX_AMOUNT = 0.03;

    // Variable Declaration
    var retailPrice;
    var stateSalesTax;
    var citySalesTax;
    var totalWithTax;

    // Assign values to variables
    retailPrice = prompt( "Enter Retail Price: " );
    retailPrice = Number( retailPrice );

    // Calculate sales tax
    stateSalesTax = retailPrice * STATE_TAX_AMOUNT;
    citySalesTax = retailPrice * CITY_TAX_AMOUNT;
    totalWithTax = retailPrice + stateSalesTax + citySalesTax;

    // Display three variables and their sum
    document.write( "retailPrice: $" + retailPrice );
    document.write( "<br />" );
    document.write( "stateSalesTax: $" + stateSalesTax );
    document.write( "<br />" );
    document.write( "citySalesTax: $" + citySalesTax );
    document.write( "<br />" );
    document.write( "totalWithTax: $" + totalWithTax );
}