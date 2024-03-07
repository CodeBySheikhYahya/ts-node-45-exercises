// .map ka jo function hotha hay wo hamay aik arrays say aik or new array bana kar detha ha
// .map ko use karnay ka treeka
//  const num1:number[]=[1,2,3,4,5,6,7,8,9,10]
//  console.log(num1);
// ab hamay .map ko use karthay huway is num2 walay say dooosra array banana hay
//  const num2:number[]=num1.map(j=>j*3)
//  console.log(num2);
// ab yahan per j ki jaga ham kuch bhi lay saktay hain ye just reresent karnay k lia hay or ab .map ki waja sya ye jo num1 k saray number hain unko 3 say multiply kar k aik naya array banadega num 2 k naam say
// step 1 array
var current_users = ["qamama", "khalomama", "unnmamam", "haroon mama", "aslam mama", "baba"];
// ab jo new array banangay usmay 3 naam same lengay jo new user k naam say banegii
var new_users = ["qamAma", "khaloMama", "unnmamam", "huraira", "aijaz"];
// step 2 function (2 arrays ko campare kara hay currect users waali or new users waalu)
// first step of function  
function CheckUserNames(current_users, new_users) {
    var LowerCaseCurrentusers = current_users.map(function (user) { return user.toLowerCase(); });
    // 2nd step of function
    for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
        var newuser = new_users_1[_i];
        var lowercasenewusers = newuser.toLowerCase();
        if (LowerCaseCurrentusers.includes(lowercasenewusers)) {
            console.log("username \"".concat(newuser, "\" is already taken. please enter a newusername."));
        }
        else {
            console.log("username \"".concat(newuser, "\" is available"));
        }
    }
}
// console.log(current_users)
// test the function
CheckUserNames(current_users, new_users);
