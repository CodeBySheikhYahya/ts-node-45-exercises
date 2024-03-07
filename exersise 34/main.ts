// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// Template literals in TypeScript allow for easy string interpolation, multiline strings, and expression evaluation within backticks (`).

// define the array of favorite pizza
const favoritepizzas=["Margherita","Pepperoni","Vegetarian"];
// print the name of each piiza using forloop
console.log("my favorite pizza are:")
for(let i=0;i<favoritepizzas.length;i++){

    console.log(favoritepizzas[i]);
}
// print a  sentence for each pizza
console.log("\n i like these pizzas:");
for(let i=0;i<favoritepizzas.length;i++){
    console.log(`i like ${favoritepizzas[i]} pizza`);
}
// print an additional sentence that how much i like pizza
console.log("\n i really like this pizza")




// 1. **Printing Pizza Names with a For Loop**:
//    - We start with an array containing the names of our favorite pizzas: "Margherita", "Pepperoni", and "Vegetarian".
//    - Using a `for` loop, we go through each pizza name in the array and print it out one by one.

// 2. **Printing a Sentence for Each Pizza**:
//    - After printing each pizza name, we modify the loop to print a sentence about liking each pizza.
//    - We use template literals to make it easy to include the pizza name dynamically in each sentence.

// 3. **Additional Sentence about Liking Pizza**:
//    - Finally, after the loop, we print an additional sentence outside the loop to express how much we like pizza in general.

// Overall, the program goes through each step of printing the pizza names, adding a liking sentence for each pizza, and then expressing an overall fondness for pizza at the end.