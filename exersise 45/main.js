"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function creatCar(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
// exammple usage
const MyCar = creatCar("Rolls-Royce", "Noire Droptail", ["color", "black"], ["optional features", "luxurious "], ["speed", "500kmph"]);
// hamnay any ka use kara hay jiskii waja say hamay benifit hay ham kisi bhi type ko use karsaktay hain
// doosra ye k ham yahan per jithna marzee properties dey saktay hain q k hamnay arguments ka use kara hua hay
console.log(MyCar);
// This code is a TypeScript function that creates a car object with information about the manufacturer, model, and any additional properties you want to add.
// Let's break down the function:
// ```typescript
// function createCar(manufacturer: string, model: string, ...properties: [string, any][]): any {
//     const car: any = {
//         manufacturer,
//         model,
//     };
//     for (const [key, value] of properties) {
//         car[key] = value;
//     }
//     return car;
// }
// ```
// 1. The `createCar` function takes in three parameters: `manufacturer` (the car's manufacturer, as a string), `model` (the car's model name, as a string), and `...properties` (this is using TypeScript's rest parameter syntax, which allows you to pass an arbitrary number of additional parameters).
// 2. Inside the function, it first creates an empty object called `car`.
// 3. It then assigns the `manufacturer` and `model` parameters to the respective properties of the `car` object.
// 4. Next, it loops through each additional property provided in the `properties` parameter. These properties are passed in as an array of key-value pairs, where the key is a string (property name) and the value can be of any type.
// 5. Inside the loop, it adds each property to the `car` object.
// 6. Finally, it returns the `car` object.
// In the example usage:
// ```typescript
// const MyCar = createCar("Rolls-Royce", "Noire Droptail", ["color", "black"], ["optional features", "luxurious"], ["speed", "500kmph"]);
// ```
// You're calling the `createCar` function with the manufacturer "Rolls-Royce" and the model "Noire Droptail", and then passing in additional properties like color, optional features, and speed. These additional properties are passed as arrays where the first element is the property name (e.g., "color") and the second element is the property value (e.g., "black").
// Finally, `console.log(MyCar)` prints out the car object to the console to verify that all the information was stored correctly.
