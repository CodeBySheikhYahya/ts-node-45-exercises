// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// Template literals in TypeScript allow for easy string interpolation, multiline strings, and expression evaluation within backticks (`).
// define the array of favorite pizza
var favoritepizzas = ["Margherita", "Pepperoni", "Vegetarian"];
// print the name of each piiza using forloop
console.log("my favorite pizza are:");
for (var i = 0; i < favoritepizzas.length; i++) {
    console.log(favoritepizzas[i]);
}
// print a  sentence for each pizza
console.log("\n i like these pizzas:");
for (var i = 0; i < favoritepizzas.length; i++) {
    console.log("i like ".concat(favoritepizzas[i], " pizza"));
}
// print an additional sentence that how much i like pizza
console.log("\n i really like this pizza");
