var car = {
    Name: "civic",
    price: 2000000,
    description: "0 metere with great features",
};
// define an array of objects
// Using plural terms for arrays, like `cars`, indicates that the array holds multiple instances of the concept it represents. In this case, it stores multiple cricket ground objects. This convention makes the code more descriptive and readable, highlighting that the array contains multiple items rather than just one.
var cars = [];
//pushisng multiple objects
cars.push(car);
cars.push({ Name: "carrola",
    price: 1000000,
    description: "44km e car with great features" });
var car3 = {
    Name: "mira",
    price: 36000000,
    description: "1000km metere with great features",
};
cars.push(car3);
console.log(cars);
