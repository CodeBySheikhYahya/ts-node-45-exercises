// andwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(...items: string[]): void {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please order some items.");
    } else {
        console.log("Sandwich summary:");
        items.forEach((item, i) => {
            console.log(`${i + 1}. ${item}`); // Corrected the concatenation
        });
    }
    console.log("\n");
}

// Call the function with different number of arguments
makeSandwich("turkey", "tomato", "mayonise", "lettuce");
makeSandwich("ham", "cheese");
makeSandwich("peanut butter", "jelly", "banana", "honey");
makeSandwich();


// Absolutely! Let's break down the code in a beginner-friendly way:

// ```typescript
// function makeSandwich(...items: string[]): void {
//     // Checking if any items were provided
//     if (items.length === 0) {
//         // If no items were provided, print a message
//         console.log("You ordered an empty sandwich. Please order some items.");
//     } else {
//         // If items were provided, print a summary of the sandwich
//         console.log("Sandwich summary:");
//         // Loop through each item in the sandwich
//         items.forEach((item, i) => {
//             // Display each item with its position in the sandwich
//             console.log(`${i + 1}. ${item}`);
//         });
//     }
//     console.log("\n"); // Adding a newline for readability
// }

// // Call the function with different number of arguments
// makeSandwich("turkey", "tomato", "mayonnaise", "lettuce"); // Sandwich with 4 items
// makeSandwich("ham", "cheese"); // Sandwich with 2 items
// makeSandwich("peanut butter", "jelly", "banana", "honey"); // Sandwich with 4 items
// makeSandwich(); // Empty sandwich order
// ```

// // Explanation for beginners:

// // 1. **Function Definition (`makeSandwich`):**
// //    - This function is called `makeSandwich` and it's used to make a summary of a sandwich.
// //    - It can take any number of items (ingredients) for the sandwich.

// // 2. **Checking for Empty Sandwich:**
// //    - It first checks if any items were provided. If not, it prints a message asking to order some items.

// // 3. **Displaying Sandwich Summary:**
// //    - If items were provided, it prints a summary of the sandwich.
// //    - It loops through each item in the sandwich using a `forEach` loop.

// // 4. **Displaying Each Item:**
// //    - For each item in the sandwich, it displays the item along with its position (index) in the sandwich.

// // 5. **Function Calls:**
// //    - It demonstrates how to use the `makeSandwich` function by calling it multiple times with different numbers of arguments (items).
//    - Each function call creates a different sandwich and displays its summary.

// This code helps us understand how to define functions, use conditional statements, loop through arrays, and call functions in TypeScript to work with sandwich orders. Feel free to ask if you have any further questions!