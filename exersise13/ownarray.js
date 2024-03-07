// we just have to complete this question is in 3 steps only
//1-first we define empty array favorite transportation we give two bramnd name  
//2-then we push 
//3-apply foreach and get result
var favoriteVehicle = [];
favoriteVehicle.push(["motorcycle", "unique"]);
favoriteVehicle.push(["car", "daala"]);
favoriteVehicle.push(["bycycle", "bmx"]);
//console.log(favoriteVehicle);
//now according to cond we using for each loop to print series of statement
favoriteVehicle.forEach(function (_a) {
    var vehicle = _a[0], brand = _a[1];
    console.log("I would like to own a ".concat(brand, " ").concat(vehicle, "."));
});
