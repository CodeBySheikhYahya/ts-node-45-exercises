// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// arrays of magicians name

const magicianNames: string[] = ["Harry porter", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// call the function to show magicians name 

show_magicians(magicianNames);



// Sure, let's break down the code into simple parts:

// 1. **Array Creation**: 
//     ```typescript
//     const magicianNames: string[] = ["Harry porter", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
//     ```
//     Here, we create an array called `magicianNames` that stores names of magicians. `string[]` tells us that this array will contain strings (text), and we list the names inside square brackets `[]` separated by commas.

// 2. **Function Definition**: 
//     ```typescript
//     function show_magicians(magicians: string[]): void {
//         // function code goes here
//     }
//     ```
//     We define a function named `show_magicians` which takes an array of strings (magician names) as input, represented by `magicians: string[]`. `void` means the function doesn't return any value.

// 3. **Looping through the Array**:
//     ```typescript
//     for (const magician of magicians) {
//         // loop body
//     }
//     ```
//     This loop goes through each magician's name in the `magicians` array one by one.

// 4. **Printing each Magician's Name**:
//     ```typescript
//     console.log(magician);
//     ```
//     Inside the loop, `console.log()` is used to print each magician's name to the console.

// 5. **Function Call**:
//     ```typescript
//     show_magicians(magicianNames);
//     ```
//     This line calls the `show_magicians` function and passes the `magicianNames` array as an argument. This means we're telling the function to display the names of magicians stored in the `magicianNames` array.

// In simple terms, the code creates a list of magician names, defines a function to show these names, then uses a loop to go through each name and display it on the screen. Finally, it calls the function to perform this action.
