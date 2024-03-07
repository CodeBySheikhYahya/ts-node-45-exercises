// Define the function createVegetable with three parameters: name, color, and taste
function createVegetable(name, color, taste) {
    // Return an object containing properties name, color, and taste with values from the parameters
    return {
        name: name,
        color: color,
        taste: taste
    };
}
// Create an array for vegetables
var vegetables = [
    createVegetable("carrot", "orange", "sweet"), // Comma added instead of a semicolon
    createVegetable("spinach", "green", "earthy"), // Comma added instead of a semicolon
    createVegetable("Brinjal", "Purple", "Mild and slightly bitter") // Removed space before Purple
];
// ACCES INVALID INDEX
var invalidIndex = 10; // there are only 3 elemnt in the array;so it will cause an error
console.log("vegetable at index ".concat(invalidIndex, ":"), vegetables[invalidIndex]);
// print the vegetables
vegetables.forEach(function (vegetable) {
    console.log("Name: ".concat(vegetable.name, ", Color: ").concat(vegetable.color, ", Taste: ").concat(vegetable.taste));
});
