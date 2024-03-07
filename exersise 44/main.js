// andwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please order some items.");
    }
    else {
        console.log("Sandwich summary:");
        items.forEach(function (item, i) {
            console.log("".concat(i + 1, ". ").concat(item)); // Corrected the concatenation
        });
    }
    console.log("\n");
}
// Call the function with different number of arguments
makeSandwich("turkey", "tomato", "mayonise", "lettuce");
makeSandwich("ham", "cheese");
makeSandwich("peanut butter", "jelly", "banana", "honey");
makeSandwich();
