var mehmanlist = [
    'quidii no:804',
    'amay',
    'gogo',
    'babai',
    'ebad bhai',
    'khalomama',
    'butt sahb',
    'sana khalique',
    'commisoner rawlpindi',
    'may aday'
];
//console.log(` i can only invite two people to dinner`)
while (mehmanlist.length > 2) {
    var removemehmaan = mehmanlist.pop();
    console.log(" sorry ".concat(removemehmaan, " i cant invite you to dinner ok sorry next time pakka bulaonga"));
}
for (var _i = 0, mehmanlist_1 = mehmanlist; _i < mehmanlist_1.length; _i++) {
    var name_1 = mehmanlist_1[_i];
    console.log("hey ".concat(name_1, "you are still invited buddy"));
}
// ab last k 2 naam bhi remove karnay hain or usko empty karna hay so is waja say ham baari baari kar .pop kii cmmand ko use karengay
mehmanlist.pop();
mehmanlist.pop();
console.log("guest list after dinner:", mehmanlist);
