// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
//list of the animals with common characterstics
var animals = ["cat", "dog", "goat"];
console.log("List of animals:");
// print the names of each animal by using for of loop
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// print a statemnt about each animal
console.log("\n statements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    if (animal === "dog") {
        console.log(" a ".concat(animal, "is a great pet."));
    }
    else if (animal === "cat") {
        console.log(" a ".concat(animal, "is a great pet."));
    }
    else if (animal === "goat") {
        console.log("a ".concat(animal, "is a great pet"));
    }
}
;
// common characterstics
console.log("\n what these aninal have common?");
console.log("any of these animal could  be a great pet!");
