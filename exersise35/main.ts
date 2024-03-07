// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

//list of the animals with common characterstics

const animals: string[] = ["cat", "dog", "goat"];

console.log("List of animals:");
// print the names of each animal by using for of loop
for (const animal of animals) {
    console.log(animal);
}
// print a statemnt about each animal
console.log("\n statements about each animal:")
for (const animal of animals) {

    if(animal==="dog"){
    console.log(` a ${animal}is a great pet.`);
} 
else if(animal==="cat")

{
console.log(` a ${animal}is a great pet.`);}

else if(animal==="goat")

{
    console.log(`a ${animal}is a great pet`)
}




};

// common characterstics
console.log("\n what these aninal have common?");
console.log("any of these animal could  be a great pet!");