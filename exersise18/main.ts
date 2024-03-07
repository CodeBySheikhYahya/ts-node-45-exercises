let traveldestination:string[]=["makka","madina","newyork","torrento","dubai"];
console.log("original order")
console.log(traveldestination)
console.log("/n Print your array in alphabetical order without modifying the actual list.")
console.log([...traveldestination].sort())
//In summary:

// When you see `...` in TypeScript or JavaScript code, it's called the spread operator.
// It's like making a copy of something, so you can work with the copy without changing the original.
// For example, `console.log([...traveldestination].sort())` makes a copy of the `traveldestination` list, sorts the copy, and prints it out, leaving the original list unchanged.
// It's a way to keep your original data safe while still being able to do things with it.
// steep 4 Show that your array is still in its original order by printing it.
console.log(" \n printing that the array is still in its original form")
console.log(traveldestination)
// step 5  Print your array in reverse alphabetical order without changing the order of the original list.
console.log(" \n reverse alphabetical order without changing the order of the original list")
console.log([...traveldestination].sort().reverse())

//step 6 • Show that your array is still in its original order by printing it again.

console.log(" \n printing that the array is still in its original form")
console.log(traveldestination)

// step 7 
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n reverse order")
traveldestination.reverse()
console.log(traveldestination);
//step 6 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n back to original order")
traveldestination.reverse()
console.log(traveldestination);

// step 9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("\n back to alphabetical order")
traveldestination.sort()
console.log(traveldestination);
// step 10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n change to  reverse alphabetical order")
traveldestination.sort().reverse()
console.log(traveldestination);