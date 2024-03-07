// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


// Certainly! Let's walk through the code and the conditions:

// 1. The variable `age` is set to 25.
// 2. The code checks the value of `age` against each condition in the if-else chain.

// - 25 is not less than 2, so it doesn't satisfy the condition for being a baby.
// - 25 is not less than 4, so it doesn't satisfy the condition for being a toddler.
// - 25 is not less than 13, so it doesn't satisfy the condition for being a kid.
// - 25 is not less than 20, so it doesn't satisfy the condition for being a teenager.
// - 25 is less than 65, so it satisfies the condition for being an adult.

// Since none of the previous conditions were met, the code reaches the condition for being an adult, and it prints "The person is an adult."

