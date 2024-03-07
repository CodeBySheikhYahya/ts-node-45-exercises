// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var userNames = ['admin', 'sheikh yahya khan', 'ebad', 'mehmoona', 'aday', 'baba', 'javeria'];
function greet_User() {
    for (var i in userNames) {
        if (userNames[i].toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a statuus report?");
        }
        else {
            console.log("hello ".concat(userNames[i], ",thank you for logging in again."));
        }
    }
}
greet_User();
// ismay hamnay for in ka loop use kara hay or jo i hay wo array k index ko show kartha hay
