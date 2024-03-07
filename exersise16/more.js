"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mehmanlist = [
    "amay",
    "gogo",
    "babai",
    "khalomama",
    "butt sahb",
    "sana khalique",
    "commisoner rawlpindi",
];
for (var _i = 0, Mehmanlist_1 = Mehmanlist; _i < Mehmanlist_1.length; _i++) {
    var guest = Mehmanlist_1[_i];
    // console.log(`HELLO ${guest},WE FPUND A BIGGER DINNER TABLE`)
}
var newmehman = "quidii no:804";
Mehmanlist.unshift(newmehman);
//console.log(Mehmanlist);
// hamnay jo ye .unshift use kara iskii waja say ye jo naam add kara tha ye top per agaya agar array may kisi bhi naam ko top per laana ho tho ye uese karengay
// In TypeScript, .unshift() is a method that is used to add elements to the beginning of an array. Let's break it down easily:
var newmiddlemehman = "ebad bhai";
// beech may value lanay k lia idex ko divide by 2 karengay
var middleindex = Math.floor(Mehmanlist.length / 2);
Mehmanlist.splice(middleindex, 0, newmiddlemehman);
// console.log(Mehmanlist);
var newguestattheend = "may aday";
Mehmanlist.push(newguestattheend);
// console.log(Mehmanlist);
console.log("new set of invitation of messege");
for (var _a = 0, Mehmanlist_2 = Mehmanlist; _a < Mehmanlist_2.length; _a++) {
    var guest = Mehmanlist_2[_a];
    console.log("dear ".concat(guest, ",Join us for a delicious dinner under the stars at 7 PM tomorrow!"));
}
