// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicianNames = ["Harry porter", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the great ".concat(magician); });
    return greatMagicians;
}
var greatMagicianNames = make_great(magicianNames);
console.log("Original magicians:");
show_magicians(magicianNames);
console.log("\nGreat magicians:");
show_magicians(greatMagicianNames);
// Of course! Let's break down the code step by step:
// 1. **Defining the Magician Names:**
//    ```typescript
//    const magicianNames: string[] = ["Harry porter", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
//    ```
//    - Here, we have an array named `magicianNames` that contains names of magicians. Each name is a string, and all of these strings are stored inside square brackets `[...]`.
// 2. **Showing Magicians:**
//    ```typescript
//    function show_magicians(magicians: string[]): void {
//        for (const magician of magicians) {
//            console.log(magician);
//        }
//    }
//    ```
//    - This function `show_magicians` takes an array of magician names as input (parameter named `magicians`).
//    - It then goes through each magician's name in the array using a loop and prints each name to the console.
// 3. **Making Magicians Great:**
//    ```typescript
//    function make_great(magicians: string[]): string[] {
//        const greatMagicians: string[] = magicians.map(magician => `the great ${magician}`);
//        return greatMagicians;
//    }
//    ```
//    - This function `make_great` also takes an array of magician names as input (parameter named `magicians`).
//    - It uses the `map` function to go through each magician's name in the array.
//    - For each magician's name, it adds "the great" in front of it and stores the modified name in a new array called `greatMagicians`.
//    - Finally, it returns this new array of great magician names.
// 4. **Calling Functions and Displaying Results:**
//    ```typescript
//    const greatMagicianNames: string[] = make_great(magicianNames);
//    console.log("Original magicians:");
//    show_magicians(magicianNames);
//    console.log("\nGreat magicians:");
//    show_magicians(greatMagicianNames);
//    ```
//    - First, we call the `make_great` function with the original `magicianNames` array. This will create a new array containing the magician names with "the great" added to each name.
//    - We then display the original magicians' names by calling the `show_magicians` function with `magicianNames`.
//    - After that, we print a newline character `\n` followed by "Great magicians:" to provide a separation in the output.
//    - Finally, we display the great magicians' names by calling the `show_magicians` function with `greatMagicianNames`.
// This code demonstrates how to define functions, manipulate arrays, and call functions in TypeScript to work with magician names. Feel free to ask if you have any further questions!
