// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


const magicianNames: string[] = ["Harry porter", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}

const originalMagicianNames: string[] = magicianNames.slice(); // Creating a copy of the original array
const greatMagicianNames: string[] = make_great(originalMagicianNames);

console.log("Original magicians:");
show_magicians(originalMagicianNames);

console.log("\nGreat magicians:");
show_magicians(greatMagicianNames);







// Absolutely! Let's break down the code in a simpler way:

// 1. **Original Magician Names:**
//    ```typescript
//    const magicianNames: string[] = ["Harry porter", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
//    ```
//    - We start by making a list of magician names. Each name is stored as a string inside square brackets `[...]`.

// 2. **Displaying Magician Names:**
//    ```typescript
//    function show_magicians(magicians: string[]): void {
//        for (const magician of magicians) {
//            console.log(magician);
//        }
//    }
//    ```
//    - This function `show_magicians` is used to show the names of the magicians. It takes a list of magician names as input.
//    - It goes through each magician's name in the list and prints it out.

// 3. **Making Magicians Great:**
//    ```typescript
//    function make_great(magicians: string[]): string[] {
//        const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
//        return greatMagicians;
//    }
//    ```
//    - This function `make_great` is used to make the magicians great! It takes a list of magician names as input.
//    - It creates a new list (`greatMagicians`) by adding "the Great" in front of each magician's name.
//    - Then, it returns this new list of great magician names.

// 4. **Creating a Copy:**
//    ```typescript
//    const originalMagicianNames: string[] = magicianNames.slice();
//    ```
//    - We create a copy of the original magician names array. This is done using the `slice()` method. It ensures that any changes made to the copied array won't affect the original one.

// 5. **Calling Functions and Displaying Results:**
//    ```typescript
//    const greatMagicianNames: string[] = make_great(originalMagicianNames);

//    console.log("Original magicians:");
//    show_magicians(originalMagicianNames);

//    console.log("\nGreat magicians:");
//    show_magicians(greatMagicianNames);
//    ```
//    - We call the `make_great` function with the copied array of magician names (`originalMagicianNames`). This creates a new list of great magician names (`greatMagicianNames`).
//    - We then display the original list of magician names and the list of great magician names using the `show_magicians` function.

// This code helps us understand how to work with arrays of strings in TypeScript, how to modify them, and how to ensure that the original array remains unchanged.