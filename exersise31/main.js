// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// empty array case
var userNames = ['admin', 'sheikh yahya khan', 'ebad', 'mehmoona', 'aday', 'baba', 'javeria'];
function greetUsers(userNames) {
    if (userNames.length === 0) {
        console.log("We need to find some users!");
        return;
    }
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var userName = userNames_1[_i];
        if (userName.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(userName, ", thank you for logging in again."));
        }
    }
}
console.log("For non-empty usernames:\n");
greetUsers(userNames);
console.log("\n\nFor empty usernames:\n");
userNames = [];
greetUsers(userNames);
// 1. We have a list of usernames called `userNames`.
// 2. We defined a function called `greetUsers` to greet these users.
// 3. Inside `greetUsers`, we check if there are any users in the list. If there are no users, we print "We need to find some users!" and stop.
// 4. If there are users, we greet each user individually. If the user is 'admin', we give a special greeting. Otherwise, we give a general greeting.
// 5. We then call `greetUsers` twice: once with some usernames and once with an empty list to see how it behaves in both cases.
// 6. Finally, we print the results.
// That's it! We're just greeting users, and if there aren't any, we say we need to find some.
