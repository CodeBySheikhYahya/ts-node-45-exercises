"use strict";
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
Object.defineProperty(exports, "__esModule", { value: true });
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
var car = "subaru";
console.log("is car == subaru?i predict true"); //In TypeScript, the `==` operator checks for equality between two values, returning `true` if they are equal after type coercion, and `false` otherwise.
console.log(car == 'subar'); //u true
console.log("is car == honda?i predict false");
console.log(car == 'Honda'); // true
// In TypeScript, the `===` operator checks for strict equality between two values, returning `true` if they are equal in both value and type, and `false` otherwise.
console.log("is car === subaru?i predict true");
console.log(car === 'subaru'); // true
console.log("is car === Subaru?i predict FALSE");
console.log(car == 'Subaru'); // false
console.log("is car !== subaru?i predict true");
console.log(car !== 'subaru');
console.log("is car != mazda?i predict true");
console.log(car != 'mazda');
console.log("is car != subaru?i predict false");
console.log(car != 'subaru');
var age = 22;
console.log("is age >18?i predict true");
console.log(age > 18);
console.log("is age is <21, i predict false");
console.log(age < 21);
console.log("age is =22 my prediction is true");
console.log(age === 22); // true
var carrot = "red";
console.log("carrot is red. my predicition is true");
console.log(carrot == "red"); //true
