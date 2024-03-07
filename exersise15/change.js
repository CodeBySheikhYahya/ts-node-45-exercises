var Mehmanlist = [
    "amay",
    "gogo",
    "babai",
    "khalomama",
    "butt sahb",
    "sana khalique",
    "commisoner rawlpindi",
];
var guestnamewhocantcome = "khalomama";
console.log("".concat(guestnamewhocantcome, " cant make dinner"));
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var newGUEST = "Aijaz ali jalbani";
var indexofguestnamewhocantcome = Mehmanlist.indexOf(guestnamewhocantcome);
// console.log(indexofguestnamewhocantcome);
if (indexofguestnamewhocantcome !== -1) {
    Mehmanlist[indexofguestnamewhocantcome] = newGUEST;
}
//    console.log(Mehmanlist[3])
console.log("second set of invitation");
Mehmanlist.forEach(function (guest) {
    console.log("dear ".concat(guest, ", you are invited to dinner"));
});
