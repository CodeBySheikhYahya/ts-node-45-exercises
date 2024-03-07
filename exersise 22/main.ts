// Define the function createVegetable with three parameters: name, color, and taste
function createVegetable(name: string, color: string, taste: string) {
    // Return an object containing properties name, color, and taste with values from the parameters
    return {
        name: name,
        color: color,
        taste: taste
    };
}

// Create an array for vegetables
const vegetables = [
    createVegetable("carrot", "orange", "sweet"), // Comma added instead of a semicolon
    createVegetable("spinach", "green", "earthy"), // Comma added instead of a semicolon
    createVegetable("Brinjal", "Purple", "Mild and slightly bitter") // Removed space before Purple
];

// ACCES INVALID INDEX
const invalidIndex=10; // there are only 3 elemnt in the array;so it will cause an error
console.log(`vegetable at index ${invalidIndex}:`,vegetables[invalidIndex]);

// print the vegetables
vegetables.forEach((vegetable) => {
    console.log(`Name: ${vegetable.name}, Color: ${vegetable.color}, Taste: ${vegetable.taste}`);
});
    

// Yes, the provided code intentionally includes an error to demonstrate how errors can occur in programming. Specifically, the error is accessing an index in the `vegetables` array that does not exist (`invalidIndex = 10`). This causes an "index out of range" error because there are only three elements in the array.

// By including intentional errors like this, beginners can learn about the importance of handling errors in their code and the significance of accessing valid indices within arrays. It's a common practice in programming tutorials to illustrate error handling and debugging techniques.









