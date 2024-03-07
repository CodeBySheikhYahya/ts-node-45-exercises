"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// • FIRST VERSION If the alien is green
var alien_color = "green";
if (alien_color === "green") {
    console.log("congrats you just earn a 5  points");
}
else if (alien_color === "yellow") {
    console.log("gongrats you just earned a 10 points ");
}
else if (alien_color === "red") {
    console.log("congrats you just earned a 13 points");
}
else {
    console.log("unknown alien color.");
}
// VERSION 2  If the alien is yellow
console.log(" second version of this program when the alien is yellow");
alien_color = "yellow";
if (alien_color === "green") {
    console.log("congrats you just earn a 5  points");
}
else if (alien_color === "yellow") {
    console.log("congrats you just earned a 10 points ");
}
else if (alien_color === "red") {
    console.log("congrats you just earned a 13 points");
}
else {
    console.log("unknown alien color.");
}
// THIRD VERSION OF CODE f the alien is red,
console.log("third version of code when  the aliean is red");
alien_color = "red";
if (alien_color === "green") {
    console.log("congrats you just earn a 5  points");
}
else if (alien_color === "yellow") {
    console.log("congrats you just earned a 10 points ");
}
else if (alien_color === "red") {
    console.log("congrats you just earned a 15 points");
}
else {
    console.log("unknown alien color.");
}
